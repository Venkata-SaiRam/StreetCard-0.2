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

class DomesticViolence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            ifOccurred: true,
            ifFleeing: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleDomesticViolenceChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifOccurred: false});
             this.setState({ifFleeing: false});
        }else {
            this.setState({ifOccurred: true});
            this.setState({ifFleeing: true});
            this.props.domesticViolence.form.resetFields(fieldName);
        }
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
                                                required: true
                                            }
                                        ]
                                    })(
                                        <DatePicker style={{width: "100%"}}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Domestic Violence Victim"
                                >{getFieldDecorator("domesticviolencevictim", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: true,
                                            type: "array"
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleDomesticViolenceChange
                                            .bind(this, "whenoccurred")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="When Occurred"
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
                                        disabled={this.state.ifOccurred}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Currently Fleeing"
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
                                        disabled={this.state.ifFleeing}
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
