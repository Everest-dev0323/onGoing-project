import React, { useState, useEffect, useRef } from "react"
import { Button, Row, Col, ProgressBar } from 'react-bootstrap'
import { FreeSignupPanel } from "../shared/freeSignupPanel/FreeSignupPanel"
import { PDFPreview } from "./PDFPreviewPanel"
import { FetchFields } from "./FetchFields"
import { FieldsInfo } from "./FieldsInfo"
import { InvoiceFeatures } from "./InvoiceFeatures"
import { FileUploader } from "react-drag-drop-files"
import ReCAPTCHA from "react-google-recaptcha";

import { FaCheck } from 'react-icons/fa';

import UploadVector from '../../imgs/fetchie-section/upload-vector.png'
import CaptchaImg from '../../imgs/fetchie-section/Frame-9786.png'
import Ellipse33 from '../../imgs/fetchie-section/Ellipse-33.png'
import Group136 from '../../imgs/fetchie-section/Group-136.png'
import RefreshImg from '../../imgs/fetchie-section/refresh.png'

import addFields from "../../services/addfields";
import getFields from "../../services/getfields";
import { getFieldsData, documentUpload, fetch } from '../../helper/invoice';


import './InvoiceSection.scss';

const fileTypes = ['pdf'];

const InvoiceSection = () => { 
    const [updatedFields, setUpdatedFields] = useState([])
    const [lineItems, setLineItems] = useState([])

    const [upload, setUpload] = useState({
        file: null,
        error: null,
        "g-recaptcha-response": ""
    });
    const [currentProgress, setCurrentProgress] = useState(50);
    const [isProgressing, setIsProgressing] = useState(false);
    const [fetchSuccessed, setFetchSuccessed] = useState(0) //0-null, 1-successed, 2-failed
    const [progressDescription, setProgressDescription] = useState("Fetchie is now EmBARKing on extraction, waiting for conFURmation.")
    const [fetchedFile, setFetchedFile] = useState(null); 

    const recaptchaRef = useRef();

    useEffect(() => {
        setUpdatedFields(
            addFields.AddFields.map((add_field_item) => {
                add_field_item.required = add_field_item.Field.Required;
                add_field_item.value = add_field_item.Field.FieldName;
                add_field_item.label = _setFieldLabel(add_field_item);
                add_field_item.input = '';
                getFields.GetFields.map((get_field_item) => {
                    if(add_field_item.Field.FieldName === get_field_item.Field.FieldName) {
                        add_field_item.confident = get_field_item.Field.Confident;
                    }
                })
                return add_field_item
            })
        )
    }, []);

    useEffect(() => {
        getFieldsData().then(res => {
            console.log("res", res);
            if (res.success) {
                // addToast('Register success. Email was sent. Please verify your email', {appearance: 'success', autoDismiss: true});
            } else {
                // addToast(res.message, {appearance: 'error', autoDismiss: true});
            }
            
        }).catch(error => {
            console.log('error', error)
            // addToast('failed', {appearance: 'error', autoDismiss: true});
        })
    })

    useEffect(() => {
        fetch().then(res => {
            console.log("fetch res", res);
            if (res.success) {
                // addToast('Register success. Email was sent. Please verify your email', {appearance: 'success', autoDismiss: true});
            } else {
                // addToast(res.message, {appearance: 'error', autoDismiss: true});
            }
            
        }).catch(error => {
            console.log('fetch error', error)
            // addToast('failed', {appearance: 'error', autoDismiss: true});
        })
    })

    const _setFieldLabel = (item) => {
        return (
            <div className="label d-flex align-items-center justify-content-between" id={item.Field.FieldName}>
                <span>{item.Field.DisplayName}</span>
                {item.required === "true" ? <FaCheck className="text-color-green" aria-hidden="true"/> : ''}
            </div>
        );
    }

    const uploadFile = async (file) => {
        // const token = await recaptchaRef.current.executeAsync();
        setUpload((prevState) => ({
            ...prevState,
            file: file
        }));
    };

    const onUploadError = (res) => {
        setUpload((prevState) => ({
            ...prevState,
            error: res
        }));
    }

    const reCAPTCHA = (e) => {
        recaptchaRef.current.execute();
    }

    const onRecaptcha = (e) => {
        console.log("reCAPTCHA", e)
    }

    const clickRefresh = () => {
        console.log("clickRefresh")
    }

    const selectField = (val) => {
        setUpdatedFields(
            updatedFields.map((item) => {
                let result = {};
                result.Field = {};
                result.Field = item.Field;
                if(item.Field.FieldName === val.Field.FieldName) {
                    result.required = item.required === "true" ? "false" : "true";
                }else{
                    result.required = item.required
                }
                result.value = item.value;
                result.input = item.input;
                result.confident = item.confident;
                result.label = _setFieldLabel(result)

                return result;
            })      
        )
    }

    const fieldChange = (event) => {
        setUpdatedFields(
            updatedFields.map((item) => {
                let result = {};
                result.Field = {};
                result.Field = item.Field;
                if(item.Field.FieldName === event.target.name) {
                    result.input = event.target.value;
                }else{
                    result.input = item.input;
                }
                result.value = item.value;
                result.required = item.required;
                result.label = _setFieldLabel(result)
                
                return result;
            })
        )
    }

    const clickFetch = () => {
        let _tempFields = updatedFields
        setUpdatedFields(
            _tempFields.map((item) => {
                let temp = {}
                temp = {
                    Field: item.Field,
                    label: item.label,
                    value: item.value,
                    required: item.required,
                }
                getFields.GetFields.map((field_item) => {
                    if(item.Field.FieldName === field_item.Field.FieldName){
                        temp.confident = field_item.Field.Confident;
                        temp.input = field_item.Field.Value;
                    }
                    return field_item;
                })
                return temp
            })
        )
        setLineItems(getFields.LineItems);
        if(upload.file) {
            setFetchSuccessed(1);
            setProgressDescription("Pawsome, Fetchie extracted In-fur-mation");
            setFetchedFile(upload.file);

            documentUpload(upload.file).then(res => {
                console.log("fetch res", res);
                if (res.success) {
                    // addToast('Register success. Email was sent. Please verify your email', {appearance: 'success', autoDismiss: true});
                } else {
                    // addToast(res.message, {appearance: 'error', autoDismiss: true});
                }
                
            }).catch(error => {
                console.log('fetch error', error)
                // addToast('failed', {appearance: 'error', autoDismiss: true});
            })

        } else {
            setProgressDescription("Error: " + upload.error);
            setFetchSuccessed(2);
        }
    }

    return (
        <Row className="invoice-section">
            <Col md={10} xs={12} className="invoice-main">
                <div className="invoice-inner-space">
                    <Row>
                        <FetchFields updatedFields={updatedFields} selectField={selectField}/>
                    </Row>
                    <Row className='upload-container'>
                        <Col sm={12} md={8} lg={9} xl={10} className="file-upload">
                            <FileUploader
                                handleChange={uploadFile}
                                name="file"
                                multiple={false} 
                                types={fileTypes} 
                                maxSize={2}
                                onTypeError={onUploadError}
                                onSizeError={onUploadError}
                                children={
                                    <div className="d-flex justify-content-center align-items-center file-upload-component">
                                        <div className="d-flex flex-row align-items-center file-upload-content">
                                            <img className="upload_vector_image" src={UploadVector} alt="upload vector"/>
                                            {
                                                !upload.error ? ( !upload.file 
                                                        ? <div>
                                                            <p className="upload-label">
                                                                Drag file to upload, or 
                                                                <span className="text-browse">Browse</span>
                                                                <span className="text-description">Supports .pdf  (less than 2 MB)</span>
                                                            </p>
                                                            <p className="upload-label-responsive">
                                                                <div className="text-responsive"><span className="text-browse">Browse</span>file to upload</div>
                                                                <span className="text-description">Supports .pdf(less than 2 MB)</span>
                                                            </p>
                                                        </div>
                                                        : <p className="text-color-green">Successfully uploaded!</p>
                                                ) : <p className="text-color-red">{ upload.error }</p>
                                            }
                                        </div>
                                    </div>
                                }
                            />
                            <div className="upload-recaptcha-btn" onClick={(e) => reCAPTCHA(e)}>
                                <img className="captcha-img" src={CaptchaImg} alt="CaptchaImg" />
                                {/* <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LdrSaQgAAAAAFSDlKUqekGLo9JNGfgPuRi55MEg"
                                    size="invisible"
                                    onChange={onRecaptcha}
                                /> */}
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={3} xl={2} className="fetch-btn-container">
                            <Button className="fetch-btn" onClick={clickFetch}>Fetch</Button>
                        </Col>
                        <Col 
                            sm={12} 
                            className={
                                (isProgressing ? "d-block" : "d-none") + 
                                (fetchSuccessed == 1 ? " successed" : (fetchSuccessed == 2 ? " failed" : "")) + 
                                " progress-bar-area"
                            }
                        >
                            <div>
                                <div className="d-flex align-items-center justify-content-between progress-bar-info">
                                    <div className="description">{ progressDescription }</div>
                                    <div><span className="mx-4">{ upload.file && upload.file.name }</span><span>{ upload.file && (Math.floor(upload.file.size / 1000) + "kb")}</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <ProgressBar 
                                        variant={fetchSuccessed == 2 ? "danger" : "success"}
                                        now={currentProgress} 
                                    />
                                    <Button className="refresh-btn" onClick={clickRefresh}>
                                        <img className="refresh_img" src={RefreshImg} alt="RefreshImg"/>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="main-panel">
                        <Col md={5} sm={12} className="d-flex flex-column justify-content-between">
                            <FieldsInfo updatedFields={updatedFields} fetchSuccessed={fetchSuccessed} fieldChange={fieldChange}/>
                        </Col>
                        <Col md={7} sm={12} className="preview-panel">
                            <PDFPreview fetchedFile={fetchedFile} lineItems={lineItems}/>
                        </Col>
                    </Row>
                    <Row className="signup-section">
                        {fetchedFile && <FreeSignupPanel />}
                    </Row>
                </div>
            </Col>
            <Col md={10} xs={12} className="invoice-features">
                <img className="z-index-2 ellipse33" src={Ellipse33} alt="Ellipse33" />
                <img className="group136" src={Group136} alt="Group136" />
                <InvoiceFeatures />
            </Col>
        </Row>
        
    )    
};

export { InvoiceSection };