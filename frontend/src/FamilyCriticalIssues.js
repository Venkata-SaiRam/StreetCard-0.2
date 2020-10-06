import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
const {Panel} = Collapse;
const {TextArea} = Input;
const InsuranceReasonCategory = [
    {
        value: 1,
        label: "Applied;decision pending"
    },
    {
        value: 2,
        label: "Applied;client not eligible"
    },
    {
        value: 3,
        label: "Client did not apply"
    },
    {
        value: 4,
        label: "Insurance type N/A for this client"
    },
    {
        value: 8,
        label: "Client Doesn\'t Know"
    },
    {
        value: 9,
        label: "Client Refused"
    },
    {
        value: 99,
        label: "Data Not Collected"
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
class FamilyCriticalIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { familyCriticalIssues } = this.props;
        const {getFieldDecorator} = familyCriticalIssues.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Health Insurance" key="4">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateCritical", {
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
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default FamilyCriticalIssues;