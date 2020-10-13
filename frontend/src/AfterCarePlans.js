import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';


const {Panel} = Collapse;
const AftercareCategory = [
    {
        value: 0,
        label: "No"
    },
    {
        value: 1,
        label: "Yes"
    },
    {
        value: 9,
        label: "Client Refused"
    },
];
const PrimaryWayCategory = [
    {
        value: 1,
        label: "Via email/social media"
    },
    {
        value: 2,
        label: "Via telephone"
    },
    {
        value: 3,
        label: "In person: one-on-one"
    },
    {
        value: 4,
        label: "In person: group"
    },
];

class AfterCarePlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            ifAfterCareProvided: true
        }
    }

    handleAftercarePlans(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifAfterCareProvided: false});
        }else {
            this.setState({ifAfterCareProvided: true});
            this.props.afterCarePlans.form.resetFields(fieldName);
        }
    }

    render(){
        const { afterCarePlans } = this.props;
        const {getFieldDecorator} = afterCarePlans.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Aftercare Plans" key="6">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateACPlans", {
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
                                    label="Was Aftercare provided"
                                >{getFieldDecorator("afterCareProvided", {
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
                                        options={AftercareCategory}
                                        onChange={this
                                            .handleAftercarePlans
                                            .bind(this, "primaryWay")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If yes, What is the primary way"
                                >{getFieldDecorator("primaryWay", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader disabled={this.state.ifAfterCareProvided}
                                        placeholder="Select.."
                                        options={PrimaryWayCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default AfterCarePlans;