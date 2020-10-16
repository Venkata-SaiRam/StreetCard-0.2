import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const CounsellingReceivedResponse = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 1,
    label: "Yes"
  }
];
const PlanAfterExitResponse = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 1,
    label: "Yes"
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

const TypeOfCounsellingResponse = [
  {
    value: 1,
    label: "Individual"
  },
  {
    value: 2,
    label: "Family"
  },
  {
    value: 3,
    label: "Group – including peer counseling"
  }
];

class Counselling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      ifCounsellingReceived: true
    };
  }

  handleTypeofCounselling(fieldName, values) {
    if (values[0] === 1) {
      this.setState({ ifCounsellingReceived: false });
    } else {
      this.setState({ ifCounsellingReceived: true });
      this.props.counselling.form.resetFields(fieldName);
    }
  }
  handleNoOfSessions(fieldName, values) {
    if (values[0] <= 3) {
      this.setState({ ifCounsellingReceived: false });
    } else {
      this.setState({ ifCounsellingReceived: true });
      this.props.counselling.form.resetFields(fieldName);
    }
  }

  render() {
    const { counselling } = this.props;
    const { getFieldDecorator } = counselling.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="Counselling" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Counseling received by client">
                {getFieldDecorator("counsellingReceivedResponse", {
                  rules: [
                    {
                      message: { message },
                      required: false,
                      type: "array"
                    }
                  ]
                })(
                  <Cascader
                    placeholder="Select.."
                    options={YesNoResponse}
                    onChange={this.handleTypeofCounselling.bind(
                      this,
                      "typeOfCounselling"
                    )}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If Yes, Identify the type of counseling received">
                {getFieldDecorator("typeOfCounselling", {
                  rules: [
                    {
                      message: { message },
                      required: false,
                      type: "array"
                    }
                  ]
                })(
                  <Cascader
                    placeholder="Select.."
                    options={TypeOfCounsellingResponse}
                    disabled={this.state.ifCounsellingReceived}
                    onChange={this.handleNoOfSessions.bind(
                      this,
                      "noOfSessionsByExit"
                    )}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If Yes, Identify the number of sessions received by exit">
                {getFieldDecorator("noOfSessionsByExit", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(<Input disabled={this.state.ifCounsellingReceived} />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Total number of sessions planned in youth’s treatment or service plan">
                {getFieldDecorator("noOfSessions", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="A plan is in place to start or continue counseling after exit">
                {getFieldDecorator("planAfterExit", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: false
                    }
                  ]
                })(
                  <Cascader
                    placeholder="Select.."
                    options={YesNoResponse}
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
export default Counselling;
