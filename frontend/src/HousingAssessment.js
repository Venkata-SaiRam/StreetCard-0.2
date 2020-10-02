import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";

const {Panel} = Collapse;
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
const InformationObtainedResponseCategory = [
    {
        value: 1,
        label: "Medical Report"
    },
    {
        value: 2,
        label: "Client Report"
    },
    {
        value: 3,
        label: "Other"
    }
];
const AnotherSubsidyInformationResponseCategory = [
    {
        value: 1,
        label: "With ongoing subsidy"
    },
    {
        value: 2,
        label: "Without an ongoing subsidy"
    }
];
const HousingAssessmentAtExitResponseCategory = [
    {
        value: 1,
        label: "Able to maintain the housing they had at project entry"
    },
    {
        value: 2,
        label: "Moved to new housing unit"
    },
    {
        value: 3,
        label: "Moved in with family/friends on a temporary basis"
    },
    {
        value: 4,
        label: "Moved in with family/friends on a permanent basis"
    },
    {
        value: 5,
        label: "Moved to a transitional or temporary housing facility or program"
    },
    {
        value: 6,
        label: "Client became homeless - moving to a shelter or other place unfit for human habitation"
    },
    {
        value: 7,
        label: "Client went to jail/prison"
    },
    {
        value: 10,
        label: "Client Died"
    },
    {
        value: 8,
        label: "Client Doesn\'t Know"
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
const SubsidyInformationResponseCategory = [
    {
        value: 1,
        label: "WITHOUT_A_SUBSIDY"
    },
    {
        value: 2,
        label: "With the subsidy they had at project entry"
    },
    {
        value: 3,
        label: "With an ongoing subsidy acquired since project entry"
    },
    {
        value: 4,
        label: "Only with financial assistance other than a subsidy"
    }
];

class HousingAssessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { housingAssessment } = this.props;
        const {getFieldDecorator} = housingAssessment.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="HousingAssessment" key="10">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="HousingAssessmentAtExit"
                                >{getFieldDecorator("housingAssessmentAtExit", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false,
                                            type: "array"
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={HousingAssessmentAtExitResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="SubsidyInformation"
                                >{getFieldDecorator("subsidyInformation", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false,
                                            type: "array"
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="SubsidyInformation"
                                        options={SubsidyInformationResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="AnotherSubsidyInformation"
                                >{getFieldDecorator("anotherSubsidyInformation", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="AnotherSubsidyInformation"
                                        options={AnotherSubsidyInformationResponseCategory}
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
export default HousingAssessment;