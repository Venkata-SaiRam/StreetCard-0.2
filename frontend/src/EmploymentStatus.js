import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
const {Panel} = Collapse;

class EmploymentStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
                                            options={YesNoResponse}
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