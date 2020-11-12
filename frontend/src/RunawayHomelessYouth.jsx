import React, {Component} from "react";
import "antd/dist/antd.css";
import {Button, Cascader, Checkbox, Col, Collapse, DatePicker, Form, Input, Row} from "antd";
import './LabelWrap.css';
import EnrollmentDetails from "./EnrollmentDetails";
import IncomeAndSource from "./IncomeAndSource";
import NonCashBenefits from "./NonCashBenefits";
import HealthInsurance from "./HealthInsurance";
import DisablingCondition from "./DisablingCondition";
import FamilyCriticalIssues from "./FamilyCriticalIssues";
import SexualExploitation from "./SexualExploitation";
import LabourExploitation from "./LabourExploitation";
import GeneralHealthStatus from "./GeneralHealthStatus";
import DentalHealthStatus from "./DentalHealthStatus";
import EmploymentStatus from "./EmploymentStatus";
import SchoolStatus from "./SchoolStatus";
import RhyBcpStatus from "./RhyBcpStatus";
import PregnancyStatus from "./PregnancyStatus";
import ProjectCompletionStatus from "./ProjectCompletionStatus";
import SafeandApproximateExit from "./SafeandApproximateExit";
import LastGradeCompleted from "./LastGradeCompleted";
import ReferralSource from "./ReferralSource";
import AfterCarePlans from "./AfterCarePlans";
import FormerChildWelfare from "./FormerChildWelfare";
import SexualOrientation from "./SexualOrientation";
import Counselling from "./Counselling";
import RHYServiceConnections from "./RHYServiceConnections";
import FormerJuvenileJusticeSystem from "./FormerJuvenileJusticeSystem";


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
class RunawayHomelessYouth extends Component {
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
                var familyCriticalIssues = {};
                familyCriticalIssues.unemploymentfamilymember = this.handleValue(values.unemployedFamilyMember);
                familyCriticalIssues.mentalhealthissues = this.handleValue(values.mentalHealthIssues);
                familyCriticalIssues.physicaldisability = this.handleValue(values.physicalDisabilityFamily);
                familyCriticalIssues.alcoholorsubstanceabuse = this.handleValue(values.alcoholOrSubstanceAbuse);
                familyCriticalIssues.insufficientincome = this.handleValue(values.insufficientIncome);
                familyCriticalIssues.parentofyouth = this.handleValue(values.incarceratedParent);
                enrollmentRequestObject.FamilyCriticalIssuesRHY = familyCriticalIssues;
                var sexualExploitation = {};
                sexualExploitation.receivedlastthreemonths = this.handleValue(values.in_last_3_months)
                sexualExploitation.forcedlastthreemonths = this.handleValue(values.in_last_3_months_confirm)
                sexualExploitation.howmanytimes = this.handleValue(values.how_many_times)
                sexualExploitation.forcedanything = this.handleValue(values.persuaded_for_exchange)
                sexualExploitation.receivedanything = this.handleValue(values.received_in_exchange)
                enrollmentRequestObject.SexualExploitationRHY = sexualExploitation;
                var labourExploitation = {};
                labourExploitation.leavejob = this.handleValue(values.afraidToLeaveWork)
                labourExploitation.paymentdifference = this.handleValue(values.paymentNotAsExpected)
                labourExploitation.forcedintojob = this.handleValue(values.feltForceInTheJob)
                labourExploitation.last3months = this.handleValue(values.inLast3Months)
                enrollmentRequestObject.LabourExploitationTraffickingRHY = labourExploitation;
                var generalHealthStatus = {}
                generalHealthStatus.statusmentalhealth = this.handleValue(values.generalHealthStatus);
                enrollmentRequestObject.GeneralHealthStatusRHY = generalHealthStatus;
                var dentalHealthStatus = {}
                dentalHealthStatus.statusdentalhealth = this.handleValue(values.dentalHealthStatus)
                enrollmentRequestObject.DentalHealthStatusRHY = dentalHealthStatus;
                var formerChildWelfare = {}
                formerChildWelfare.formerChildWelfare = this.handleValue(values.formerWardOfChildWelfare);
                formerChildWelfare.noofyears = this.handleValue(values.noOfYears);
                formerChildWelfare.noofmonths = values.noOfMonths ?? 0;
                enrollmentRequestObject.ChildWelfareFosterRHY = formerChildWelfare;
                var employmentStatus = {}
                employmentStatus.InformationDate = values['informationdate_ES'] != null ? values['informationdate_ES'].format('YYYY-MM-DD') : null;
                employmentStatus.employed = this.handleValue(values.employed);
                employmentStatus.employmentstatus = this.handleValue(values.typeofemployment);
                employmentStatus.notemployed = this.handleValue(values.whynotemployed);
                enrollmentRequestObject.employment_Status = employmentStatus;
                var schoolStatusRecords = {}
                schoolStatusRecords.schoolstatusfield = this.handleValue(values.schoolStatus);
                enrollmentRequestObject.SchoolStatusRHY = schoolStatusRecords;
                var rhy_bcp_status = {}
                rhy_bcp_status.dateofstatus = values['information_date_bcp'] != null ? values['information_date_bcp'].format('YYYY-MM-DD') : null;
                rhy_bcp_status.youtheligible = this.handleValue(values.is_youth_eligible);
                rhy_bcp_status.notfundedreason = this.handleValue(values.service_funding_response);
                rhy_bcp_status.runawayyouth = this.handleValue(values.run_away_youth);
                enrollmentRequestObject.RHYBCPStatusRHY = rhy_bcp_status;
                var referralSource = {}
                referralSource.referralsource = this.handleValue(values.referralSource);
                referralSource.nooftimes = values.noOfTimes;
                enrollmentRequestObject.ReferralSourceRHY= referralSource;
                var afterCarePlans = {}
                afterCarePlans.InformationDate = values['informationdateACPlans'] != null ? values['informationdateACPlans'].format('YYYY-MM-DD') : null;
                afterCarePlans.aftercareprovided = this.handleValue(values.afterCareProvided);
                afterCarePlans.primaryway = this.handleValue(values.primaryWay);
                enrollmentRequestObject.AftercarePlansRHY = afterCarePlans;
                var safe_exit_status = {}
                safe_exit_status.destinationsafeclient = this.handleValue(values.exit_status_client);
                safe_exit_status.destinationsafecaseworker = this.handleValue(values.exit_status_caseworker);
                safe_exit_status.positivepeerconnections = this.handleValue(values.positivePeer);
                safe_exit_status.positivecommunityconnections = this.handleValue(values.positiveCommunityConnections);
                safe_exit_status.positiveadultconnections = this.handleValue(values.positiveAdultConnections);
                enrollmentRequestObject.SafeandAppropriateExitRHY = safe_exit_status;
                var sexual_orientation_values = {};
                sexual_orientation_values.sexualorientation = this.handleValue(values.sexual_orientation);
                enrollmentRequestObject.SexualOrientationRHY = sexual_orientation_values;
                var pregnancy_status_values = {}
                pregnancy_status_values.duedate = values["informationdate_PS"] != null ? values["informationdate_PS"].format("YYYY-MM-DD") : null;
                pregnancy_status_values.pregancy_status = this.handleValue(values.pregnancy_status);
                enrollmentRequestObject.PregancyStatusRHY = pregnancy_status_values;
                var project_completion = {}
                project_completion.projectcompletion = this.handleValue(values.project_completion_status);
                project_completion.majorreason = this.handleValue(values.majorReason);
                enrollmentRequestObject.ProjectCompletionStatusRHY = project_completion;
                var last_grade = {}
                last_grade.LastGradeCompleted = this.handleValue(values.last_grade_completed);
                enrollmentRequestObject.last_Grade_Completed = last_grade;
                var counselling_values = {};
                counselling_values.receivedbyclient = this.handleValue(values.counsellingReceivedResponse);
                counselling_values.typeofCounseling = this.handleValue(values.typeOfCounselling);
                counselling_values.noofsessions = values.noOfSessionsByExit;
                counselling_values.noofsessionsplanned = values.noOfSessions;
                counselling_values.continuecounseling = this.handleValue(values.planAfterExit);
                enrollmentRequestObject.CounselingRHY = values.counselling_values;
                var rhyServiceConnections = {};
                rhyServiceConnections.InformationDate = values["dateOfRHYService"] != null ? values["dateOfRHYService"].format("YYYY-MM-DD") : null;
                rhyServiceConnections.connectionsrhy = this.handleValue(values.typeOfRHYService);
                enrollmentRequestObject.RHYConnectionsRHY = values.rhyServiceConnections;
                var formerJJS = {};
                formerJJS.formerjuvenilejustice = this.handleValue(values.formerJJS);
                formerJJS.noofyears = this.handleValue(values.noOfYearsJJS);
                formerJJS.noofmonths = values.noOfMonthsJJS;
                enrollmentRequestObject.JuvenileJusticeSystemRHY = formerJJS;

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
        const message = "Mandatory field! Please provide a response.";
        return (
            <Form {...formItemLayout} name="enrollment"
                  onSubmit={this.handleOnSubmit}>
                    <Collapse style={{backgroundColor: "#f0f9ff"}}>
                    <EnrollmentDetails personalProps={this.props}/>
                    <IncomeAndSource incomeSource={this.props}/>
                    <NonCashBenefits nonCash={this.props}/>
                    <HealthInsurance healthInsurance={this.props}/>
                    <DisablingCondition disablingCondition={this.props}/>
                    <FamilyCriticalIssues familyCriticalIssues={this.props}/>
                    <RHYServiceConnections rhyServiceConnections={this.props} />
                    <SexualExploitation sexualExploitation={this.props}/>
                    <LabourExploitation labourExploitation={this.props}/>
                    <GeneralHealthStatus generalHealthStatus={this.props}/>
                    <DentalHealthStatus dentalHealthStatus={this.props}/>
                    <FormerChildWelfare formerChildWelfare={this.props}/>
                    <FormerJuvenileJusticeSystem formerJuvenileJusticeSystem={this.props}/>
                    <EmploymentStatus employmentStatus={this.props}/>
                    <SchoolStatus schoolStatus={this.props}/>
                    <RhyBcpStatus rhy_bcp_status ={this.props}/>
                    <SexualOrientation sexualOrientation={this.props}/>
                    <ReferralSource referralSource={this.props}/>
                    <AfterCarePlans afterCarePlans={this.props}/>
                    <ProjectCompletionStatus project_completion ={this.props}/>
                    <Counselling counselling={this.props}/>
                    <SafeandApproximateExit safeexit ={this.props}/>
                    <LastGradeCompleted lastgradecompleted ={this.props}/>
                    <PregnancyStatus pregnancy ={this.props}/>


                    <Panel style={{backgroundColor: "lightseagreen"}} header="Submit Form Here"
                           key="20">
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

const WrappedRHYEnrollment = Form.create({name: "enrollment"})(
    RunawayHomelessYouth
);
export default WrappedRHYEnrollment;
