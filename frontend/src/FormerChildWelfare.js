import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';


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
const NoOfYearsCategory = [
    {
        value: 1,
        label: "Less than one year"
    },
    {
        value: 2,
        label: "1 to 2 years"
    },
    {
        value: 3,
        label: "3 to 5 or more years"
    },
];

class FormerChildWelfare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            ifWelfareProvided: true,
            ifLessThanYear: true
        }
    }

    handleWelfareProvided(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifWelfareProvided: false});
        }else {
            this.setState({ifWelfareProvided: true});
            this.props.formerChildWelfare.form.resetFields(fieldName);
        }
    }
    handleMonths(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifLessThanYear: false});
        }else {
            this.setState({ifLessThanYear: true});
            this.props.formerChildWelfare.form.resetFields(fieldName);
        }
    }

    render(){
        const { formerChildWelfare } = this.props;
        const {getFieldDecorator} = formerChildWelfare.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Former Child Welfare" key="6">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Formerly a ward of Child Welfare/Foster Care Agency"
                                >{getFieldDecorator("formerWardOfChildWelfare", {
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
                                        options={ResponseCategory}
                                        onChange={this
                                            .handleWelfareProvided
                                            .bind(this, "noOfYears")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If yes, Number of Years"
                                >{getFieldDecorator("noOfYears", {
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
                                        options={NoOfYearsCategory}
                                        disabled={this.state.ifWelfareProvided}
                                        onChange={this
                                            .handleMonths
                                            .bind(this, "noOfMonths")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="If less than one year, Number of months"
                                >{getFieldDecorator("noOfMonths", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifLessThanYear}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default FormerChildWelfare;