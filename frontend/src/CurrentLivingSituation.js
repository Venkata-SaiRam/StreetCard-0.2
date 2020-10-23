import React, {Component} from 'react';
import './LabelWrap.css';
import {Cascader, Col, Collapse, DatePicker, Form, Row} from "antd";

const {Panel} = Collapse;

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


class currentLivingSituation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleClientResponse(fieldName, values) {
        console.log(fieldName)
        console.log(values)
    }

    render(){
        const { current_living } = this.props;
        const {getFieldDecorator} = current_living.form;
        const message = "Mandatory field! Please provide a response."

        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
                <Panel header="Current Living Situation" key="4">
                    <Row gutter={8}>
                        <Col span={8}>
                            <Form.Item
                                label="Is the client going to have to leave their current living situation within 14 days?">
                                    {
                                    getFieldDecorator("living_situation", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                    })
                                    (<Cascader
                                        placeholder="Select.."
                                        options={ResponseCategory}
                                        onChange={this
                                            .handleClientResponse
                                            .bind(this, "ResponseCategory")}
                                    >
                                    </Cascader>)
                                    }
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                                <Form.Item
                                    label="Has a subsequent residence been identified?"
                                >{getFieldDecorator("residence_value", {
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
                                        onChange={this
                                            .handleClientResponse
                                            .bind(this, "ResponseCategory")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                    </Row>
                </Panel>
            </Collapse>
        );
    }
}
export default currentLivingSituation;