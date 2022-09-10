import React from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { CustomSelect } from "../shared/CustomSelect"
import { FaTimes } from 'react-icons/fa';

const FetchFields = ({updatedFields, selectField}) => {

    return (
        <div>
            <div className="fetch-fields-container">
                <div className="fetch-fields-title">Fetch Fields</div>
                <Col className="field-select">
                    <CustomSelect
                        options={updatedFields}
                        onChange={selectField}
                    />
                </Col>
                <Col className="field-item-list">
                    <Row>
                        {
                            updatedFields.map((item, i) => {
                                return (
                                    item.required === "true" 
                                        ? <div className="d-flex flex-row field-item" key={i}>
                                            <span className="field-name">{ item.Field.DisplayName }</span>
                                            <Button className="remove-btn" onClick={()=>{selectField(item)}}>
                                                <FaTimes />
                                            </Button>
                                        </div>
                                        : ''
                                )
                            })
                        }
                    </Row>
                </Col>
            </div>
        </div>
    );
  };

export { FetchFields };