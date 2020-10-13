import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
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

const TypeOfEmploymentCategory = [
        {
            value: 1,
            label: "Full-time"
        },
        {
            value: 2,
            label: "Part-time"
        },
        {
            value: 3,
            label: "Seasonal"
        }

    ];

const WhyNotEmployedCategory = [
    {
        value: 1,
        label: "Looking for work"
    },
    {
        value: 2,
        label: "Unable to work"
    },
    {
        value: 3,
        label: "Not looking for work"
    }];


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


class RHY_Employment_Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { rhy_employment_status } = this.props;
        const {getFieldDecorator} = rhy_employment_status.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Employment Status" key="10">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdate", {
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
                                    label="Employed">
                                    {getFieldDecorator("employed", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: false
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Employed"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Type Of Employment">
                                    {getFieldDecorator("typeofemployment", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: false
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Type Of Employment"
                                            options={TypeOfEmploymentCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Why Not Employed">
                                    {getFieldDecorator("whynotemployed", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: false
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Why Not Employed"
                                            options={WhyNotEmployedCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default RHY_Employment_Status;