import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

class NonCashBenefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { nonCash, onChangeValue } = this.props;
        const {getFieldDecorator} = nonCash.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Non-Cash Benefits" key="3">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item label="Information Date">
                                    {getFieldDecorator("informationdateNonCash", {
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
                                    label="Benefits Sources"
                                >{getFieldDecorator("benefitsfromanysources", {
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
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="SNAP"
                                >{getFieldDecorator("snap", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true,
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="SNAP Info"
                                        options={YesNoResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="WIC"
                                >{getFieldDecorator("wic", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true,
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
                                    label="TANFChildCare"
                                >{getFieldDecorator("tanfchildcare", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true,
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
                                    label="TANFTransportation"
                                >{getFieldDecorator("tanftransportation", {
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
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="OtherTANF"
                                >{getFieldDecorator("othertanf", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true,
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
                                    label="Other Sources"
                                >{getFieldDecorator("othersources", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true,
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select"
                                        options={YesNoResponse}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Specify Source"
                                >{getFieldDecorator("specifysource")(
                                    <TextArea rows={2}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default NonCashBenefits;