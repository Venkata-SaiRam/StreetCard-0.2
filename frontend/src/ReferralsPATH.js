import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const ReferralTypes = [
  { value: 1, label: "Community Mental Health" },
  { value: 2, label: "Substance Use Treatment" },
  { value: 3, label: "Primary Health/ Dental Care" },
  { value: 4, label: "Job Training" },
  { value: 5, label: "Educational Services" },
  { value: 6, label: "Housing Services" },
  { value: 11, label: "Temporary Housing" },
  { value: 7, label: "Permanent Housing" },
  { value: 8, label: "Income Assistance" },
  { value: 9, label: "Employment Assistance" },
  { value: 10, label: "Medical Insurance" }
];
const IfTypeOfReferralMade = [
  {
    value: 1,
    label: "Attained"
  },
  {
    value: 2,
    label: "Not attained"
  },
  {
    value: 3,
    label: "Unknown"
  }
];

class ReferralsPATH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      ifReferralSelected: true
    };
  }

  handlePathStatus(fieldName, values) {
    if (values[0] <= 11) {
      this.setState({ ifReferralSelected: false });
    } else {
      this.setState({ ifReferralSelected: true });
      this.props.referralsPATH.form.resetFields(fieldName);
    }
  }

  render() {
    const { referralsPATH } = this.props;
    const { getFieldDecorator } = referralsPATH.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="Referrals Provided – PATH" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Date of Referral">
                {getFieldDecorator("referralDate", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(<DatePicker style={{ width: "100%" }} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Type of Referral">
                {getFieldDecorator("referralType", {
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
                    options={ReferralTypes}
                    onChange={this.handlePathStatus.bind(this, "outcome")}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If any “Type of Referral” made Select Outcome for each">
                {getFieldDecorator("outcome", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: false
                    }
                  ]
                })(
                  <Cascader
                    disabled={this.state.ifReferralSelected}
                    placeholder="Select.."
                    options={IfTypeOfReferralMade}
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
export default ReferralsPATH;
