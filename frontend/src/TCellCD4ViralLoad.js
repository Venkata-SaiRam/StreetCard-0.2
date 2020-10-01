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
const InformationObtainedResponseCategory = [
    {
        value: 1,
        label: "Medical Report"
    },
    {
        value: 2,
        label: "Client Report"
    },
    {
        value: 3,
        label: "Other"
    }
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

class TCellCD4ViralLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { tCellCD4ViralLoad } = this.props;
        const {getFieldDecorator} = tCellCD4ViralLoad.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="TCellCD4ViralLoad" key="9">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateVL", {
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
                                    label="TCellCD4CountAvailable"
                                >{getFieldDecorator("tCellCD4CountAvailable", {
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
                                    label="IfYesTCellCount"
                                >{getFieldDecorator("ifYesTCellCount", {
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
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="HowWasTheInformationObtained"
                                >{getFieldDecorator("howWasTheInformationObtained", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="How was Information Obtained"
                                        options={InformationObtainedResponseCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="ViralLoadInformationAvailable"
                                >{getFieldDecorator("viralLoadInformationAvailable", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="Select.."
                                        options={ResponseCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="ViralLoadCount"
                                >{getFieldDecorator("viralLoadCount", {
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
                                    label="HowWasTheViralInformationObtained"
                                >{getFieldDecorator("howWasTheViralInformationObtained", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="How was Information Obtained"
                                        options={InformationObtainedResponseCategory}
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
export default TCellCD4ViralLoad;