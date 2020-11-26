import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';


const {Panel} = Collapse;

class DateOfEngagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            ifAfterCareProvided: true
        }
    }

    render(){
        const { dateOfEngagement } = this.props;
        const {getFieldDecorator} = dateOfEngagement.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Date Of Engagement" key="6">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date">
                                    {getFieldDecorator("informationdateDOE", {
                                        rules: [
                                            {
                                                message: {message},
                                                required: true
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
export default DateOfEngagement;
