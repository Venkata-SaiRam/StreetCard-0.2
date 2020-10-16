import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';


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
            subsidyInformationDisabled: true,
            anotherSubsidyInformationDisabled: true
        }
    }

    handleDropDownChange(values){
        console.log(values);
        if(values[0] === 1){
            this.setState({subsidyInformationDisabled: false,
                           anotherSubsidyInformationDisabled: true
                        });
        }else if(values[0] === 2){
            this.setState({anotherSubsidyInformationDisabled: false,
                           subsidyInformationDisabled: true
                        });
        }else {
            this.setState({
                subsidyInformationDisabled: true,
                anotherSubsidyInformationDisabled: true
            });
            this.props.housingAssessment.form.resetFields("subsidyInformation");
            this.props.housingAssessment.form.resetFields("anotherSubsidyInformation");
        }
    }

    render(){
        const { housingAssessment } = this.props;
        const {getFieldDecorator} = housingAssessment.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Housing Assessment at Exit" key="10">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Housing Assessment At Exit"
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
                                        onChange={this
                                        .handleDropDownChange
                                        .bind(this)}
                                        placeholder="Select.."
                                        options={HousingAssessmentAtExitResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Subsidy Information"
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
                                        disabled={this.state.subsidyInformationDisabled}
                                        placeholder="Subsidy Information"
                                        options={SubsidyInformationResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Another Subsidy Information"
                                >{getFieldDecorator("anotherSubsidyInformation", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: false
                                        }
                                    ]
                                })(<Cascader
                                        disabled={this.state.anotherSubsidyInformationDisabled}
                                        placeholder="Another Subsidy Information"
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