import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
const {Panel} = Collapse;
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
            label: "Seasonal / sporadic (including day labor)"
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
class EmploymentStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            typeofemploymentDisabled: true,
            whynotemployedDisabled: true,
        }
    }

    handleEmployed(values) {
        if(values[0] === 1) {
            this.setState({
                typeofemploymentDisabled: false,
            whynotemployedDisabled: true,});
            this.props.employmentStatus.form.resetFields("whynotemployed");

        }else if(values[0] === 0) {
            this.setState({
                typeofemploymentDisabled: true,
            whynotemployedDisabled: false,});
            this.props.employmentStatus.form.resetFields("typeofemployment");
        }else {
            this.setState({
                typeofemploymentDisabled: true,
            whynotemployedDisabled: true,});
            this.props.employmentStatus.form.resetFields("whynotemployed");
            this.props.employmentStatus.form.resetFields("typeofemployment");
        }
    }

    render(){
        const { employmentStatus } = this.props;
        const {getFieldDecorator} = employmentStatus.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="EmploymentStatus" key="7">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdate_ES", {
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
                                    label="Employed">
                                    {getFieldDecorator("employed", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Employed"
                                            options={ResponseCategory}
                                            onChange={this
                                                .handleEmployed
                                                .bind(this)}
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
                                            disabled={this.state.typeofemploymentDisabled}
                                            options={TypeOfEmploymentCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={12}>
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
                                            disabled={this.state.whynotemployedDisabled}
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
export default EmploymentStatus;