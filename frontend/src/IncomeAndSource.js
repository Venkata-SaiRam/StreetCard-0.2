import React, {Component} from 'react';
import {Cascader, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';

const {Panel} = Collapse;
const {TextArea} = Input;

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


class IncomeAndSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: true,
            ifEarned: true,
            ifUnEmployed: true,
            ifSSI: true,
            ifSSDI: true,
            ifVADisabilityService: true,
            ifVADisabilityNonService: true,
            ifPrivateDisability: true,
            ifWorkersComp: true,
            ifTANF: true,
            ifGA: true,
            ifRetire: true,
            ifPension: true,
            ifChildSupport: true,
            ifAlimony: true,
            ifOtherIncome: true,
            otherIncomeSources: true
        }
    }
    handleEarnedIncomeChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifEarned: false});
        }else {
            this.setState({ifEarned: true});
            // this.setState({howWasTheInformationObtainedDisabled: true});
            this.props.incomeSource.form.resetFields(fieldName);
            // this.props.incomeSource.form.resetFields("howWasTheInformationObtained");
        }
    }

    handleUnEmploymentChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifUnEmployed: false});
        }else {
            this.setState({ifUnEmployed: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleSSIChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifSSI: false});
        }else {
            this.setState({ifSSI: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleSSDIChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifSSDI: false});
        }else {
            this.setState({ifSSDI: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleDisabilityServiceChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifVADisabilityService: false});
        }else {
            this.setState({ifVADisabilityService: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleDisabilityNonServiceChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifVADisabilityNonService: false});
        }else {
            this.setState({ifVADisabilityNonService: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handlePrivateDisabilityChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifPrivateDisability: false});
        }else {
            this.setState({ifPrivateDisability: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleWorkersCompChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifWorkersComp: false});
        }else {
            this.setState({ifWorkersComp: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleTANFChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifTANF: false});
        }else {
            this.setState({ifTANF: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleGAChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifGA: false});
        }else {
            this.setState({ifGA: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleRetirementChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifRetire: false});
        }else {
            this.setState({ifRetire: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handlePensionChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifPension: false});
        }else {
            this.setState({ifPension: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleChildSupportChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifChildSupport: false});
        }else {
            this.setState({ifChildSupport: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleAlimonyChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifAlimony: false});
        }else {
            this.setState({ifAlimony: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    handleOtherIncomeChange(fieldName, values) {
        if(values[0] === 1) {
             this.setState({ifOtherIncome: false});
             this.setState({otherIncomeSources: false});
        }else {
            this.setState({ifOtherIncome: true});
            this.setState({otherIncomeSources: true});
            this.props.incomeSource.form.resetFields(fieldName);
        }
    }

    render(){
        const { incomeSource, onChangeValue } = this.props;
        const {getFieldDecorator} = incomeSource.form;
        const message = "Mandatory field! Please provide a response."
        return(
            <Collapse  style={{backgroundColor: "#f0f9ff"}}>
            <Panel header="Income and Source" key="2">
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Information Date" >
                                    {getFieldDecorator("informationdateIncome", {
                                        rules: [
                                            {
                                                message: {message},
                                                required: true
                                            }
                                        ]
                                    })(
                                        <DatePicker style={{width: "100%"}}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item style={{whiteSpace : "pre-wrap", lineHeight : "normal"}}
                                    label="Income From Any Sources"
                                >{getFieldDecorator("incomefromanysources", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: true,
                                            type: "array"
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
                                    label="Earned"
                                >{getFieldDecorator("earned", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Earned"
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleEarnedIncomeChange
                                            .bind(this, "earnedincome")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Earned Income"
                                >{getFieldDecorator("earnedincome", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(<Input disabled={this.state.ifEarned}/>
                                )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Unemployment"
                                >{getFieldDecorator("unemployment", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleUnEmploymentChange
                                            .bind(this, "unemploymentamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Unemployment Amount"
                                >{getFieldDecorator("unemploymentamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifUnEmployed}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="SSI"
                                >{getFieldDecorator("ssi", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleSSIChange
                                            .bind(this, "ssiamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="SSI Amount"
                                >{getFieldDecorator("ssiamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifSSI}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="SSDI"
                                >{getFieldDecorator("ssdi", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleSSDIChange
                                            .bind(this, "ssdiamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="SSDI Amount"
                                >{getFieldDecorator("ssdiamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifSSDI}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="VA Disability Service"
                                >{getFieldDecorator("vadisabilityservice", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleDisabilityServiceChange
                                            .bind(this, "vadisabilityserviceamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="VA Disability Service Amount"
                                >{getFieldDecorator("vadisabilityserviceamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifVADisabilityService}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="VA Disability NonService"
                                >{getFieldDecorator("vadisabilitynonservice", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleDisabilityNonServiceChange
                                            .bind(this, "vadisabilitynonservicenonamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="VA Disability NonService NonAmount"
                                >{getFieldDecorator("vadisabilitynonservicenonamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifVADisabilityNonService}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Private Disability"
                                >{getFieldDecorator("privatedisability", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handlePrivateDisabilityChange
                                            .bind(this, "privatedisabilityamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Private Disability Amount"
                                >{getFieldDecorator("privatedisabilityamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifPrivateDisability}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Workers Comp"
                                >{getFieldDecorator("workerscomp", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleWorkersCompChange
                                            .bind(this, "workerscompamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Workers Comp Amount"
                                >{getFieldDecorator("workerscompamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifWorkersComp}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="TANF"
                                >{getFieldDecorator("tanf", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleTANFChange
                                            .bind(this, "tanfamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="TANF Amount"
                                >{getFieldDecorator("tanfamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifTANF}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="GA"
                                >{getFieldDecorator("ga", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleGAChange
                                            .bind(this, "gaamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="GA Amount"
                                >{getFieldDecorator("gaamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifGA}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Soc Sec Retirement"
                                >{getFieldDecorator("socsecretirement", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleRetirementChange
                                            .bind(this, "socsecretirementamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Soc Sec Retirement Amount"
                                >{getFieldDecorator("socsecretirementamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifRetire}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Pension"
                                >{getFieldDecorator("pension", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handlePensionChange
                                            .bind(this, "pensionamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Pension Amount"
                                >{getFieldDecorator("pensionamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false,
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifPension}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Child Support"
                                >{getFieldDecorator("childsupport", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleChildSupportChange
                                            .bind(this, "Child Support Amount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Child Support Amount"
                                >{getFieldDecorator("Child Support Amount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifChildSupport}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Alimony"
                                >{getFieldDecorator("alimony", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleAlimonyChange
                                            .bind(this, "alimonyamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Alimony Amount"
                                >{getFieldDecorator("alimonyamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifAlimony}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item
                                    label="Other Income Sources"
                                >{getFieldDecorator("otherincomesources", {
                                    rules: [
                                        {
                                            message: {message},
                                            type: "array",
                                            required: true
                                        }
                                    ]
                                })(
                                    <Cascader
                                        placeholder="Select.."
                                        options={YesNoResponse}
                                        onChange={this
                                            .handleOtherIncomeChange
                                            .bind(this, "otherincomesourcesamount")}
                                    ></Cascader>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Other Income Sources Amount"
                                >{getFieldDecorator("otherincomesourcesamount", {
                                    rules: [
                                        {
                                            message: {message},
                                            required: false
                                        }
                                    ]
                                })(
                                    <Input disabled={this.state.ifOtherIncome}/>)}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Other Income Sources Identify"
                                >{getFieldDecorator("otherincomesourcesidentify")(
                                    <TextArea rows={2} disabled={this.state.otherIncomeSources}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
            </Collapse>
        );
    }
}
export default IncomeAndSource;