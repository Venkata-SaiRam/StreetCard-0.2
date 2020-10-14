import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;

const exitStatus = [
        {
            value: 1,
            label: "Exit-destination safe as determined by the client"
        },
        {
            value: 2,
            label: "Exit-destination safe as determined by the project/caseworker"
        },
        {
            value: 3,
            label: "Client has permanent postive peer connections outside project"
        },
        {
            value: 4,
            label: "Client has permanent postive community connections outside project"
        },
        {
            value: 5,
            label: "Client has permanent postive adult connections outside project"
        },]

class SafeandApproximateExit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { safeexit } = this.props;
        const {getFieldDecorator} = safeexit.form;
        const message = "Mandatory field! Please provide a response.";
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Safe and Approximate Exit" key="15">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Exit Status"
                                >{getFieldDecorator("exit_status", {
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
                                        options={exitStatus}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default SafeandApproximateExit;