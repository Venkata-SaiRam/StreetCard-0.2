import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;
const TypeOfPATHServiceCategory = [
        {
            value: 1,
            label: "Re-engagement"
        },
        {
            value: 2,
            label: "Screening"
        },
        {
            value: 14,
            label: "Clinical assessment"
        },
        {
            value: 3,
            label: "Habilitation/rehabilitation"
        },
        {
            value: 4,
            label: "Community mental health"
        },
        {
            value: 5,
            label: "Substance use treatment"
        },
        {
            value: 6,
            label: "Case management"
        },
        {
            value: 7,
            label: "Residential supportive services"
        },
        {
            value: 8,
            label: "Housing minor renovation"
        },
        {
            value: 9,
            label: "Housing moving assistance"
        },
        {
            value: 10,
            label: "Housing eligibility determination"
        },
        {
            value: 11,
            label: "Security deposits"
        },
        {
            value:12,
            label: "One-time rent for eviction prevention"
        }
];


class ServicesProvidedPATH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { servicesProvidedPATH } = this.props;
        const {getFieldDecorator} = servicesProvidedPATH.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Services Provided - PATH" key="7">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Date Of Service">
                                    {getFieldDecorator("dateofservicePATH", {
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
                                >{getFieldDecorator("typeofservicePATH", {
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
                                        options={TypeOfPATHServiceCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ServicesProvidedPATH;