import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const last_grade_values = [
    {
        value: 1,
        label: "Less than Grade 5"
    },
    {
        value: 2,
        label: "Grade 5 - 6"
    },
    {
        value: 3,
        label: "Grade 7 - 8"
    },
    {
        value: 4,
        label: "Grade 9 - 11"
    },
    {
        value: 5,
        label: "Grade 12 / high school diploma"
    },
    {
        value: 6,
        label: "School program does not have grade level"
    },
    {
        value: 7,
        label: "GED"
    },
    {
        value: 10,
        label: "Some college"
    },
    {
        value: 11,
        label: "Associate's degree"
    },
    {
        value: 12,
        label: "Bachelor's degree"
    },
    {
        value: 13,
        label: "Graduate degree"
    },
    {
        value: 14,
        label: "Vocational certification"
    },
    {
        value: 8,
        label: "Client doesnt know"
    },
    {
        value: 9,
        label: "Client refused"
    },
    {
        value: 99,
        label: "Data not collected"
    }
];

class LastGradeCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { lastgradecompleted } = this.props;
        const {getFieldDecorator} = lastgradecompleted.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Last Grade Completed" key="16">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Last Grade Completed"
                                >{getFieldDecorator("last_grade_completed", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={last_grade_values}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default LastGradeCompleted;