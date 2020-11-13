import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const ClientinPATH = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 1,
    label: "Yes"
  }
];
const IFNoClientInPATH = [
  {
    value: 1,
    label: "Client was found ineligible for PATH"
  },
  {
    value: 2,
    label: "Client was not enrolled for other reason(s)"
  },
  {
    value: 3,
    label: "Unable to locate client"
  }
];

class PATHStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      ifNoToClientInPath: true
    };
  }

  handlePathStatus(fieldName, values) {
    if (values[0] === 0) {
      this.setState({ ifNoToClientInPath: false });
    } else {
      this.setState({ ifNoToClientInPath: true });
      this.props.pathStatus.form.resetFields(fieldName);
    }
  }

  render() {
    const { pathStatus } = this.props;
    const { getFieldDecorator } = pathStatus.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="PATH Status" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Date of Status Determination">
                {getFieldDecorator("datePATHStatus", {
                  rules: [
                    {
                      message: { message },
                      required: true
                    }
                  ]
                })(<DatePicker style={{ width: "100%" }} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Client Became Enrolled in PATH">
                {getFieldDecorator("pathStatus", {
                  rules: [
                    {
                      message: { message },
                      required: true,
                      type: "array"
                    }
                  ]
                })(
                  <Cascader
                    placeholder="Select.."
                    options={ClientinPATH}
                    onChange={this.handlePathStatus.bind(this, "primaryWay")}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If No for “Client Became Enrolled in PATH” Reason not enrolled">
                {getFieldDecorator("notInPathReason", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: false
                    }
                  ]
                })(
                  <Cascader
                    disabled={this.state.ifNoToClientInPath}
                    placeholder="Select.."
                    options={IFNoClientInPATH}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  }
}
export default PATHStatus;
