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
            isEnabled: true,
            service_funding_response_disabled: true,
            run_away_youth_disabled: true
        }
    }

    handleYouthEligible(values) {
        if(values[0] === 1) {
            this.setState({
                run_away_youth_disabled: false,
                service_funding_response_disabled: true,});
            this.props.rhy_bcp_status.form.resetFields("service_funding_response_disabled");

        }else if(values[0] === 0) {
            this.setState({
                run_away_youth_disabled: true,
                service_funding_response_disabled: false,});
            this.props.rhy_bcp_status.form.resetFields("run_away_youth_disabled");
        }else {
            this.setState({
                run_away_youth_disabled: true,
                service_funding_response_disabled: true,});
            this.props.rhy_bcp_status.form.resetFields("service_funding_response_disabled");
            this.props.rhy_bcp_status.form.resetFields("run_away_youth_disabled");
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
                                    {getFieldDecorator("information_date_bcp", {
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
                                    label="Is Youth Eligible for RHY Services"
                                >   {getFieldDecorator("is_youth_eligible", {
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
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleYouthEligible
                                            .bind(this)}
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
                                        disabled={this.state.service_funding_response_disabled}
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
                                        options={ResponseCategory}
                                        disabled={this.state.run_away_youth_disabled}

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