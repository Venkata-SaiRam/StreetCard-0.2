import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
const {Panel} = Collapse;
const {TextArea} = Input;
const InsuranceReasonCategory = [
    {
        value: 1,
        label: "Applied;decision pending"
    },
    {
        value: 2,
        label: "Applied;client not eligible"
    },
    {
        value: 3,
        label: "Client did not apply"
    },
    {
        value: 4,
        label: "Insurance type N/A for this client"
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
class HealthInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { healthInsurance } = this.props;
        const {getFieldDecorator} = healthInsurance.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Health Insurance" key="4">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateHealth", {
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
                                    label="CoveredByHealthInsurance"
                                >{getFieldDecorator("coveredbyhealthinsurance", {
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
                                    label="Medicaid"
                                >{getFieldDecorator("medicaid", {
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
                                        options={YesNoResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Medicare"
                                >{getFieldDecorator("medicare", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="Medicare"
                                        options={YesNoResponse}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="SCHIP"
                                >{getFieldDecorator("schip", {
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
                                    label="VAMedicalServices"
                                >{getFieldDecorator("vamedicalservices", {
                                    rules: [
                                        {
                                            message: {message},
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
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="EmployerProvided"
                                >{getFieldDecorator("employerprovided", {
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
                                    label="COBRA"
                                >{getFieldDecorator("cobra", {
                                    rules: [
                                        {
                                            message: {message},
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
                                    label="PrivatePay"
                                >{getFieldDecorator("privatepay", {
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
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="StateHealthInsuranceForAdults"
                                >{getFieldDecorator("statehealthinsuranceforadults", {
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
                                    label="Indian Health Services"
                                >{getFieldDecorator("indianhealthservices", {
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
                                    label="Other Insurance"
                                >{getFieldDecorator("otherinsurance", {
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
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="SpecifySource"
                                >{getFieldDecorator("specifysourceHealthInsurance", {
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
                            <Col span={8}>
                                <Form.Item
                                    label="Reason"
                                >{getFieldDecorator("reason", {
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
                                        options={InsuranceReasonCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default HealthInsurance;