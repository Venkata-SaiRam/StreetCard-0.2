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
import CoordinatedEntryAssessment from "./CoordinatedEntryAssessment";
import CoordinatedEntryEvent from "./CoordinatedEntryEvent";

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
class EmergencySolutionGrantsESG extends Component {
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
                var enrollmentRequestObject = {};
                enrollmentRequestObject.PersonalId = this.props.personalId;
                enrollmentRequestObject.DisablingCondition = this.handleValue(values.disablingcondition);
                enrollmentRequestObject.ProjectCategory = this.props.data
                enrollmentRequestObject.EntryDate = values['entrydate'].format('YYYY-MM-DD');
                enrollmentRequestObject.ExitDate = values['exitdate'].format('YYYY-MM-DD');
                var nonCashBenefitsObject = {};
                nonCashBenefitsObject.InformationDate = values['informationdateNonCash'] != null ? values['informationdateNonCash'].format('YYYY-MM-DD') : null;
                nonCashBenefitsObject.BenefitsFromAnySource = values.benefitsfromanysources != null ? values.benefitsfromanysources[0] : null;
                nonCashBenefitsObject.SNAP = values.snap != null ? values.snap[0] : null;
                nonCashBenefitsObject.WIC = values.wic != null ? values.wic[0] : null;
                nonCashBenefitsObject.TANFChildCare = values.tanfchildcare != null ? values.tanfchildcare[0] : null;
                nonCashBenefitsObject.TANFTransportation = values.tanftransportation != null ? values.tanftransportation[0] : null;
                nonCashBenefitsObject.OtherTANF = values.othertanf != null ? values.othertanf[0] : null;
                nonCashBenefitsObject.OtherSource = values.othersources != null ? values.othersources[0] : null;
                nonCashBenefitsObject.SpecifySource = values.specifysource;
                enrollmentRequestObject.non_cash_benefits = nonCashBenefitsObject;
                var incomeAndSourcesObject = {};
                incomeAndSourcesObject.InformationDate = values['informationdateIncome'] != null ? values['informationdateIncome'].format('YYYY-MM-DD') : null;
                incomeAndSourcesObject.IncomeFromAnySources = values.incomefromanysources != null ? values.incomefromanysources[0] : null;
                incomeAndSourcesObject.Earned = values.earned != null ? values.earned[0] : null;
                incomeAndSourcesObject.EarnedIncome = values.earnedincome;
                incomeAndSourcesObject.Unemployment = values.unemployment != null ? values.unemployment[0] : null;
                incomeAndSourcesObject.UnemploymentAmount = values.unemploymentamount;
                incomeAndSourcesObject.SSI = values.ssi != null ? values.ssi[0] : null;
                incomeAndSourcesObject.SSIAmount = values.ssiamount;
                incomeAndSourcesObject.SSDI = values.ssdi != null ? values.ssdi[0] : null;
                incomeAndSourcesObject.SSDIAmount = values.ssdiamount;
                incomeAndSourcesObject.VADisabilityService = values.vadisabilityservice != null ? values.vadisabilityservice[0] : null;
                incomeAndSourcesObject.VADisabilityServiceAmount = values.vadisabilityserviceamount;
                incomeAndSourcesObject.VADisabilityNonService = values.vadisabilitynonservice != null ? values.vadisabilitynonservice[0] : null;
                incomeAndSourcesObject.VADisabilityNonServiceNonAmount = values.vadisabilitynonserviceamount;
                incomeAndSourcesObject.PrivateDisability = values.privatedisability != null ? values.privatedisability[0] : null;
                incomeAndSourcesObject.PrivateDisabilityAmount = values.privatedisabilityamount;
                incomeAndSourcesObject.WorkersComp = values.workerscomp != null ? values.workerscomp[0] : null;
                incomeAndSourcesObject.WorkersCompAmount = values.workerscompamount;
                incomeAndSourcesObject.TANF = values.tanf != null ? values.tanf[0] : null;
                incomeAndSourcesObject.TANFAmount = values.tanfamount;
                incomeAndSourcesObject.GA = values.ga != null ? values.ga[0] : null;
                incomeAndSourcesObject.GAAmount = values.gaamount;
                incomeAndSourcesObject.SocSecRetirement = this.handleValue(values.socsecretirement);
                incomeAndSourcesObject.SocSecRetirementAmount = values.socsecretirementamount;
                incomeAndSourcesObject.Pension = this.handleValue(values.pension);
                incomeAndSourcesObject.PensionAmount = values.pensionamount;
                incomeAndSourcesObject.ChildSupport = this.handleValue(values.childsupport);
                incomeAndSourcesObject.ChildSupportAmount = values.childsupportamount;
                incomeAndSourcesObject.Alimony = this.handleValue(values.alimony);
                incomeAndSourcesObject.AlimonyAmount = values.alimonyamount;
                incomeAndSourcesObject.OtherIncomeSources = this.handleValue(values.otherincomesources);
                incomeAndSourcesObject.OtherIncomeSourcesAmount = values.otherincomesourcesamount;
                incomeAndSourcesObject.OtherIncomeSourcesIdentify = values.otherincomesourcesidentify;
                incomeAndSourcesObject.TotalMonthlyIncome = values.totalmonthlyincome;
                enrollmentRequestObject.income_and_sources = incomeAndSourcesObject;
                var healthInsuranceObject = {};
                healthInsuranceObject.InformationDate = values['informationdateHealth'] != null ? values['informationdateHealth'].format('YYYY-MM-DD') : null;
                healthInsuranceObject.CoveredByHealthInsurance = this.handleValue(values.coveredbyhealthinsurance);
                healthInsuranceObject.Medicaid = this.handleValue(values.medicaid);
                healthInsuranceObject.Medicare = this.handleValue(values.medicare);
                healthInsuranceObject.SCHIP = this.handleValue(values.schip);
                healthInsuranceObject.VAMedicalServices = this.handleValue(values.vamedicalservices);
                healthInsuranceObject.EmployerProvided = this.handleValue(values.employerprovided);
                healthInsuranceObject.COBRA = this.handleValue(values.cobra);
                healthInsuranceObject.PrivatePay = this.handleValue(values.privatepay);
                healthInsuranceObject.StateHealthInsuranceForAdults = this.handleValue(values.statehealthinsuranceforadults);
                healthInsuranceObject.IndianHealthServices = this.handleValue(values.indianhealthservices);
                healthInsuranceObject.OtherInsurance = this.handleValue(values.otherinsurance);
                healthInsuranceObject.SpecifySource = values.specifysourceHealthInsurance;
                healthInsuranceObject.Reason = this.handleValue(values.reason);
                healthInsuranceObject.WorkersCompAmount = values.workerscompamountHI;
                enrollmentRequestObject.health_insurance = healthInsuranceObject;
                var domesticViolenceObject = {};
                domesticViolenceObject.InformationDate = values['informationdateDV'] != null ? values['informationdateDV'].format('YYYY-MM-DD') : null;
                domesticViolenceObject.DomesticViolenceVictim = this.handleValue(values.domesticviolencevictim);
                domesticViolenceObject.WhenOccurred = this.handleValue(values.whenoccurred);
                domesticViolenceObject.CurrentlyFleeing = this.handleValue(values.currentlyfleeing);
                enrollmentRequestObject.domestic_violence = domesticViolenceObject;
                var disablingCondition = {};
                disablingCondition.InformationDate = values['informationdateDC'] != null ? values['informationdateDC'].format('YYYY-MM-DD') : null;
                disablingCondition.physical_disability = this.handleValue(values.physical_disability);
                disablingCondition.physical_disability_impairing = this.handleValue(values.physical_disability_impairing);
                disablingCondition.developmental_disability = this.handleValue(values.developmental_disability);
                disablingCondition.developmental_disability_impairing = this.handleValue(values.developmental_disability_impairing);
                disablingCondition.chronic_health = this.handleValue(values.chronic_health_impairing);
                disablingCondition.hiv_aids = this.handleValue(values.hiv_aids);
                disablingCondition.hiv_aids_impairing = this.handleValue(values.hiv_aids_impairing);
                disablingCondition.mental_health = this.handleValue(values.mental_health);
                disablingCondition.mental_health_impairing = this.handleValue(values.mental_health_impairing);
                disablingCondition.substance_abuse = this.handleValue(values.substance_abuse);
                disablingCondition.substance_abuse_impairing = this.handleValue(values.substance_abuse_impairing);
                enrollmentRequestObject.disabling_condition = disablingCondition;
                var coordinatedEntryAssessment = {};
                coordinatedEntryAssessment.InformationDate = values['assessment_date'] != null ? values['assessment_date'].format('YYYY-MM-DD') : null;
                coordinatedEntryAssessment.assessment_location = values.assessment_location;
                coordinatedEntryAssessment.assessment_type = this.handleValue(values.assessment_type);
                coordinatedEntryAssessment.assessment_level = this.handleValue(values.assessment_level);
                coordinatedEntryAssessment.prioritization_status = this.handleValue(values.prioritization_status);
                enrollmentRequestObject.coordinated_entry_assessment = coordinatedEntryAssessment;
                var coordinatedEntryEvent = {};
                coordinatedEntryEvent.dateofEvent = values["dateOfEvent"] != null ? values["dateOfEvent"].format("YYYY-MM-DD") : null;
                coordinatedEntryEvent.event = this.handleValue(values.eventInformation);
                coordinatedEntryEvent.clienthoused = this.handleValue(values.rehousedInformation);
                coordinatedEntryEvent.aftercareproject = this.handleValue(values.afterCareInformation);
                coordinatedEntryEvent.hmisid = values.housingLocation;
                coordinatedEntryEvent.referralresult = this.handleValue(values.referralResult);
                coordinatedEntryEvent.dateofresult = values["dateOfResult"] != null ? values["dateOfResult"].format("YYYY-MM-DD") : null;
                enrollmentRequestObject.coordinatedentryeventESG = coordinatedEntryEvent;

                this.handleEmptyObject(enrollmentRequestObject);

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
                    <CoordinatedEntryAssessment coordinatedEntryAssessment={this.props}/>
                    <CoordinatedEntryEvent coordinatedEntryEvent={this.props}/>

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

const WrappedESGEnrollment = Form.create({name: "enrollment"})(
    EmergencySolutionGrantsESG
);
export default WrappedESGEnrollment;
