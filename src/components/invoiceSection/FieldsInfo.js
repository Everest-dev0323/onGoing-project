import React from "react"
import { Row, Col } from 'react-bootstrap'
import RedEllipse from '../../imgs/fetchie-section/red-ellipse.png'
import BlueEllipse from '../../imgs/fetchie-section/blue-ellipse.png'
import MarkHighDisabled from '../../imgs/fetchie-section/mark-high-disabled.png'
import MarkLowDisabled from '../../imgs/fetchie-section/mark-low-disabled.png'

const FieldsInfo = ({updatedFields, fetchSuccessed, /*fieldChange*/ }) => {

    const onChange = (val) => {

    }

    return (
        <div>
            <Row className="d-flex flex-col edit-panel">
                {
                    updatedFields.map((item, index) => {
                        return (
                            item.required === "true"
                                ? <Row className="align-items-center flex-row field-item" key={index}>
                                    <Col md={4} sm={4} xs={4} className="field-name">{ item.Field.DisplayName }</Col>
                                    <Col md={6} sm={6} xs={6} className="field-input-box">
                                        <input
                                            className="form-control" 
                                            type="text" 
                                            name={ item.Field.FieldName }
                                            value={ item.input }
                                            onChange={onChange}
                                            placeholder=""
                                            id={ item.Field.FieldName }
                                        />
                                    </Col>
                                    <Col md={2} sm={2} xs={2} className="field-confident">
                                        {
                                            item.confident === "true" 
                                                ? (fetchSuccessed ? <img src={BlueEllipse} alt="Confident"/> : <img src={MarkHighDisabled} alt="Confident"/>)
                                                : (fetchSuccessed ? <img src={RedEllipse} alt="Not confident"/> : <img src={MarkLowDisabled} alt="Not Confident"/>)
                                        }
                                    </Col>
                                </Row>
                                : ''
                        )
                    })
                }
            </Row>
        </div>
    );
  };

export { FieldsInfo };