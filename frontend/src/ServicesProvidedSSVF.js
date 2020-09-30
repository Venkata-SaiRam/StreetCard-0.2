import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

const {Panel} = Collapse;
const TypeOfServiceCategory = [
        {
            value: 1,
            label: "Outreach services"
        },
        {
            value: 2,
            label: "Case management services"
        },
        {
            value: 3,
            label: "Assistance obtaining VA benefits"
        },
        {
            value: 4,
            label: "Assistance obtaining/coordinating other public benefits"
        },
        {
            value: 5,
            label: "Direct provision of other public benefits"
        },
        {
            value: 6,
            label: "Other (non TFA)supportive service approved by VA"
        },
        {
            value: 7,
            label: "Extended Shallow Subsidy"
        },
        {
            value: 8,
            label: "Returning Home"
        },
        {
            value: 9,
            label: "Rapid Resolution"
        }
];
const IfAssistanceObtainingOrCoordinatingOtherPublicBenefitsCategory = [
    {
        value: 1,
        label: "Health care services"
    },
    {
        value: 2,
        label: "Daily living services"
    },
    {
        value: 3,
        label: "Personal financial planning services"
    },
    {
        value: 4,
        label: "Transportation services"
    },
    {
        value: 5,
        label: "Income support services"
    },
    {
        value: 6,
        label: "Fiduciary and representative payee services"
    },
    {
        value: 7,
        label: "Legal services - child support"
    },
    {
        value: 8,
        label: "Legal services - eviction prevention"
    },
    {
        value: 9,
        label: "Legal services - outstanding fines and penalties"
    },
    {
        value: 10,
        label: "Legal services - restore/acquire drivers license"
    },
    {
        value: 11,
        label: "Legal services - other"
    },
    {
        value: 12,
        label: "Child care"
    },
    {
        value: 13,
        label: "Housing counseling"
    }
];
const IfDirectProvisionOfOtherPublicBenefitsCategory = [
    {
        value: 1,
        label: "Personal financial planning services"
    },
    {
        value: 2,
        label: "Transportation services"
    },
    {
        value: 3,
        label: "Income support services"
    },
    {
        value: 4,
        label: "Fiduciary and representative payee services"
    },
    {
        value: 5,
        label: "Legal services - child support"
    },
    {
        value: 6,
        label: "Legal services - eviction prevention"
    },
    {
        value: 7,
        label: "Legal services - outstanding fines and penalties"
    },
    {
        value: 8,
        label: "Legal services - restore/acquire drivers license"
    },
    {
        value: 9,
        label: "Legal services - other"
    },
    {
        value: 10,
        label: "Child care"
    },
    {
        value: 11,
        label: "Housing counseling"
    }
];
const IfAssistanceObtainingVABenefitsCategory = [
    {
        value: 1,
        label: "VA vocational and rehabilitation counseling"
    },
    {
        value: 2,
        label: "Employment and training services"
    },
    {
        value: 3,
        label: "Educational assistance"
    },
    {
        value: 4,
        label: "Health care services"
    }
];

class ServicesProvidedSSVF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { servicesProvidedSSVF } = this.props;
        const {getFieldDecorator} = servicesProvidedSSVF.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="ServicesProvidedSSVF" key="8">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Date Of Service">
                                    {getFieldDecorator("dateofservice", {
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
                                    label="Type Of Service"
                                >{getFieldDecorator("typeofservice", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Type Of Service"
                                        options={TypeOfServiceCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If Assistance Obtaining VA Benefits"
                                >{getFieldDecorator("ifassistanceobtainingvabenefits", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="If Assistance Obtaining VA Benefits"
                                        options={IfAssistanceObtainingVABenefitsCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="If Assistance Obtaining Or Coordinating Other Public Benefits"
                                >{getFieldDecorator("ifassistanceobtainingorcoordinatingotherpublicbenefits", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="If Assistance Obtaining Or Coordinating Other Public Benefits"
                                        options={IfAssistanceObtainingOrCoordinatingOtherPublicBenefitsCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If Direct Provision Of Other Public Benefits"
                                >{getFieldDecorator("ifdirectprovisionofotherpublicbenefits", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="If Direct Provision Of Other Public Benefits"
                                        options={IfDirectProvisionOfOtherPublicBenefitsCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If Other Supportive Service Approved By VA"
                                >{getFieldDecorator("ifothersupportiveserviceapprovedbyva", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ServicesProvidedSSVF;