import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

class CoordinatedEntryAssessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { coordinatedEntryAssessment } = this.props;
        const {getFieldDecorator} = coordinatedEntryAssessment.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Coordinated Entry Assessment" key="7">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Date of Assessment">
                                    {getFieldDecorator("assessment_date", {
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
                                    label="Assessment Location"
                                >   {getFieldDecorator("assessment_location", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(<Input/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default CoordinatedEntryAssessment;