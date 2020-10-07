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
            ifYesTCellCountDisabled: true,
            howWasTheInformationObtainedDisabled: true,
            viralLoadCountDisabled: true,
            howWasTheViralInformationObtainedDisabled: true,
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleTCellCountDropDownChange(fieldName, values) {
        if(values[0] === 0) {
             this.setState({ifYesTCellCountDisabled: false});
        }else {
            this.setState({ifYesTCellCountDisabled: true});
            this.setState({howWasTheInformationObtainedDisabled: true});
            this.props.tCellCD4ViralLoad.form.resetFields(fieldName);
            this.props.tCellCD4ViralLoad.form.resetFields("howWasTheInformationObtained");
        }
    }

    handleViralLoadCountDropDownChange(fieldName, values) {
        if(values[0] === 0) {
             this.setState({viralLoadCountDisabled: false});
        }else {
            this.setState({viralLoadCountDisabled: true});
            this.setState({howWasTheViralInformationObtainedDisabled: true});
            this.props.tCellCD4ViralLoad.form.resetFields(fieldName);
            this.props.tCellCD4ViralLoad.form.resetFields("howWasTheViralInformationObtained");
        }
    }

    handleViralLoadCountInputChange(fieldName, event) {
        if(event.target.value.length > 0){
            this.setState({howWasTheViralInformationObtainedDisabled: false})
        }else {
            this.setState({howWasTheViralInformationObtainedDisabled: true})
            this.props.tCellCD4ViralLoad.form.resetFields(fieldName);
        }
    }

    handleTCellCountInputChange(fieldName, event) {
        if(event.target.value.length > 0){
            this.setState({howWasTheInformationObtainedDisabled: false})
        }else {
            this.setState({howWasTheInformationObtainedDisabled: true})
            this.props.tCellCD4ViralLoad.form.resetFields(fieldName);
        }
    }

    render(){
        const { tCellCD4ViralLoad } = this.props;
        const {getFieldDecorator} = tCellCD4ViralLoad.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="T-cell (CD4) and Viral Load" key="9">
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
                                        onChange={this
                                            .handleTCellCountDropDownChange
                                            .bind(this, "ifYesTCellCount")}
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
                                    <Input disabled={this.state.ifYesTCellCountDisabled}
                                    onChange={this
                                        .handleTCellCountInputChange
                                        .bind(this, "howWasTheInformationObtained")}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="How Was The Information Obtained"
                                >{getFieldDecorator("howWasTheInformationObtained", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        disabled= {this.state.howWasTheInformationObtainedDisabled}
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
                                        onChange={this
                                            .handleViralLoadCountDropDownChange
                                            .bind(this, "viralLoadCount")}
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
                                    <Input disabled={this.state.viralLoadCountDisabled}
                                    onChange={this
                                        .handleViralLoadCountInputChange
                                        .bind(this, "howWasTheViralInformationObtained")}
                                    />)}
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
                                        disabled={this.state.howWasTheViralInformationObtainedDisabled}
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