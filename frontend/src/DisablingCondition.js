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
const DomesticViolenceOccurrence = [
    {
        value: 1,
        label: "Past 3 Months"
    },
    {
        value: 2,
        label: "Three to six months ago"
    },
    {
        value: 3,
        label: "Six Months to One year"
    },
    {
        value: 4,
        label: "One year or more"
    },
    {
        value: 8,
        label: "Client Doesn\'t Know"
    },
    {
        value: 9,
        label: "Client Refused"
    },
    {
        value: 99,
        label: "Data Not Collected"
    },
];
const SubstanceAbuseCategory = [
    {
        value: 0,
        label: "No"
    },
    {
        value: 1,
        label: "Alcohol"
    },
    {
        value: 2,
        label: "Drug"
    },
    {
        value: 3,
        label: "Both Drug and Alcohol"
    },
    {
        value: 8,
        label: "Client Doesn\'t Know"
    },
    {
        value: 9,
        label: "Client Refused"
    },
    {
        value: 99,
        label: "Data Not Collected"
    }];
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

class DisablingCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { disablingCondition } = this.props;
        const {getFieldDecorator} = disablingCondition.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Disabling Condition" key="6">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateDC", {
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
                                    label="Physical Disability"
                                >{getFieldDecorator("physical_disability", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false,
                                            type: "array"
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Physical Disability Impairing"
                                >{getFieldDecorator("physical_disability_impairing", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Medicaid"
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Developmental Disability"
                                >{getFieldDecorator("developmental_disability", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="Medicaid"
                                        options={ResponseCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Developmental Disability Impairing"
                                >{getFieldDecorator("developmental_disability_impairing", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Chronic Health"
                                >{getFieldDecorator("chronic_health", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
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
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Chronic Health Impairing"
                                >{getFieldDecorator("chronic_health_impairing", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="HIV Aids"
                                >{getFieldDecorator("hiv_aids", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="HIV Aids Impairing"
                                >{getFieldDecorator("hiv_aids_impairing", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Mental Health"
                                >{getFieldDecorator("mental_health", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false,
                                            type: "array"
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Mental Health Impairing"
                                >{getFieldDecorator("mental_health_impairing", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Substance Abuse"
                                >{getFieldDecorator("substance_abuse", {
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
                                        options={SubstanceAbuseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Substance Abuse Impairing"
                                >{getFieldDecorator("substance_abuse_impairing", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default DisablingCondition;