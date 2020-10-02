import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

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

class DomesticViolence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { domesticViolence } = this.props;
        const {getFieldDecorator} = domesticViolence.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Domestic Violence" key="5">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateDV", {
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
                                    label="DomesticViolenceVictim"
                                >{getFieldDecorator("domesticviolencevictim", {
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
                                        options={YesNoResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="WhenOccurred"
                                >{getFieldDecorator("whenoccurred", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="When Occurred"
                                        options={DomesticViolenceOccurrence}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="CurrentlyFleeing"
                                >{getFieldDecorator("currentlyfleeing", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="Currently Fleeing"
                                        options={ResponseCategory}
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
export default DomesticViolence;