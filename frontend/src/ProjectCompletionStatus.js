import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const project_status = [
    {
        value: 1,
        label: "Completed Project"
    }, 
    {
        value: 2,
        label: "Youth voluntarily left early"
    },
    {
        value: 3,
        label: "Youth was expelled or otherwise involuntarily discharged from project"
    }
];
const MajorResponseCategory = [
    {
        value: 1,
        label: "Criminal activity/destruction of property/violence"
    },
    {
        value: 2,
        label: "Noncompliance"
    },
    {
        value: 3,
        label: "Non-payment of rent/occupancy charge"
    },
    {
        value: 4,
        label: "Reached maximum time allowed by project"
    },
    {
        value: 5,
        label: "Project terminated"
    },
    {
        value: 6,
        label: "Unknown/disappeared"
    }
];

class ProjectCompletionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { project_completion } = this.props;
        const {getFieldDecorator} = project_completion.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Project Completion Status" key="14">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Project Completion Status"
                                >{getFieldDecorator("project_completion_status", {
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
                                        options={project_status}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Major Reason"
                                >{getFieldDecorator("majorReason", {
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
                                        options={MajorResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ProjectCompletionStatus;