import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const ReferralSourceCategory = [
    {
        value: 1,
        label: "Self-Referral"
    },
    {
        value: 2,
        label: "Individual:Parent/Guardian/Relative/Friend/Foster Parent/Other Individual"
    },
    {
        value: 7,
        label: "Outreach Project"
    },
    {
        value: 11,
        label: "Temporary Shelter"
    },
    {
        value: 18,
        label: "Residential Project"
    },
    {
        value: 28,
        label: "Hotline"
    },
    {
        value: 30,
        label: "Child Welfare/CPS"
    },
    {
        value: 34,
        label: "Juvenile Justice"
    },
    {
        value: 35,
        label: "Law Enforcement/ Police"
    },
    {
        value: 37,
        label: "Mental Hospital"
    },
    {
        value: 38,
        label: "School"
    },
    {
        value: 39,
        label: "Other Organization"
    },
    {
        value: 8,
        label: "Client Doesn't Know"
    },
    {
        value: 9,
        label: "Client refused"
    },
    {
        value: 99,
        label: "Data Not Collected"
    }
];


class ReferralSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            noOfTimesDisabled: true
        }
    }

    handleReferralSource(values) {
        if(values[0] === 7 ){
            this.setState({noOfTimesDisabled: false});
        } else {
            this.setState({noOfTimesDisabled: true});
            this.props.referralSource.form.resetFields("noOfTimes");

        }
    }

    render(){
        const { referralSource,  } = this.props;
        const {getFieldDecorator} = referralSource.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Referral Source" key="2">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Referral Source"
                                >{getFieldDecorator("referralSource", {
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
                                        options={ReferralSourceCategory}
                                        onChange={this
                                            .handleReferralSource
                                            .bind(this)}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Number of times approached by outreach"
                                >{getFieldDecorator("noOfTimes", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(<Input disabled={this.state.noOfTimesDisabled} />
                                )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ReferralSource;