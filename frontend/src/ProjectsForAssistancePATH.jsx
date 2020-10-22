import React, {Component} from "react";
import "antd/dist/antd.css";
import {Button, Cascader, Checkbox, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';
import EnrollmentDetails from "./EnrollmentDetails";
import IncomeAndSource from "./IncomeAndSource";
import NonCashBenefits from "./NonCashBenefits";
import HealthInsurance from "./HealthInsurance";
import DisablingCondition from "./DisablingCondition";
import DomesticViolence from "./DomesticViolence";
import ServicesProvidedHOPWA from "./ServicesProvidedHOPWA";
import MedicalAssistance from "./MedicalAssistance";
import TCellCD4ViralLoad from "./TCellCD4ViralLoad";
import HousingAssessment from "./HousingAssessment";

const {Panel} = Collapse;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        },
        md: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 12
        }
    }
};
class ProjectsForAssistancePATH extends Component {
    constructor(props) {
        super(props);
        this.state={
            isEnabled: true
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleValue = e => {

        if (e != null) {
            return e[0];
        } else
            return 1;
    };


    handleOnSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {


                fetch(process.env.REACT_APP_IP + 'homeless/' + this.props.personalId + '/enrollment/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(enrollmentRequestObject)
                })
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        res
                            .json()
                            .then(json => {
                                if (json === null) {
                                    this
                                        .props
                                        .history
                                        .push('/error');
                                } else {
                                    this
                                        .props
                                        .history
                                        .push('/success');
                                }
                            });
                    } else if(Math.round(res.status / 100) == 4 || Math.round(res.status / 100) == 5) {
                        this
                            .props
                            .history
                            .push({
                                pathname: '/error',
                                state: { errorCode: res.status }
                            });
                        return null;
                    }
                })
            }
        });
    }
    handleEmptyObject = obj => {
        for (const key in obj) {
            if (typeof (obj[key]) === 'object') {
                let ccount = 0;
                let count = 0;
                for (const x in obj[key]) {
                    count++;
                    if (obj[key][x] === null || obj[key][x] === undefined) {
                        ccount = ccount + 1;
                    }
                }
                if (ccount === count) {
                    delete obj[key];
                }
            }
        }
    };
    enableButton = e => {
        this.setState({
            isEnabled: false
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const message = "Mandatory field! Please provide a response."
        return (
            <Form {...formItemLayout} name="enrollment"
                  onSubmit={this.handleOnSubmit}>
                <Collapse style={{backgroundColor: "#f0f9ff"}}>
                    <EnrollmentDetails personalProps={this.props}/>
                    <IncomeAndSource incomeSource={this.props}/>
                    <NonCashBenefits nonCash={this.props}/>
                    <HealthInsurance healthInsurance={this.props}/>
                    <DisablingCondition disablingCondition={this.props}/>
                    <DomesticViolence domesticViolence={this.props}/>

                    <Panel style={{backgroundColor: "lightseagreen"}} header="Submit Form Here"
                           key="17">
                        <Row>
                            <Col span={12}>
                                <p style={{padding: "2%"}}>
                                    <Checkbox onChange={this.enableButton}>
                                        I acknowledge, the form is completed as per the inputs provided
                                        by the
                                        client.
                                    </Checkbox>
                                </p>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    <Button type="primary" block htmlType="submit"
                                            className="registration-submit-button" disabled={this.state.isEnabled}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Form>
        );
    }
}

const WrappedPATHEnrollment = Form.create({name: "enrollment"})(
    ProjectsForAssistancePATH
);
export default WrappedPATHEnrollment;