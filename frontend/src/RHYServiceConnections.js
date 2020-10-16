import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const ConectionCategoriesResponse = [
  {
    value: 2,
    label: "Community service/service learning(CSL)"
  },
  {
    value: 7,
    label: "Criminal justice /legal services"
  },
  {
    value: 5,
    label: "Education"
  },
  {
    value: 6,
    label: "Employment and/or training services"
  },
  {
    value: 14,
    label: "Health/medical care"
  },
  {
    value: 26,
    label: "Home-based Services"
  },
  {
    value: 8,
    label: "Life skills training"
  },
  {
    value: 10,
    label: "Parenting education for youth with children"
  },
  {
    value: 27,
    label: "Post-natal newborn care (wellness exams; immunizations)"
  },
  {
    value: 12,
    label: "Post-natal care for mother"
  },
  {
    value: 13,
    label: "Pre-natal care"
  },
  {
    value: 28,
    label: "STD Testing"
  },
  {
    value: 29,
    label: "Street-based Services"
  },
  {
    value: 17,
    label: "Substance abuse treatment"
  },
  {
    value: 18,
    label: "Substance Abuse Ed/Prevention Services"
  }
];

class RHYServiceConnections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true
    };
  }

  render() {
    const { rhyServiceConnections } = this.props;
    const { getFieldDecorator } = rhyServiceConnections.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="RHY Service Connections" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Date of Service">
                {getFieldDecorator("dateOfRHYService", {
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
              <Form.Item label="Type of RHY Service">
                {getFieldDecorator("typeOfRHYService", {
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
                    options={ConectionCategoriesResponse}
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
export default RHYServiceConnections;
