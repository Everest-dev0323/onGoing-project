import React, { useState, useRef } from "react"
import { Button, Table } from 'react-bootstrap'
import { Document, Page } from "react-pdf";
import { FaSearchPlus, FaSearchMinus, FaAngleLeft, FaAngleRight, FaExpand } from 'react-icons/fa';
import NoPDFPriview from '../../imgs/fetchie-section/content-empty-img-invoice.png'


const PDFPreview = ({fetchedFile, lineItems}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(1);

    const pdfWrapper = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    const changeScale = (offset) => {
        let temp = pageScale + offset;
        if(temp <= 0.1) setPageScale(0.1);
        else if(temp >= 40) setPageScale(40);
        else setPageScale(prevPageScale => prevPageScale + offset);
    }

    const zoomIn = () => {
        changeScale(0.1);
    }

    const zoomOut = () => {
        changeScale(-0.1);
    }

    const fitPageWidth = () => {
        if(pdfWrapper.current) {
            let pageWidth = pdfWrapper.current.children[0].offsetWidth;
            let pageCanvasWidth = pdfWrapper.current.children[0].children[0].children[0].offsetWidth;
            setPageScale(pageWidth / pageCanvasWidth * pageScale)
        }
    }

    return (
        <>
            <div className="d-flex flex-column pdf-preview">
                <div className="pdf-toolbar">
                    <div className="d-flex flex-row align-items-center justify-content-end pdf-btn-group">
                        <Button className="icon-btn" disabled={pageScale <= 0.1} onClick={zoomOut}>
                            <FaSearchMinus className="sidebar-icon"/>
                        </Button>
                        <Button className="icon-btn" disabled={pageScale >= 40} onClick={zoomIn}>
                            <FaSearchPlus className="sidebar-icon"/>
                        </Button>
                        <div className="d-flex flex-row page-btn-group">
                            <Button className="icon-btn" disabled={pageNumber <= 1} onClick={previousPage}>
                                <FaAngleLeft className="sidebar-icon"/>
                            </Button>
                            <span className="page-number">
                                {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                            </span>
                            <Button className="icon-btn" disabled={pageNumber >= numPages} onClick={nextPage}>
                                <FaAngleRight className="sidebar-icon"/>
                            </Button>
                        </div>
                        <div className="d-flex flex-row fit-width-group">
                            <span className="fit-width-label">100%</span>
                            <Button className="icon-btn" onClick={fitPageWidth}>
                                <FaExpand className="sidebar-icon"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="pdf-wrapper" ref={pdfWrapper}>
                    {fetchedFile
                        ?
                        <Document
                            file={fetchedFile}
                            options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page
                                pageNumber={pageNumber}
                                scale={pageScale}
                            />
                        </Document>
                        : <div className="no-pdf-preview">
                            <img className="no-pdf-preview-img" src={NoPDFPriview} alt="no preview"/>
                            <div className="text-center no-pdf-preview-text">Upload an invoice to see how Fetchie</div>
                            <div className="text-center no-pdf-preview-text">extracts In-fur-mation.</div>
                        </div>
                    }
                </div>
                <div className={((lineItems && lineItems.length > 2) ? "scrollable" : "") + " line-items-list"}>
                    <Table responsive className="line-items-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {fetchedFile
                            ? <tbody>
                                { lineItems.map((item, index) =>
                                    <tr key={index}>
                                        <td>{ item.LineItem[0].Value}</td>
                                        <td>{ item.LineItem[1].Value}</td>
                                        <td>{ item.LineItem[2].Value}</td>
                                        <td>{ Number(item.LineItem[1].Value) * Number(item.LineItem[2].Value)}</td>
                                    </tr>
                                )}
                            </tbody>
                            : <tbody>
                                <tr>
                                    <td colSpan={4} className="text-center no-line-items">No items to display</td>
                                </tr>
                            </tbody>
                        }
                    </Table>
                </div>
            </div>
        </>
    );
  };

export { PDFPreview };
