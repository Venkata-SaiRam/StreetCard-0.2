import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;
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
class EnrollmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { personalProps, onChangeValue } = this.props;
        const {getFieldDecorator} = this.props.personalProps.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Enrollment Details" key="1">
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Form.Item
                                        name="personalid"
                                        label="Personal Id"
                                    >
                                        <Input defaultValue={personalProps.personalId} disabled={true}  onChange={onChangeValue}/>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    < Form.Item label="Disabling Condition">
                                        {getFieldDecorator("disablingcondition", {
                                            rules: [
                                                {
                                                    type: "array",
                                                    required: true,
                                                    message: {message},
                                                }
                                            ]
                                        })(<Cascader options={YesNoResponse}
                                                     placeholder="Select.."/>)}
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    < Form.Item label="Project Category">
                                        <Input defaultValue={this.props.personalProps.data} disabled={true}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Entry Date"
                                    >
                                        {getFieldDecorator("entrydate", {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: {message}
                                                }
                                            ]
                                        })(<DatePicker style={{width: "100%"}}/>)}
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Exit Date"
                                    >{getFieldDecorator("exitdate", {
                                        rules: [
                                            {
                                                required: true,
                                                message: {message}
                                            }
                                        ]
                                    })(
                                        <DatePicker style={{width: "100%"}}/>)}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Panel>
            </Collapse>
        );
    }
}
export default EnrollmentDetails;