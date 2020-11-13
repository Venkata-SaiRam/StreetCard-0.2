import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const JJSResponseCategory = [
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
const JJSNoOfYearsCategory = [
  {
    value: 1,
    label: "Less than one year"
  },
  {
    value: 2,
    label: "1 to 2 years"
  },
  {
    value: 3,
    label: "3 to 5 or more years"
  }
];

class FormerJuvenileJusticeSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      ifJJS: true,
      ifLessThanYearJJS: true
    };
  }

  handleJJS(fieldName, values) {
    if (values[0] === 1) {
      this.setState({ ifJJS: false });
    } else {
      this.setState({ ifJJS: true });
      this.props.formerJuvenileJusticeSystem.form.resetFields(fieldName);
    }
  }
  handleMonthsJJS(fieldName, values) {
    if (values[0] === 1) {
      this.setState({ ifLessThanYearJJS: false });
    } else {
      this.setState({ ifLessThanYearJJS: true });
      this.props.formerJuvenileJusticeSystem.form.resetFields(fieldName);
    }
  }

  render() {
    const { formerJuvenileJusticeSystem } = this.props;
    const { getFieldDecorator } = formerJuvenileJusticeSystem.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="Formerly a Ward of Juvenile Justice System" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Formerly a Ward of Juvenile Justice System">
                {getFieldDecorator("formerJJS", {
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
                    options={JJSResponseCategory}
                    onChange={this.handleJJS.bind(this, "noOfYearsJJS")}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If yes, Number of Years">
                {getFieldDecorator("noOfYearsJJS", {
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
                    options={JJSNoOfYearsCategory}
                    disabled={this.state.ifJJS}
                    onChange={this.handleMonthsJJS.bind(this, "noOfMonthsJJS")}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="If less than one year, Number of months">
                {getFieldDecorator("noOfMonthsJJS", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(<Input disabled={this.state.ifLessThanYearJJS} />)}
              </Form.Item>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  }
}
export default FormerJuvenileJusticeSystem;
