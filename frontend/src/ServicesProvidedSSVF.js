import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

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