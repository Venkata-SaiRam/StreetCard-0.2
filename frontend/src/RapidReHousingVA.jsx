import React, {Component} from "react";
import "antd/dist/antd.css";
import {Button, Cascader, Checkbox, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';
import EnrollmentDetails from "./EnrollmentDetails";
import NonCashBenefits from "./NonCashBenefits";
import IncomeAndSource from "./IncomeAndSource";
import HealthInsurance from "./HealthInsurance";
import VeteransInformation from "./VeteransInformation";
import ConnectionWithSOAR from "./ConnectionWithSOAR";
import EmploymentStatus from "./EmploymentStatus";
import ServicesProvidedSSVF from "./ServicesProvidedSSVF";

const {Panel} = Collapse;
const {TextArea} = Input;
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
class RapidReHousingVA extends Component {
    constructor(props) {
        super(props);
        this.state={
            isEnabled: true,
            personal: "",
            nonCashValue: ""
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleValue = e => {

        if (e != null) {
            return e[0];
        } else
            return null;
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
                var dateofEngagementObject = {};
                dateofEngagementObject.DateOfEngagement = values['dateofengagement'] != null ? values['dateofengagement'].format('YYYY-MM-DD') : null;
                enrollmentRequestObject.date_of_engagement = dateofEngagementObject;
                var bedNightDateObject = {};
                bedNightDateObject.BedNightDate = values['bednightdate'] != null ? values['bednightdate'].format('YYYY-MM-DD') : null;
                enrollmentRequestObject.bed_night_date = bedNightDateObject;
                var currentLivingSituationObject = {};
                currentLivingSituationObject.InformationDate = values['informationdateCL'] != null ? values['informationdateCL'].format('YYYY-MM-DD') : null;
                currentLivingSituationObject.CurrentLivingSituation = this.handleValue(values.currentlivingsituation);
                currentLivingSituationObject.VerifiedByProject = this.handleValue(values.verifiedbyproject);
                currentLivingSituationObject.HasToLeaveCurrentSituation = this.handleValue(values.hastoleavecurrentsituation);
                currentLivingSituationObject.HasASubsequentResidence = this.handleValue(values.hasasubsequentresidence);
                currentLivingSituationObject.HasResourcesToObtainPermanentHousing = this.handleValue(values.hasresourcestoobtainpermanenthousing);
                currentLivingSituationObject.OwnershipInPermanentHousing = this.handleValue(values.ownershipinpermanenthousing);
                currentLivingSituationObject.HasClientMoved = this.handleValue(values.hasclientmoved);
                currentLivingSituationObject.LocationDetails = values.locationdetails;
                enrollmentRequestObject.current_living_situation = currentLivingSituationObject;
                var coordinatedEntryAssessmentObject = {};
                coordinatedEntryAssessmentObject.DateOfAssessment = values['dateofassessment'] != null ? values['dateofassessment'].format('YYYY-MM-DD') : null;
                coordinatedEntryAssessmentObject.AssessmentLocation = values.assessmentlocation;
                coordinatedEntryAssessmentObject.AssessmentType = this.handleValue(values.assessmenttype);
                coordinatedEntryAssessmentObject.AssessmentLevel = this.handleValue(values.assessmentlevel);
                coordinatedEntryAssessmentObject.AssessmentQuestion = values.assessmentquestion;
                coordinatedEntryAssessmentObject.AssessmentAnswer = values.assessmentanswer;
                coordinatedEntryAssessmentObject.AssessmentResultType = values.assessmentresulttype;
                coordinatedEntryAssessmentObject.AssessmentResult = values.assessmentresult;
                coordinatedEntryAssessmentObject.PrioritizationStatus = values.prioritizationstatus;
                enrollmentRequestObject.coordinated_entry_assessment = coordinatedEntryAssessmentObject;
                var coordinatedEntryEventObject = {};
                coordinatedEntryEventObject.DateOfEvent = values['dateofevent'] != null ? values['dateofevent'].format('YYYY-MM-DD') : null;
                coordinatedEntryEventObject.Event = this.handleValue(values.event);
                coordinatedEntryEventObject.ClientHousedOrReHoused = this.handleValue(values.clienthousedorrehoused);
                coordinatedEntryEventObject.EnrolledInAfterCareProject = this.handleValue(values.enrolledinaftercareproject);
                coordinatedEntryEventObject.LocationOfHousing = this.handleValue(values.locationofhousing);
                coordinatedEntryEventObject.ReferralResult = this.handleValue(values.referralresult);
                coordinatedEntryEventObject.DateOfResult = values['dateofresult'] != null ? values['dateofresult'].format('YYYY-MM-DD') : null;
                enrollmentRequestObject.coordinated_entry_event = coordinatedEntryEventObject;
                var sexualOrientationObject = {};
                sexualOrientationObject.SexualOrientation = this.handleValue(values.sexualorientation);
                sexualOrientationObject.Description = values.description;
                enrollmentRequestObject.sexual_orientation = sexualOrientationObject;
                var veteransInfoObject = {};
                veteransInfoObject.YearEnteredMilitaryService = values.yearenteredmilitaryservice;
                veteransInfoObject.YearSeparatedFromMilitaryService = values.yearseparatedfrommilitaryservice;
                veteransInfoObject.TheatreOfOperations_WorldWar2 = this.handleValue(values.theatreofoperations_worldwar2);
                veteransInfoObject.TheatreOfOperations_KoreanWar = this.handleValue(values.theatreofoperations_koreanwar);
                veteransInfoObject.TheatreOfOperations_VietnamWar = this.handleValue(values.theatreofoperations_vietnamwar);
                veteransInfoObject.TheatreOfOperations_PersianGulfWar = this.handleValue(values.theatreofoperations_persiangulfwar);
                veteransInfoObject.TheatreOfOperations_Afghanistan = this.handleValue(values.theatreofoperations_afghanistan);
                veteransInfoObject.TheatreOfOperations_Iraq_IraqiFreedom = this.handleValue(values.theatreofoperations_iraq_iraqifreedom);
                veteransInfoObject.TheatreOfOperations_Iraq_NewDawn = this.handleValue(values.theatreofoperations_iraq_newdawn);
                veteransInfoObject.TheatreOfOperations_OtherPeacekeepingOperations = this.handleValue(values.theatreofoperations_otherpeacekeepingoperations);
                veteransInfoObject.BranchOfMilitary = this.handleValue(values.branchofmilitary);
                veteransInfoObject.DischargeStatus = this.handleValue(values.dischargestatus);
                enrollmentRequestObject.veteran_Information = veteransInfoObject;
                var servicesProvidedSSVFObject = {};
                servicesProvidedSSVFObject.DateOfService = values['dateofservice'] != null ? values['dateofservice'].format('YYYY-MM-DD') : null;
                servicesProvidedSSVFObject.TypeOfService = this.handleValue(values.typeofservice);
                servicesProvidedSSVFObject.IfAssistanceObtainingVABenefits = this.handleValue(values.ifassistanceobtainingvabenefits);
                servicesProvidedSSVFObject.IfAssistanceObtainingOrCoordinatingOtherPublicBenefits = this.handleValue(values.ifassistanceobtainingorcoordinatingotherpublicbenefits);
                servicesProvidedSSVFObject.IfDirectProvisionOfOtherPublicBenefits = this.handleValue(values.ifdirectprovisionofotherpublicbenefits);
                servicesProvidedSSVFObject.IfOtherSupportiveServiceApprovedByVA = values.ifothersupportiveserviceapprovedbyva
                enrollmentRequestObject.services_Provided_SSVF = servicesProvidedSSVFObject;
                var connectionWithSOARObject = {};
                connectionWithSOARObject.ConnectionWithSOAR = this.handleValue(values.connectionwithsoar);
                enrollmentRequestObject.connection_With_SOAR = connectionWithSOARObject;
                var employmentStatusObject = {};
                employmentStatusObject.InformationDate = values['informationdate_ES'] != null ? values['informationdate_ES'].format('YYYY-MM-DD') : null;
                employmentStatusObject.employed = this.handleValue(values.employed)
                employmentStatusObject.employmentstatus = this.handleValue(values.typeofemployment)
                employmentStatusObject.notemployed = this.handleValue(values.whynotemployed)
                enrollmentRequestObject.employment_Status = employmentStatusObject;
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
    onChangeValueHandler = val => {
        console.log("val is " , val.target.value);
        this.setState({ personal: val.target.value, nonCashValue: val.target.nonCashValue });
    };

    render() {
        const { personal, nonCashValue } = this.state;
        const message = "Mandatory field! Please provide a response."
        return (
            <Form {...formItemLayout} name="enrollment"
                  onSubmit={this.handleOnSubmit}>
                <Collapse  style={{backgroundColor: "#f0f9ff"}}>
                    <EnrollmentDetails personalProps={this.props}/>
                    <IncomeAndSource incomeSource={this.props}/>
                    <NonCashBenefits nonCash={this.props}/>
                    <HealthInsurance healthInsurance={this.props}/>
                    <VeteransInformation veteransInformation={this.props}/>
                    <ConnectionWithSOAR connectionWithSOAR={this.props} />
                    <EmploymentStatus employmentStatus={this.props}/>
                    <ServicesProvidedSSVF servicesProvidedSSVF={this.props}/>
                    <Panel style={{backgroundColor: "lightseagreen"}} header="Submit Form Here"
                           key="9">
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

const WrappedReHousingEnrollment = Form.create({name: "enrollment"})(
    RapidReHousingVA
);
export default WrappedReHousingEnrollment;