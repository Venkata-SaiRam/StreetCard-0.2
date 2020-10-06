import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

const {Panel} = Collapse;
const TypeOfServiceCategory = [
        {
            value: 1,
            label: "Adult day care and personal assistance"
        },
        {
            value: 2,
            label: "Case management"
        },
        {
            value: 3,
            label: "Child care"
        },
        {
            value: 4,
            label: "Criminal justice/legal services"
        },
        {
            value: 5,
            label: "Education"
        },
        {
            value: 6,
            label: "Employment and training services"
        },
        {
            value: 7,
            label: "Food/meals/nutritional services"
        },
        {
            value: 8,
            label: "Health/medical care"
        },
        {
            value: 9,
            label: "Life skills training"
        },
        {
            value: 10,
            label: "Mental health care/counseling"
        },
        {
            value: 11,
            label: "Outreach and/or engagement"
        },
        {
            value: 12,
            label: "Substance abuse services/treatment"
        },
        {
            value:13,
            label: "Transportation"
        },
        {
            value: 14,
            label: "Other HOPWA funded service"
        }
];


class ServicesProvidedHOPWA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { servicesProvidedHOPWA } = this.props;
        const {getFieldDecorator} = servicesProvidedHOPWA.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Services Provided - HOPWA" key="7">
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
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ServicesProvidedHOPWA;