import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const YesNoResponse = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 1,
    label: "Yes"
  }
];

const TypeOfEventResponse = [
  {
    value: 1,
    label: "Referral to Prevention Assistance project"
  },
  {
    value: 2,
    label: "Problem Solving/Diversion/Rapid Resolution intervention or service"
  },
  {
    value: 3,
    label: "Referral to scheduled Coordinated Entry Crisis Needs Assessment"
  },
  {
    value: 4,
    label: "Referral to scheduled Coordinated Entry Housing Needs Assessment"
  },
  {
    value: 5,
    label: "Referral to post-placement/follow-up case management"
  },
  {
    value: 6,
    label: "Referral to Street Outreach project or services"
  },
  {
    value: 7,
    label: "Referral to Housing Navigation project or services"
  },
  {
    value: 8,
    label:
      "Referral to Non-continuum services: Ineligible for continuum services"
  },
  {
    value: 9,
    label:
      "Referral to Non continuum services: No availability in continuum services"
  },
  {
    value: 10,
    label: "Referral to Emergency Shelter bed opening"
  },
  {
    value: 11,
    label: "Referral to Transitional Housing bed/unit opening"
  },
  {
    value: 12,
    label: "Referral to Joint TH-RRH project/unit/resource opening"
  },
  {
    value: 13,
    label: "Referral to RRH project resource opening"
  },
  {
    value: 14,
    label: "Referral to PSH project resource opening"
  },
  {
    value: 15,
    label: "Referral to Other PH project/unit/resource opening"
  }
];

const EventResultType = [
  {
    value: 1,
    label: "Successful referral: client accepted"
  },
  {
    value: 2,
    label: "Unsuccessful referral: client rejected"
  },
  {
    value: 3,
    label: "Unsuccessful referral: provider rejected"
  }
];

class CoordinatedEntryEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientHousedDisabled: true,
      afterCareEnrolledDisabled: true,
      referralDisabled: true
    };
  }

  handleDropDownChange(values) {
    console.log(values);
    if (values[0] === 2) {
      this.setState({
        clientHousedDisabled: false,
        afterCareEnrolledDisabled: true,
        referralDisabled: true
      });
      this.props.coordinatedEntryEvent.form.resetFields("afterCareInformation");
      this.props.coordinatedEntryEvent.form.resetFields("housingLocation");
      this.props.coordinatedEntryEvent.form.resetFields("referralResult");
      this.props.coordinatedEntryEvent.form.resetFields("dateOfResult");
    } else if (values[0] === 5) {
      this.setState({
        afterCareEnrolledDisabled: false,
        clientHousedDisabled: true,
        referralDisabled: true
      });
      this.props.coordinatedEntryEvent.form.resetFields("rehousedInformation");
      this.props.coordinatedEntryEvent.form.resetFields("housingLocation");
      this.props.coordinatedEntryEvent.form.resetFields("referralResult");
      this.props.coordinatedEntryEvent.form.resetFields("dateOfResult");
    } else if (values[0] > 9) {
      this.setState({
        clientHousedDisabled: true,
        afterCareEnrolledDisabled: true,
        referralDisabled: false
      });
      this.props.coordinatedEntryEvent.form.resetFields("rehousedInformation");
      this.props.coordinatedEntryEvent.form.resetFields("afterCareInformation");
    } else {
      this.setState({
        clientHousedDisabled: true,
        afterCareEnrolledDisabled: true,
        referralDisabled: true
      });
      this.props.coordinatedEntryEvent.form.resetFields("rehousedInformation");
      this.props.coordinatedEntryEvent.form.resetFields("afterCareInformation");
      this.props.coordinatedEntryEvent.form.resetFields("housingLocation");
      this.props.coordinatedEntryEvent.form.resetFields("referralResult");
      this.props.coordinatedEntryEvent.form.resetFields("dateOfResult");
    }
  }

  render() {
    const { coordinatedEntryEvent } = this.props;
    const { getFieldDecorator } = coordinatedEntryEvent.form;
    const message = "Mandatory field! Please provide a response.";
    return (
      <Collapse style={{ backgroundColor: "#f0f9ff" }}>
        <Panel header="Coordinated Entry Event" key="6">
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Date of Event">
                {getFieldDecorator("dateOfEvent", {
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
              <Form.Item label="Event">
                {getFieldDecorator("eventInformation", {
                  rules: [
                    {
                      message: { message },
                      required: true,
                      type: "array"
                    }
                  ]
                })(
                  <Cascader
                    onChange={this.handleDropDownChange.bind(this)}
                    placeholder="Select.."
                    options={TypeOfEventResponse}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Client housed/re-housed in a safe alternative">
                {getFieldDecorator("rehousedInformation", {
                  rules: [
                    {
                      message: { message },
                      required: false,
                      type: "array"
                    }
                  ]
                })(
                  <Cascader
                    disabled={this.state.clientHousedDisabled}
                    placeholder="Rehoused Information"
                    options={YesNoResponse}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Enrolled in Aftercare project">
                {getFieldDecorator("afterCareInformation", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: false
                    }
                  ]
                })(
                  <Cascader
                    disabled={this.state.afterCareEnrolledDisabled}
                    placeholder="After Care Information"
                    options={YesNoResponse}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Location of Crisis Housing or Permanent Housing Referral [Project name/HMIS ID]">
                {getFieldDecorator("housingLocation", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(
                  <Input
                    disabled={this.state.referralDisabled}
                    placeholder="[Project name/HMIS ID]"
                  ></Input>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Referral Result">
                {getFieldDecorator("referralResult", {
                  rules: [
                    {
                      message: { message },
                      type: "array",
                      required: false
                    }
                  ]
                })(
                  <Cascader
                    disabled={this.state.referralDisabled}
                    placeholder="Referral Result"
                    options={EventResultType}
                  ></Cascader>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label="Date of Result">
                {getFieldDecorator("dateOfResult", {
                  rules: [
                    {
                      message: { message },
                      required: false
                    }
                  ]
                })(
                  <DatePicker
                    style={{ width: "100%" }}
                    disabled={this.state.referralDisabled}
                  ></DatePicker>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  }
}
export default CoordinatedEntryEvent;
