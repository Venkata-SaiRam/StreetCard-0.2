import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const SchoolStatus_response = [
    {
        value: 1,
        label: "Attending School regularly"
    },
    {
        value: 2,
        label: "Attending School Irregularly"
    },
    {
        value: 3,
        label: "Graduated from high school"
    },
    {
        value: 4,
        label: "Obtained GED"
    },
    {
        value: 5,
        label: "Dropped out"
    },
    {
        value: 6,
        label: "Suspended"
    },
    {
        value: 7,
        label: "Expelled"
    },
    {
        value: 8,
        label: "Client doesn't know"
    },
    {
        value: 9,
        label: "Client refused"
    },
    {
        value: 99,
        label: "Data not collected"
    }
];

class SchoolStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { schoolStatus } = this.props;
        const {getFieldDecorator} = schoolStatus.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="School Status" key="11">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="School Status"
                                >{getFieldDecorator("schoolStatus", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={SchoolStatus_response}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default SchoolStatus;
