import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const ResponseCategory = [
    {
        value: 0,
        label: "No"
    },
    {
        value: 1,
        label: "Yes"
    },
    {
        value: 8,
        label: "Client Doesn't Know"
    },
    {
        value: 9,
        label: "Client Refused"
    },
    {
        value: 99,
        label: "Data Not Collected"
    }
];

class PregnancyStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { pregnancy } = this.props;
        const {getFieldDecorator} = pregnancy.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Pregnancy Status" key="13">
                        <Row gutter={8}>
                        <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdate_PS", {
                                        rules: [
                                            {
                                                message: {message},
                                                required: true
                                            }
                                        ]
                                    })(
                                        <DatePicker style={{width: "100%"}}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Pregnancy Status"
                                >{getFieldDecorator("pregnancy_status", {
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
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default PregnancyStatus;