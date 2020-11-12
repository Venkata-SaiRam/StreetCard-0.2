import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;

const SexualOrientationResponse = [
  {
    value: 1,
    label: "Heterosexual"
  },
  {
    value: 2,
    label: "Gay"
  },
  {
    value: 3,
    label: "Lesbian"
  },
  {
    value: 4,
    label: "Bisexual"
  },
  {
    value: 5,
    label: "Questioning / Unsure"
  },
  {
    value: 6,
    label: "Other"
  },
  {
    value: 8,
    label: "Client doesn’t know"
  },
  {
    value: 9,
    label: "Client refused"
  },
  {
    value: 99,
    label: "Data Not Collected"
  }
];

class SexualOrientation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true
    };
  }

  render() {
    const { sexualOrientation } = this.props;
    const { getFieldDecorator } = sexualOrientation.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="Sexual Orientation" key="13">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Sexual Orientation">
                {getFieldDecorator("sexual_orientation", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: true
                    }
                  ]
                })(
                  <Cascader
                    placeholder="Select.."
                    options={SexualOrientationResponse}
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
export default SexualOrientation;
