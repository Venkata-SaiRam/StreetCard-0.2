import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
const {Panel} = Collapse;

class ConnectionWithSOAR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
    }

    render(){
        const { connectionWithSOAR } = this.props;
        const {getFieldDecorator} = connectionWithSOAR.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="ConnectionWithSOAR" key="6">
                        <Row gutter={8}>
                            <Col span={16}>
                                <Form.Item
                                    label="Connection With SOAR">
                                    {getFieldDecorator("connectionwithsoar", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: false
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Connection With SOAR"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default ConnectionWithSOAR;