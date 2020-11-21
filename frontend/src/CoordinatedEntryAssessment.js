import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const AssessmentTypeResponse = [
    {
        value: 1,
        label: "Phone"
    },
    {
        value: 2,
        label: "Virtual"
    },
    {
        value: 3,
        label: "In person"
    }
]

const AssessmentLevelResponse = [
    {
        value: 1,
        label: "Critical Needs Assessment"
    },
    {
        value: 2,
        label: "Housing Needs Assessment"
    }
]

const PrioritizationStatusResponse = [
    {
        value: 1,
        label: "Placed on Prioritization List"
    },
    {
        value: 2,
        label: "Not placed on Prioritization List"
    }
]


class CoordinatedEntryAssessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { coordinatedEntryAssessment } = this.props;
        const {getFieldDecorator} = coordinatedEntryAssessment.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Coordinated Entry Assessment" key="7">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Date of Assessment">
                                    {getFieldDecorator("assessment_date", {
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
                                    label="Assessment Location"
                                >   {getFieldDecorator("assessment_location", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: true
                                        }
                                    ]
                                })(<Input/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Assessment Type"
                                >   {getFieldDecorator("assessment_type", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={AssessmentTypeResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Assessment Level"
                                >   {getFieldDecorator("assessment_level", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={AssessmentLevelResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Prioritization Status"
                                >   {getFieldDecorator("prioritization_status", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={PrioritizationStatusResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default CoordinatedEntryAssessment;