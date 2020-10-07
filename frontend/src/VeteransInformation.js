import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;
const DischargeStatusCategory = [
        {
            value: 1,
            label: "Honorable"
        },
        {
            value: 2,
            label: "General under honorable conditions"
        },
        {
            value: 6,
            label: "Under other than honorable conditions (OTH)"
        },
        {
            value: 4,
            label: "Bad conduct"
        },
        {
            value: 5,
            label: "Dishonorable"
        },
        {
            value: 7,
            label: "Uncharacterized"
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
const MilitaryBranchCategory = [
        {
            value: 1,
            label: "Army"
        },
        {
            value: 2,
            label: "Air Force"
        },
        {
            value: 3,
            label: "Navy"
        },
        {
            value: 4,
            label: "Marines"
        },
        {
            value: 6,
            label: "Coast Guard"
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
class VeteransInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true
        }
        // this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    render(){
        const { veteransInformation } = this.props;
        const {getFieldDecorator} = veteransInformation.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Veteran's Information" key="5">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Year Entered Military Service">
                                    {getFieldDecorator("yearenteredmilitaryservice", {
                                        rules: [
                                            {
                                                message: {message},
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Input/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Year Separated From Military Service"
                                >{getFieldDecorator("yearseparatedfrommilitaryservice", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: true
                                        }
                                    ]
                                })(
                                    <Input/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: WorldWar2"
                                >{getFieldDecorator("theatreofoperations_worldwar2", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Theatre Of Operations: WorldWar2"
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: KoreanWar"
                                >{getFieldDecorator("theatreofoperations_koreanwar", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(<Cascader
                                        placeholder="Theatre Of Operations: KoreanWar"
                                        options={ResponseCategory}
                                    ></Cascader>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: VietnamWar"
                                >{getFieldDecorator("theatreofoperations_vietnamwar", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Theatre Of Operations: VietnamWar"
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: PersianGulfWar"
                                >{getFieldDecorator("theatreofoperations_persiangulfwar", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Theatre Of Operations: PersianGulfWar"
                                        options={ResponseCategory}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: Afghanistan">
                                    {getFieldDecorator("theatreofoperations_afghanistan", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Theatre Of Operations: Afghanistan"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: Iraq - IraqiFreedom">
                                    {getFieldDecorator("theatreofoperations_iraq_iraqifreedom", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Theatre Of Operations: Iraq - IraqiFreedom"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: Iraq - NewDawn">
                                    {getFieldDecorator("theatreofoperations_iraq_newdawn", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="TheatreOfOperations: Iraq - NewDawn"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="TOO: Other Peace keeping Operations">
                                    {getFieldDecorator("theatreofoperations_otherpeacekeepingoperations", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Theatre Of Operations: Other Peace keeping Operations"
                                            options={ResponseCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Branch Of Military">
                                    {getFieldDecorator("branchofmilitary", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Branch Of Military"
                                            options={MilitaryBranchCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Discharge Status">
                                    {getFieldDecorator("dischargestatus", {
                                        rules: [
                                            {
                                                message: {message},
                                                type: "array",
                                                required: true
                                            }
                                        ]
                                    })(
                                        <Cascader
                                            placeholder="Discharge Status"
                                            options={DischargeStatusCategory}
                                        ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default VeteransInformation;