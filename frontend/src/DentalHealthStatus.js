import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;
const HealthStatusCategory = [
    {
        value: 1,
        label: "Excellent"
    },
    {
        value: 2,
        label: "Very Good"
    },
    {
        value: 3,
        label: "Good"
    },
    {
        value: 4,
        label: "Fair"
    },
    {
        value: 5,
        label: "Poor"
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

class DentalHealthStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { dentalHealthStatus } = this.props;
        const {getFieldDecorator} = dentalHealthStatus.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Dental Health Status" key="15">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Dental Health Status"
                                >{getFieldDecorator("dentalHealthStatus", {
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
                                        options={HealthStatusCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default DentalHealthStatus;