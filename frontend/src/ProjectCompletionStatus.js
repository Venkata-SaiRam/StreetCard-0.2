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
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ProjectCompletionStatus;