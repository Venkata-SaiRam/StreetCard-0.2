import React, { Component } from 'react';
import {
    Cascader,
    Col,
    Collapse,
    DatePicker,
    Form,
    Input,
    Row
} from "antd";
import './LabelWrap.css';

const { Panel } = Collapse;

const ResponseCategory = [
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

const CurrentLivingSituationOptions = [
    {
        value: 0,
        label: "Homeless Situations"
    },
    {
        value: 1,
        label: "Institutional Situations"
    },
    {
        value: 2,
        label: "Temporary and Permanent Housing Situations"
    },
    {
        value: 3,
        label: "Other"
    }
]

const HomelessSituationsOptions = [
    {
        value: 16,
        label: "Place not meant for habitation (e.g., a vehicle, an abandoned building, bus/train/subway station/airport or anywhere outside)"
    },
    {
        value: 1,
        label: "Emergency shelter, including hotel or motel paid for with emergency shelter voucher, or RHY-funded Host Home shelter"
    },
    {
        value: 18,
        label: "Safe Haven"
    }
]

const InstitutionalSituationsOptions = [
    {
        value: 15,
        label: "Foster care home or foster care group home"
    },
    {
        value: 6,
        label: "Hospital or other residential non-psychiatric medical facility"
    },
    {
        value: 7,
        label: "Jail, prison, or juvenile detention facility"
    },
    {
        value: 25,
        label: "Long-term care facility or nursing home"
    },
    {
        value: 5,
        label: "Substance abuse treatment facility or detox center"
    }

]

const TemporaryandPermanentHousingSituationsOptions = [
    {
        value: 29,
        label: "Residential project or halfway house with no homeless criteria"
    },
    {
        value: 14,
        label: "Hotel or motel paid for without emergency shelter voucher"
    },
    {
        value: 2,
        label: "Transitional housing for homeless persons (including homeless youth)"
    },
    {
        value: 32,
        label: "Host Home (non-crisis)"
    },
    {
        value: 13,
        label: "Staying or living with friends, temporary tenure (e.g. room, apartment, or house)"
    },
    {
        value: 36,
        label: "Staying or living in a friend’s room, apartment, or house "
    },
    {
        value: 12,
        label: "Staying or living with family, temporary tenure (e.g. room, apartment, or house)"
    },
    {
        value: 22,
        label: "Staying or living with family, permanent tenure"
    },
    {
        value: 35,
        label: "Staying or living in a family member’s room, apartment, or house"
    },
    {
        value: 23,
        label: "Staying or living with friends, permanent tenure"
    },
    {
        value: 26,
        label: "Moved from one HOPWA funded project to HOPWA PH"
    },
    {
        value: 27,
        label: "Moved from one HOPWA funded project to HOPWA TH"
    },
    {
        value: 28,
        label: "Rental by client, with GPD TIP housing subsidy"
    },
    {
        value: 19,
        label: "Rental by client, with VASH housing subsidy"
    },
    {
        value: 3,
        label: "Permanent housing (other than RRH) for formerly homeless persons"
    },
    {
        value: 31,
        label: "Rental by client, with RRH or equivalent subsidy"
    },
    {
        value: 33,
        label: "Rental by client, with HCV voucher (tenant or project based)"
    },
    {
        value: 34,
        label: "Rental by client in a public housing unit"
    },
    {
        value: 10,
        label: "Rental by client, no ongoing housing subsidy"
    },
    {
        value: 20,
        label: "Rental by client, with other ongoing housing subsidy"
    },
    {
        value: 21,
        label: "Owned by client, with ongoing housing subsidy"
    },
    {
        value: 11,
        label: "Owned by client, no ongoing housing subsidy"
    }
]

const OtherOptions = [
    {
        value: 30,
        label: "No exit interview completed"
    },
    {
        value: 17,
        label: "Other"
    },
    {
        value: 24,
        label: "Deceased"
    },
    {
        value: 37,
        label: "Worker unable to determine"
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
        label: "Data not collected"
    },

];



class CurrentLivingSituation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            HomelessSituationsDisabled: true,
            InstitutionalSituationsDisabled: true,
            OtherDisabled: true,
            TemporaryandPermanentHousingSituationsDisabled: true
        }
    }

    handleDropDown(values) {
        if (values[0] === 0) {
            this.setState({
                HomelessSituationsDisabled: false,
                InstitutionalSituationsDisabled: true,
                OtherDisabled: true,
                TemporaryandPermanentHousingSituationsDisabled: true
            });

            this.props.currentLivingSituation.form.resetFields("InstitutionalSituations");
            this.props.currentLivingSituation.form.resetFields("Other");
            this.props.currentLivingSituation.form.resetFields("TemporaryandPermanentHousingSituations");
        } else if (values[0] === 1) {
            this.setState({
                HomelessSituationsDisabled: true,
                InstitutionalSituationsDisabled: false,
                OtherDisabled: true,
                TemporaryandPermanentHousingSituationsDisabled: true
            });

            this.props.currentLivingSituation.form.resetFields("HomelessSituations");
            this.props.currentLivingSituation.form.resetFields("Other");
            this.props.currentLivingSituation.form.resetFields("TemporaryandPermanentHousingSituations");
        } else if (values[0] === 2) {
            this.setState({
                HomelessSituationsDisabled: true,
                InstitutionalSituationsDisabled: true,
                OtherDisabled: true,
                TemporaryandPermanentHousingSituationsDisabled: false
            });
            this.props.currentLivingSituation.form.resetFields("HomelessSituations");
            this.props.currentLivingSituation.form.resetFields("Other");
            this.props.currentLivingSituation.form.resetFields("InstitutionalSituations");
        } else if (values[0] === 3) {
            this.setState({
                HomelessSituationsDisabled: true,
                InstitutionalSituationsDisabled: true,
                OtherDisabled: false,
                TemporaryandPermanentHousingSituationsDisabled: true
            });

            this.props.currentLivingSituation.form.resetFields("HomelessSituations");
            this.props.currentLivingSituation.form.resetFields("TemporaryandPermanentHousingSituations");
            this.props.currentLivingSituation.form.resetFields("InstitutionalSituations");
        } else {
            this.setState({
                HomelessSituationsDisabled: true,
                InstitutionalSituationsDisabled: true,
                OtherDisabled: true,
                TemporaryandPermanentHousingSituationsDisabled: true
            });

            this.props.currentLivingSituation.form.resetFields("HomelessSituations");
            this.props.currentLivingSituation.form.resetFields("Other");
            this.props.currentLivingSituation.form.resetFields("TemporaryandPermanentHousingSituations");
            this.props.currentLivingSituation.form.resetFields("InstitutionalSituations");
        }
    }

    render() {
        const { currentLivingSituation } = this.props;
        const { getFieldDecorator } = currentLivingSituation.form;
        const message = "Mandatory field! Please provide a response."
        return (
            <Collapse style={{
                backgroundColor: "#f0f9ff"
            }}>
                <Panel header="Current Living Situation" key="13">
                    <Row gutter={4}>
                    <Col span={8}>
                            <Form.Item label="Information Date (date of contact)">
                                {getFieldDecorator("InformationDateCurrentLiving", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: true
                                        }
                                    ]
                                })(
                                    <DatePicker style={{ width: "100%" }} />
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Current Living Situation">
                                {getFieldDecorator("CurrentLivingSituation", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader placeholder="Select.." options={CurrentLivingSituationOptions}
                                        onChange={this
                                            .handleDropDown
                                            .bind(this)}
                                    ></Cascader>
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Homeless Situations">
                                {getFieldDecorator("HomelessSituations", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader disabled={this.state.HomelessSituationsDisabled}
                                        placeholder="Select.." options={HomelessSituationsOptions}></Cascader>
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Institutional Situations">
                                {getFieldDecorator("InstitutionalSituations", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader disabled={this.state.InstitutionalSituationsDisabled}
                                        placeholder="Select.." options={InstitutionalSituationsOptions}></Cascader>
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Temporary and Permanent Housing Situations">
                                {getFieldDecorator("TemporaryandPermanentHousingSituations", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader disabled={this.state.TemporaryandPermanentHousingSituationsDisabled}
                                        placeholder="Select.." options={TemporaryandPermanentHousingSituationsOptions}></Cascader>
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Other">
                                {getFieldDecorator("Other", {
                                    rules: [
                                        {
                                            message: {
                                                message
                                            },
                                            required: false
                                        }
                                    ]
                                })(
                                    <Cascader disabled={this.state.OtherDisabled}
                                        placeholder="Select.." options={OtherOptions}></Cascader>
                                )}
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Is the client going to have to leave their current living situation within 14 days?">
                                {
                                    getFieldDecorator("living_situation", {
                                        rules: [
                                            {
                                                message: { message },
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })
                                        (<Cascader
                                            placeholder="Select.."
                                            options={ResponseCategory}
                                        >
                                        </Cascader>)
                                }
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                label="Has a subsequent residence been identified?"
                            >{getFieldDecorator("residence_value", {
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
                                    options={ResponseCategory}
                                ></Cascader>)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                label="Does individual or family have resources or support networks to obtain other permanent housing?"
                            >{getFieldDecorator("support_network", {
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
                                    options={ResponseCategory}
                                ></Cascader>)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>

                            <Form.Item
                                label="Has the client had a lease or ownership interest in a permanent housing unit in the last 60 days"
                            >{getFieldDecorator("housing_unit", {
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
                                    options={ResponseCategory}
                                ></Cascader>)}
                            </Form.Item>
                        </Col>

                        <Col span={8}>

                            <Form.Item
                                label="Has the client moved two or more times in the last 60 days?"
                            >{getFieldDecorator("client_relocation", {
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
                                    options={ResponseCategory}
                                ></Cascader>)}
                            </Form.Item>
                        </Col>

                        <Col span={8}>

                            <Form.Item
                                label="Location Details"
                            >{getFieldDecorator("location_details", {
                                rules: [
                                    {
                                        message: { message },
                                        required: true
                                    }
                                ]
                            })(<Input/>
                                )}
                                </Form.Item>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>

        );
    }
}
export default CurrentLivingSituation;
