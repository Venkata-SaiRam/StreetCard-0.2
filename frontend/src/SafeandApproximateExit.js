import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const exitStatus = [
        {
            value: 0,
            label: "No"
        },
        {
            value: 1,
            label: "Yes"
        },
        {
            value: 2,
            label: "Worker Doesn't Know"
        },
]
const ResponseCategory = [
    {
        value: 0,
        label: "No"
    }, {
        value: 1,
        label: "Yes"
    }, {
        value: 8,
        label: "Client Doesn't Know"
    }, {
        value: 9,
        label: "Client Refused"
    }, {
        value: 99,
        label: "Data Not Collected"
    }
];

class SafeandApproximateExit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { safeexit } = this.props;
        const {getFieldDecorator} = safeexit.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>

            <Panel header="Safe and Approximate Exit" key="15">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Exit Status by Client"
                                >{getFieldDecorator("exit_status_client", {
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
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Exit Status by caseworker"
                                >{getFieldDecorator("exit_status_caseworker", {
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
                                        options={exitStatus}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Positive Peer Connections"
                                >{getFieldDecorator("positivePeer", {
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
                                        options={exitStatus}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Positive Community Connections"
                                >{getFieldDecorator("positiveCommunityConnections", {
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
                                        options={exitStatus}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Positive Adult Connections"
                                >{getFieldDecorator("positiveAdultConnections", {
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
                                        options={exitStatus}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default SafeandApproximateExit;