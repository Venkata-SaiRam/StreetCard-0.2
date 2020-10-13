import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const YesNoResponse = [
    {
        value: 0,
        label: "No"
    },
    {
        value: 1,
        label: "Yes"
    },
];

const ServiceFundingResponse = [
    {
        value: 0,
        label: "Out of age range"
    },
    {
        value: 1,
        label: "Ward of the State - Immediate Reunification"
    },
    {
        value: 2,
        label: "Ward of the Criminal Justice System - Immediate Reunification"
    },
    {
        value: 3,
        label: "Other"
    },

]

const RunawayYouthResponse = [
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
        label: "Client doesn't know"
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

class RhyBcpStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { rhy_bcp_status } = this.props;
        const {getFieldDecorator} = rhy_bcp_status.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="RHY-BCP Status" key="12">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("information_date", {
                                        rules: [
                                            {
                                                message: {message},
                                                required: false
                                            }
                                        ]
                                    })(
                                        <DatePicker style={{width: "100%"}}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Is Youth Eligible for RHY Services"
                                >   {getFieldDecorator("is_youth_eligible", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Reason why services are not funded by BCP grant"
                                >   {getFieldDecorator("service_funding_response", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={ServiceFundingResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                        <Col span={8}>
                                <Form.Item
                                    label="Run Away Youth">
                                    {getFieldDecorator("run_away_youth", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: false
                                            }
                                        ]
                                    })(
                                        <Cascader
                                        placeholder="Select.."
                                        options={RunawayYouthResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default RhyBcpStatus;