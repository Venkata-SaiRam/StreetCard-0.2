"""
This is for object information generating database table
@author:Shivam/Naren/Aditya/Prashana/Akash
"""
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class ResponseCategory(models.IntegerChoices):
    """
    This class is for different response type of client information
    """
    NO = 0, _('No')
    YES = 1, _('Yes')
    CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
    CLIENT_REFUSED = 9, _('Client Refused')
    DATA_NOT_COLLECTED = 99, _('Data Not Collected')


class YesNoResponse(models.IntegerChoices):
    """
    This class is for positive or negetive response type
    """
    NO = 0, _('No')
    YES = 1, _('Yes')

class NoofTimesResponse(models.IntegerChoices):
    """
    This class is for select no of times
    """
    onetothreetimes = 1, _('1-3')
    fourtoseventimes = 2, _('4-7')
    eighttoeleventimes = 3, _('8-11')
    twelveormore = 4, _('12 or more')
    clientdoesnotknow = 8, _('Client Doesn\'t Know')
    clientrefused = 9, _('Client Refused')
    datanotcollected = 99, _('Data not collected')




class Homeless(models.Model):
    """
    This class is for homeless person information
    """
    class NameDataQuality(models.IntegerChoices):
        """
        This class is for data gathered quality for homeless person name
        """
        FULL_NAME_REPORTED = 1, _('Full Name Reported')
        PARTIAL_NAME_REPORTED = 2, _('Partial Name Reported')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class SSNDataQuality(models.IntegerChoices):
        """
        This class is for data gathered quality for homeless person SSN
        """
        FULL_SSN_REPORTED = 1, _('Full SSN Reported')
        PARTIAL_SSN_REPORTED = 2, _('Partial SSN Reported')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class DOBDataQuality(models.IntegerChoices):
        """
        This class is for data gathered quality for date of birth of homeless person
        """
        FULL_DOB_REPORTED = 1, _('Full DOB Reported')
        PARTIAL_DOB_REPORTED = 2, _('Partial DOB Reported')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class Race(models.IntegerChoices):
        """
        This class is for homeless person race information
        """
        AMERICAN_INDIAN_OR_ALASKAN_NATIVE = 1, _('American Indian or Alaskan Native')
        ASIAN = 2, _('Asian')
        BLACK_OR_AFRICAN_AMERICAN = 3, _('Black or African American')
        NATIVE_HAWAIIAN_OR_PACIFIC_ISLANDER = 4, _('Native Hawaiian or Pacific Islander')
        WHITE = 5, _('White')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class Ethnicity(models.IntegerChoices):
        """
        This class is for homeless person ethnicity information
        """
        NON_HISPANIC_NON_LATINO = 0, _('Non Hispanic/Non Latino')
        HISPANIC_LATINO = 1, _('Hispanic/Latino')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class Gender(models.IntegerChoices):
        """
        This class is for homeless person gender information
        """
        FEMALE = 0, _('Female')
        MALE = 1, _('Male')
        TRANS_FEMALE = 3, _('Trans Female')
        TRANS_MALE = 4, _('Trans Male')
        GENDER_NON_CONFORMING = 5, _('Gender Non-Conforming')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class VeteranStatus(models.IntegerChoices):
        """
        This class is for homeless person veteran status information
        """
        NO = 0, _('No')
        YES = 1, _('Yes')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    PersonalId = models.CharField(max_length=32, primary_key=True, default=None)
    FirstName = models.CharField(max_length=128, blank=True, null=True)
    MiddleName = models.CharField(max_length=128, blank=True, null=True)
    LastName = models.CharField(max_length=128, blank=True, null=True)
    NameSuffix = models.CharField(max_length=128, blank=True, null=True)
    NameDataQuality = models.IntegerField(choices=NameDataQuality.choices)
    # TODO
    # Update with proper regex to validate SSN
    # Convert to CharField because this would also contain '-' (hyphens)
    SSN = models.CharField(max_length=11, blank=True, null=True)
    SSNDataQuality = models.IntegerField(choices=SSNDataQuality.choices)
    DOB = models.DateField(blank=True, null=True)
    DOBDataQuality = models.IntegerField(choices=DOBDataQuality.choices)
    Race = models.IntegerField(choices=Race.choices)
    Ethnicity = models.IntegerField(choices=Ethnicity.choices)
    Gender = models.IntegerField(choices=Gender.choices)
    VeteranStatus = models.IntegerField(choices=VeteranStatus.choices)
    PhoneNumberPrefix = models.CharField(max_length=3, blank=True, null=True)
    PhoneNumber = models.CharField(max_length=128, blank=True, null=True)
    Email = models.EmailField(max_length=70, blank=True, null=True)

    def __str__(self):
        return self.FirstName

class ServiceProvider(models.TextChoices):
    """
    This class is for service provider information
    """
    FOOD_PANTRY = "FP", _("Food Pantry")
    DROP_IN_CENTRE = "DIC", _("Drop-in Centre")
    SHELTER_HOMES = "SH", _("Shelter Home")
    SOUP_KITCHEN = "SK", _("Soup Kitchen")
    NOT_AVAILABLE = "NA", _("Not Available")
    OTHERS = "OTH", _("Others")


# Inventory Tables:

class Product(models.Model):
    """
    This class is for available product information
    """
    class Category(models.TextChoices):
        """
        This class is for available product category information
        """
        Shoes = "Shoes", _("Shoes")
        Clothing = "Clothing", _("Clothing")
        MealPass = "MealPass", _("Meal Pass")
        TransportPass = "TransportPass", _("Transport Pass")
        PetFoods = "PetFood", _("Pet Food")
        PersonalHygieneItems = "PersonalHygieneItems", _("Personal Hygiene Items")
        RainGear = "RainGear", _("Rain Gear")
        Medications = "Medications", _("Medications")
        Boots = "Boots", _("Boots")
        Blankets = "Blankets", _("Blankets")
        SleepingBags = "SleepingBags", _("Sleeping Bags")


    productName = models.CharField(max_length=100)
    productId = models.CharField(primary_key=True, default=None, max_length=32, blank=True)
    costPerItem = models.FloatField(blank=True, null=True)
    unitsAvailable = models.IntegerField(null=True)
    serviceProvider = models.TextField(choices=ServiceProvider.choices)
    category = models.TextField(choices=Category.choices, default=None, null=False)
    donation = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    costwhenbrought = models.IntegerField(blank=True, null=True)
    Donationreceivedfrom =models.TextField(blank=True, null=True)

    def __str__(self):
        return self.productName

class Transactions(models.Model):
    """
    This class is for inventory transaction type
    """
    transactionId = models.CharField(primary_key=True, default=None, max_length=32)
    personalId = models.ForeignKey(Homeless, on_delete=models.CASCADE)
    totalAmount = models.DecimalField(default=0.0, decimal_places=2, max_digits=8)


class TransactionDetails(models.Model):
    """
    This class is for inventory transaction details
    """
    transactionDetailId = models.CharField(primary_key=True, default=None, max_length=32)
    transactionId = models.ForeignKey(Transactions, on_delete=models.CASCADE, default=None)
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)
    unitPurchased = models.IntegerField(null=True)

# Log table, used to display information on Case Worker page
# Log should be recorded whenever greeter swipes card
# Log should also be recorded whenever caseworker swipes card.
# Greeter should retrieve model based on the worker's info.
# datetime field can be retrieved relative to timezone and converted later.

class Log(models.Model):
    """
    This class is for client logs maintaining client transactions
    """
    datetime = models.DateTimeField(auto_now=False, auto_now_add=False, default=timezone.now)
    personalId = models.ForeignKey(Homeless, on_delete=models.CASCADE, default=None, related_name='Log_PersonalId')
    serviceProvider = models.TextField(choices=ServiceProvider.choices)
    clientName = models.CharField(max_length=500, blank=True, default="")
    totalAmount = models.IntegerField(null=True)
    unitPurchased = models.IntegerField(null=True)


class UserNameAndIdMapping(models.Model):
    """
    This class is for mapping user name to database identification number
    """
    user_name = models.CharField(max_length=32, primary_key=True, unique=True)
    user_id = models.IntegerField(null=True)


class Appointments(models.Model):
    """
    This class is for client appointment details
    """
    personalId = models.ForeignKey(Homeless, on_delete=models.CASCADE)
    appointmentId = models.CharField(primary_key=True, default=None, max_length=32)
    office = models.CharField(max_length=500, blank=True, null=False)
    streetAddress1 = models.CharField(max_length=500, blank=True, null=False)
    streetAddress2 = models.CharField(max_length=500, blank=True, null=True)
    city = models.CharField(max_length=500, blank=True, null=False)
    zipCode = models.CharField(max_length=500, blank=True, null=False)
    state = models.CharField(max_length=500, blank=True, null=False)
    Time = models.TimeField(auto_now=False, auto_now_add=False)
    Date = models.DateField(auto_now=False, auto_now_add=False)
    serviceProvider = models.TextField(choices=ServiceProvider.choices)
    alert = models.BooleanField(default=False, null=True)
    Email = models.EmailField(max_length=70, blank=True, null=True)
    TimeZone = models.CharField(max_length=200, blank=True, null=True)
    # is the way to determine what task id is being used, only > -1 if alert == True
    AlertTaskID = models.CharField(max_length=36, default="", blank=True, null=True)


class SocialWorker(models.Model):
    """
    This class is for social worker information
    """
    class ClearanceLevel(models.TextChoices):
        """
        This class is for social worker clearance level
        """
        GREETER = "greeter", _("Greeter")
        CASEWORKER = "caseworker", _("CaseWorker")
        SERVICE_PROVIDER_EMPLOYEE = "service_provider", _("Service Provider Employee")
        CLIENT = "client", _("Client")
        ADMIN = "admin", _("Admin")

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phonenumber = models.CharField(max_length=15)
    clearanceLevel = models.TextField(choices=ClearanceLevel.choices)
    address = models.CharField(max_length=500)
    serviceProvider = models.TextField(choices=ServiceProvider.choices)


class ProjectCategory(models.TextChoices):
    """
    This class is for HUD COC project categories
    """
    HUD_COC_HOMELESS_PREVENTION = 'HUD:CoC-HomelessPrevention', _('HUD:CoC-HomelessPrevention')
    HUD_COC_PERMANENT_SUPPORTIVE_HOUSING = 'HUD:COC-Permanent Supportive Housing', _(
        'HUD:COC-Permanent Supportive Housing')
    HUD_COC_RAPID_RE_HOUSING = 'HUD:COC-Rapid Re-Housing', _('HUD:COC-Rapid Re-Housing')
    HUD_COC_SUPPORTIVE_SERVICES_ONLY = 'HUD:CoC - Supportive Services Only', _('HUD:CoC - Supportive Services Only')
    HUD_COC_SSO_COORDINATED_ENTRY = 'HUD:CoC - SSO Coordinated Entry', _('HUD:CoC - SSO Coordinated Entry')
    HUD_COC_TRADITIONAL_HOUSING = 'HUD:CoC - Traditional Housing', _('HUD:CoC - Traditional Housing')
    HUD_COC_SAFE_HAVEN = 'HUD:CoC - Safe Haven', _('HUD:CoC - Safe Haven')
    HUD_COC_SINGLE_ROOM_OCCUPANCY = 'HUD:CoC - Single Room Occupancy', _('HUD:CoC - Single Room Occupancy')
    HUD_COC_YOUTH_HOMELESS_DEMONSTRATION_PROGRAM = 'HUD:CoC - Youth Homeless Demonstration Program', _(
        'HUD:CoC - Youth Homeless Demonstration Program')
    HUD_COC_JOINT_COMPONENT_TH_RRH = 'HUD:CoC - Joint Component TH/RRH', _('HUD:CoC - Joint Component TH/RRH')
    HUD_HOPWA_HOTEL_MOTEL_VOUCHERS = 'HUD:HOPWA – Hotel/Motel Vouchers', _('HUD:HOPWA – Hotel/Motel Vouchers')
    HUD_HOPWA_HOUSING_INFORMATION = 'HUD:HOPWA – Housing Information', _('HUD:HOPWA – Housing Information')
    HUD_HOPWA_PERMANENT_HOUSING = 'HUD:HOPWA – Permanent Housing (facility based or TBRA)', _(
        'HUD:HOPWA – Permanent Housing (facility based or TBRA)')
    HUD_HOPWA_PERMANENT_HOUSING_PLACEMENT = 'HUD:HOPWA – Permanent Housing Placement', _(
        'HUD:HOPWA – Permanent Housing Placement')
    HUD_HOPWA_SHORT_TERM_RENT_MORTGAGE_UTILITY_ASSISTANCE = 'HUD:HOPWA – Short-Term Rent, Mortgage, Utility assistance', _(
        'HUD:HOPWA – Short-Term Rent, Mortgage, Utility assistance')
    HUD_HOPWA_SHORT_TERM_SUPPORTIVE_FACILITY = 'HUD:HOPWA – Short-Term Supportive Facility', _(
        'HUD:HOPWA – Short-Term Supportive Facility')
    HUD_HOPWA_TransitionalHousing = 'HUD:HOPWA – Transitional Housing', _('HUD:HOPWA – Transitional Housing')
    VA_HCHVCRS_EH = 'VA: HCHV CRS - EH', _('VA: HCHV CRS - EH')
    VA_HCHV_LOW_DEMAND_SAFE_HAVEN = 'VA: HCHV - Low Demand Safe Haven', ('VA: HCHV - Low Demand Safe Haven')
    VA_GRANT_PER_DIEM_BRIDGE_HOUSING = 'VA:Grant Per Diem – Bridge Housing', ('VA:Grant Per Diem – Bridge Housing')
    VA_GRANT_PER_DIEM_LOW_DEMAND = 'VA:Grant Per Diem – Low Demand', _('VA:Grant Per Diem – Low Demand')
    VA_GRANT_PER_DIEM_HOSPITAL_TO_HOUSING = 'VA:Grant Per Diem – Hospital to Housing', _(
        'VA:Grant Per Diem – Hospital to Housing')
    VA_GRANT_PER_DIEM_CLINICAL_TREATMENT = 'VA:Grant Per Diem – Clinical Treatment', _(
        'VA:Grant Per Diem – Clinical Treatment')
    VA_GRANT_PER_DIEM_SERVICE_INTENSIVE_TRANSITIONAL_HOUSING = 'VA:Grant Per Diem – Service Intensive Transitional Housing', _(
        'VA:Grant Per Diem – Service Intensive Transitional Housing')
    VA_GRANT_PER_DIEM_TRANSITION_IN_PLACE = 'VA:Grant Per Diem – Transition in Place', _(
        'VA:Grant Per Diem – Transition in Place')
    VA_GRANT_PER_DIEM_CASE_MANAGEMENT_OR_HOUSING_RETENTION = 'VA:Grant Per Diem – Case Management / Housing Retention', _(
        'VA:Grant Per Diem – Case Management / Housing Retention')
    VA_SSVF_HOMELESSNESS_PREVENTION = 'VA: SSVF - Homelessness Prevention', _('VA: SSVF - Homelessness Prevention')
    VA_SSVF_RAPID_RE_HOUSING = 'VA: SSVF - Rapid Re-Housing', _('VA: SSVF - Rapid Re-Housing')
    HOPWA_AIDS_Housing = 'HOPWA:Housing for people with AIDS', _('HOPWA:Housing for people with AIDS')
    RHY_Runaway_Homeless_Youth = 'RHY:Runaway and Homeless Youth', _('RHY:Runaway and Homeless Youth')
    PATH_Projects_for_Assistance = 'PATH:Projects for Assistance in Transition from Homelessness', _('PATH:Projects for Assistance in Transition from Homelessness')
    ESG_Emergency_Solutions_Grants = 'ESG:Emergency Solutions Grants', _('ESG:Emergency Solutions Grants')


class SubstanceAbuseCategory(models.IntegerChoices):
    """
    This class is for substance abuse category
    """
    NO = 0, _('No')
    ALCOHOL = 1, _('Alcohol')
    DRUG = 2, _('Drug')
    BOTH = 3, _('Both Drug and Alcohol')
    CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
    CLIENT_REFUSED = 9, _('Client Refused')
    DATA_NOT_COLLECTED = 99, _('Data Not Collected')


class DomesticViolenceOccurrence(models.IntegerChoices):
    """
    This class is for domestic violence occurrence duration options
    """
    PAST_THREE_MONTHS = 1, _('Past 3 Months')
    THREE_TO_SIX_MONTHS = 2, _('Three to six months ago')
    SIX_MONTHS_TO_ONE_YEAR = 3, _('Six Months to One year')
    ONE_YEAR_OR_MORE = 4, _('One year or more')
    CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
    CLIENT_REFUSED = 9, _('Client Refused')
    DATA_NOT_COLLECTED = 99, _('Data Not Collected')


class Enrollment(models.Model):
    """
    This class is for enrollment information
    """
    DisablingCondition = models.IntegerField(choices=YesNoResponse.choices, default=YesNoResponse.NO)
    EnrollmentID = models.CharField(max_length=32, primary_key=True, default=None)
    PersonalId = models.ForeignKey(Homeless, on_delete=models.CASCADE, default=None,
                                   related_name='Enrollment_PersonalId')
    ProjectCategory = models.TextField(choices=ProjectCategory.choices, default=None, null=True)
    EntryDate = models.DateField(null=True)
    ExitDate = models.DateField(null=True)


class HealthInsurance(models.Model):
    """
    This class is for health insurance information
    """
    class InsuranceReasonCategory(models.IntegerChoices):
        APPLIED_DECISION_PENDING = 1, _('Applied;decision pending')
        APPLIED_CLIENT_NOT_ELIGIBLE = 2, _('Applied;client not eligible')
        CLIENT_DIDNOT_APPLY = 3, _('Client did not apply')
        INSURANCE_TYPE_NA_FOR_THIS_CLIENT = 4, _('Insurance type N/A for this client')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name='HealthInsurance_EnrollmentID', default=None)
    InformationDate = models.DateField()
    CoveredByHealthInsurance = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    Medicaid = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    Medicare = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    SCHIP = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    VAMedicalServices = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    EmployerProvided = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    COBRA = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    PrivatePay = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    StateHealthInsuranceForAdults = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    IndianHealthServices = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    OtherInsurance = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    SpecifySource = models.CharField(max_length=50,blank=True, null=True)
    Reason = models.TextField(choices=InsuranceReasonCategory.choices,blank=True, null=True)


class NonCashBenefits(models.Model):
    """
    This class is for non cash benefits information
    """
    InformationDate = models.DateField()
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name='NonCashBenefits_EnrollmentID',
                                     default=None)
    BenefitsFromAnySource = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    SNAP = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    WIC = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    TANFChildCare = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    TANFTransportation = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    OtherTANF = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    OtherSource = models.IntegerField(choices=YesNoResponse.choices,blank=True, null=True)
    SpecifySource = models.CharField(max_length=50,blank=True, null=True)
    #RentalAssistanceOngoing = models.IntegerField(null=True)
    #RentalAssistanceTemp = models.IntegerField(null=True)
    #DataCollectionStage = models.IntegerField(null=True)


class DomesticViolence(models.Model):
    """
    This class is for domestic violence victim information
    """
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='DomesticViolence_EnrollmentID',default=None)
    InformationDate = models.DateField()
    DomesticViolenceVictim = models.IntegerField(choices=YesNoResponse.choices)
    WhenOccurred = models.IntegerField(choices=DomesticViolenceOccurrence.choices,blank=True, null=True)
    CurrentlyFleeing = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)


class DisablingCondition(models.Model):
    """
    This class is for client disability condition
    """
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='DisablingCondition_EnrollmentID',default=None)
    InformationDate = models.DateField()
    developmental_disability = models.IntegerField(choices=ResponseCategory.choices, null=True, default=None)
    developmental_disability_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True,
                                                             default=None)
    hiv_aids = models.IntegerField(choices=ResponseCategory.choices, null=True, default=None,blank=True)
    hiv_aids_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True, default=None)
    mental_health = models.IntegerField(choices=ResponseCategory.choices, null=True, default=None,blank=True)
    mental_health_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True, default=None)
    substance_abuse = models.IntegerField(choices=SubstanceAbuseCategory.choices, null=True, default=None,blank=True)
    substance_abuse_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True,
                                                    default=None)
    physical_disability = models.IntegerField(choices=ResponseCategory.choices, null=True, default=None)
    physical_disability_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True,
                                                        default=None)
    chronic_health = models.IntegerField(choices=ResponseCategory.choices, null=True, default=None,blank=True)
    chronic_health_impairing = models.IntegerField(choices=ResponseCategory.choices, blank=True, null=True,
                                                   default=None)


class IncomeAndSources(models.Model):
    """
    This class is for domestic violence occurrence duration options
    """
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name='IncomeAndSources_EnrollmentID',
                                     default=None)
    InformationDate = models.DateField()
    IncomeFromAnySources = models.IntegerField(choices=ResponseCategory.choices)
    Earned = models.IntegerField(choices=YesNoResponse.choices, default=0)
    EarnedIncome = models.IntegerField(default=0)
    Unemployment = models.IntegerField(choices=YesNoResponse.choices, default=0)
    UnemploymentAmount = models.IntegerField(null=True,blank=True)
    SSI = models.IntegerField(choices=YesNoResponse.choices)
    SSIAmount = models.IntegerField(null=True,blank=True)
    SSDI = models.IntegerField(choices=YesNoResponse.choices)
    SSDIAmount = models.IntegerField(null=True,blank=True)
    VADisabilityService = models.IntegerField(choices=YesNoResponse.choices)
    VADisabilityServiceAmount = models.IntegerField(null=True,blank=True)
    VADisabilityNonService = models.IntegerField(choices=YesNoResponse.choices)
    VADisabilityNonServiceNonAmount = models.IntegerField(null=True,blank=True)
    PrivateDisability = models.IntegerField(choices=YesNoResponse.choices)
    PrivateDisabilityAmount = models.IntegerField(null=True,blank=True)
    WorkersComp = models.IntegerField(choices=YesNoResponse.choices)
    WorkersCompAmount = models.IntegerField(null=True,blank=True)
    TANF = models.IntegerField(choices=YesNoResponse.choices)
    TANFAmount = models.IntegerField(null=True,blank=True)
    GA = models.IntegerField(choices=YesNoResponse.choices)
    GAAmount = models.IntegerField(null=True,blank=True)
    SocSecRetirement = models.IntegerField(choices=YesNoResponse.choices)
    SocSecRetirementAmount = models.IntegerField(null=True,blank=True)
    Pension = models.IntegerField(choices=YesNoResponse.choices)
    PensionAmount = models.IntegerField(null=True,blank=True)
    ChildSupport = models.IntegerField(choices=YesNoResponse.choices)
    ChildSupportAmount = models.IntegerField(null=True,blank=True)
    Alimony = models.IntegerField(choices=YesNoResponse.choices)
    AlimonyAmount = models.IntegerField(null=True,blank=True)
    OtherIncomeSources = models.IntegerField(choices=YesNoResponse.choices)
    OtherIncomeSourcesAmount = models.IntegerField(null=True,blank=True)
    OtherIncomeSourcesIdentify = models.TextField(max_length=50, blank=True, null=True)
    #TotalMonthlyIncome = models.IntegerField(default=0)

# VETERAN PROJECT MODELS

class VeteranInformation(models.Model):
    """
    This class is for veteran project information
    """
    class MilitaryBranchCategory(models.IntegerChoices):
        """
        This class is for veteran military branch information
        """
        ARMY = 1, _('Army')
        AIRFORCE = 2, _('Air Force')
        NAVY = 3, _('Navy')
        MARINES = 4, _('Marines')
        COASTGUARD = 6, _('Coast Guard')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class DischargeStatusCategory(models.IntegerChoices):
        """
        This class is for veteran discharge icategory nformation
        """
        HONORABLE = 1, _('Honorable')
        GENERAL_UNDER_HONORABLE_CONDITIONS = 2, _('General under honorable conditions')
        UNDER_OTHER_THAN_HONORABLE_CONDITIONS = 6, _('Under other than honorable conditions (OTH)')
        BAD_CONDUCT = 4, _('Bad conduct')
        DISHONORABLE = 5, _('Dishonorable')
        UNCHARACTERIZED = 7, _('Uncharacterized')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='VeteranInformation_EnrollmentID', default=None)
    YearEnteredMilitaryService = models.PositiveIntegerField()
    YearSeparatedFromMilitaryService = models.PositiveIntegerField()
    TheatreOfOperations_WorldWar2 = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_KoreanWar = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_VietnamWar = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_PersianGulfWar = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_Afghanistan = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_Iraq_IraqiFreedom = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_Iraq_NewDawn = models.IntegerField(choices=ResponseCategory.choices,blank=True, null=True)
    TheatreOfOperations_OtherPeacekeepingOperations = models.IntegerField(
        choices=ResponseCategory.choices,blank=True, null=True)
    BranchOfMilitary = models.IntegerField(choices=MilitaryBranchCategory.choices,blank=True, null=True)
    DischargeStatus = models.IntegerField(choices=DischargeStatusCategory.choices,blank=True, null=True)


class ServicesProvidedSSVF(models.Model):
    """
    This class is for service provider SSVF information
    """
    class TypeOfServiceCategory(models.IntegerChoices):
        """
        This class is for service category
        """
        OUTREACH_SERVICES = 1, _('Outreach services')
        CASE_MANAGEMENT_SERVICES = 2, _('Case management services')
        ASSISTANCE_OBTAINING_VA_BENEFITS = 3, _('Assistance obtaining VA benefits')
        ASSISTANCE_OBTAINING_OR_COORDINATING_OTHER_PUBLIC_BENEFITS = 4, _(
            'Assistance obtaining/coordinating other public benefits')
        DIRECT_PROVISION_OF_OTHER_PUBLIC_BENEFITS = 5, _('Direct provision of other public benefits')
        OTHER_SUPPORTIVE_SERVICE_APPROVED_BY_VA = 6, _('Other (non TFA)supportive service approved by VA')
        EXTENDED_SHALLOW_SUBSIDY = 7, _('Extended Shallow Subsidy')
        RETURNING_HOME = 8, _('Returning Home')
        RAPID_RESOLUTION = 9, _('Rapid Resolution')

    class IfAssistanceObtainingVABenefitsCategory(models.IntegerChoices):
        """
        this class is for VA benefits category information
        """
        VA_VOCATIONAL_AND_REHABILITATION_COUNSELING = 1, _('VA vocational and rehabilitation counseling')
        EMPLOYMENT_AND_TRAINING_SERVICES = 2, _('Employment and training services')
        EDUCATIONAL_ASSISTANCE = 3, _('Educational assistance')
        HEALTH_CARE_SERVICES = 4, _('Health care services')

    class IfAssistanceObtainingOrCoordinatingOtherPublicBenefitsCategory(models.IntegerChoices):
        """
        this class is for public benefits category information
        """
        HEALTH_CARE_SERVICES = 1, _('Health care services')
        DAILY_LIVING_SERVICES = 2, _('Daily living services')
        PERSONAL_FINANCIAL_PLANNING_SERVICES = 3, _('Personal financial planning services')
        TRANSPORTATION_SERVICES = 4, _('Transportation services')
        INCOME_SUPPORT_SERVICES = 5, _('Income support services')
        FIDUCIARY_AND_REPRESENTATIVE_PAYEE_SERVICES = 6, _('Fiduciary and representative payee services')
        LEGAL_SERVICES_CHILD_SUPPORT = 7, _('Legal services - child support')
        LEGAL_SERVICES_EVICTION_PREVENTION = 8, _('Legal services - eviction prevention')
        LEGAL_SERVICES_OUTSTANDING_FINES_AND_PENALTIES = 9, _('Legal services - outstanding fines and penalties')
        LEGAL_SERVICES_RESTORE_OR_ACQUIRE_DRIVERS_LICENSE = 10, _('Legal services - restore/acquire drivers license')
        LEGAL_SERVICES_OTHER = 11, _('Legal services - other')
        CHILD_CARE = 12, _('Child care')
        HOUSING_COUNSELING = 13, _('Housing counseling')

    class IfDirectProvisionOfOtherPublicBenefitsCategory(models.IntegerChoices):
        """
        this class is for public benefits category information
        """
        PERSONAL_FINANCIAL_PLANNING_SERVICES = 1, _('Personal financial planning services')
        TRANSPORTATION_SERVICES = 2, _('Transportation services')
        INCOME_SUPPORT_SERVICES = 3, _('Income support services')
        FIDUCIARY_AND_REPRESENTATIVE_PAYEE_SERVICES = 4, _('Fiduciary and representative payee services')
        LEGAL_SERVICES_CHILD_SUPPORT = 5, _('Legal services - child support')
        LEGAL_SERVICES_EVICTION_PREVENTION = 6, _('Legal services - eviction prevention')
        LEGAL_SERVICES_OUTSTANDING_FINES_AND_PENALTIES = 7, _('Legal services - outstanding fines and penalties')
        LEGAL_SERVICES_RESTORE_OR_ACQUIRE_DRIVERS_LICENSE = 8, _('Legal services - restore/acquire drivers license')
        LEGAL_SERVICES_OTHER = 9, _('Legal services - other')
        CHILD_CARE = 10, _('Child care')
        HOUSING_COUNSELING = 11, _('Housing counseling')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='ServicesProvidedSSVF_EnrollmentID', default=None)
    DateOfService = models.DateField(blank=True, null=True)
    TypeOfService = models.IntegerField(choices=TypeOfServiceCategory.choices,blank=True, null=True)
    IfAssistanceObtainingVABenefits = models.IntegerField(choices=IfAssistanceObtainingVABenefitsCategory.choices,blank=True, null=True)
    IfAssistanceObtainingOrCoordinatingOtherPublicBenefits = models.IntegerField(
        choices=IfAssistanceObtainingOrCoordinatingOtherPublicBenefitsCategory.choices,blank=True, null=True)
    IfDirectProvisionOfOtherPublicBenefits = models.IntegerField(
        choices=IfDirectProvisionOfOtherPublicBenefitsCategory.choices,blank=True, null=True)
    IfOtherSupportiveServiceApprovedByVA = models.TextField(blank=True, null=True)


class FinancialAssistanceSSVF(models.Model):
    """
    this class is for financial assistance SSVF information
    """
    class FinancialAssistanceTypeCategory(models.IntegerChoices):
        """
        This class is for financial assistance SSVF category type
        """
        RENTAL_ASSISTANCE = 1, _('Rental assistance')
        SECURITY_DEPOSITS = 2, _('Security deposit')
        UTILITY_DEPOSITS = 3, _('Utility deposit')
        UTILITY_FEE_PAYMENT_ASSISTANCE = 4, _('Utility fee payment assistance')
        MOVING_COSTS = 5, _('Moving costs')
        TRANSPORTATION_SERVICES_TOKEN_OR_VOUCHERS = 8, _('Transportation services: token/vouchers')
        TRANSPORTATION_SERVICES_VEHICLE_REPAIR_OR_MAINTENANCE = 9, _(
            'Transportation services: vehicle repair/maintenance')
        CHILD_CARE = 10, _('Child care')
        GENERAL_HOUSING_STABILITY_ASSISTANCE_EMERGENCY_SUPPLIES = 11, _(
            'General housing stability assistance - emergency supplies')
        GENERAL_HOUSING_STABILITY_ASSISTANCE_OTHER = 12, _('General housing stability assistance - other')
        EMERGENCY_HOUSING_ASSISTANCE = 14, _('Emergency housing assistance')
        EXTENDED_SHALLOW_SUBSIDY_RENTAL_ASSISTANCE = 15, _('Extended Shallow Subsidy - Rental Assistance')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='FinancialAssistanceSSVF_EnrollmentID', default=None)
    DateOfFinancialAssistance = models.DateField()
    FinancialAssistanceAmount = models.DecimalField(max_digits=8, decimal_places=2,blank=True, null=True)
    FinancialAssistanceType = models.IntegerField(choices=FinancialAssistanceTypeCategory.choices,blank=True, null=True)


class PercentOfAMI(models.Model):
    """
    This class is for amount income percentage
    """
    class HouseholdIncomeAsAPercentageOfAMICategory(models.IntegerChoices):
        """
        This class is for household amount income percentage
        """
        LESS_THAN_THIRTY_PERCENTAGE = 1, _('Less than 30%')
        THIRTY_PERCENTAGE_TO_FIFTY_PERCENTAGE = 2, _('30% to 50%')
        GREATER_THAN_FIFTY_PERCENTAGE = 3, _('Greater than 50%')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='PercentOfAMI_EnrollmentID', default=None)
    HouseholdIncomeAsAPercentageOfAMI = models.IntegerField(choices=HouseholdIncomeAsAPercentageOfAMICategory.choices)


class LastPermanentAddress(models.Model):
    """
    This class is for last permanent address information
    """
    class AddressDataQualityCategory(models.IntegerChoices):
        """
        This class is for address data quality category
        """
        FULL_ADDRESS_REPORTED = 1, _('Full address reported')
        INCOMPLETE_OR_ESTIMATED_ADDRESS_REPORTED = 2, _('Incomplete or estimated address reported')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='LastPermanentAddress_EnrollmentID', default=None)
    StreetAddress = models.TextField(blank=True, null=True)
    City = models.TextField(blank=True, null=True)
    State = models.TextField(blank=True, null=True)
    ZipCode = models.TextField(blank=True, null=True)
    AddressDataQuality = models.IntegerField(choices=AddressDataQualityCategory.choices,blank=True, null=True)


# class VAMCStationNumber(models.Model):

class SSVFHPTargetingCriteria(models.Model):
    """
    This class is for SSVFHPT criteria
    """
    class CurrentHousingLossExpectedWithinCategory(models.IntegerChoices):
        """
        This class is for housing loss days information
        """
        ZERO_TO_SIX_DAYS = 0, _('0-6 days')
        SEVEN_TO_THIRTEEN_DAYS = 1, _('7-13 days')
        FOURTEEN_TO_TWENTYONE_DAYS = 2, _('14-21 days')
        MORE_THAN_TWENTYONE_DAYS = 3, _('More than 21 days (0 points)')

    class AnnualHouseholdGrossIncomeAmountCategory(models.IntegerChoices):
        """
        This class is for annual household gross income amount category information
        """
        ZERO_TO_FOURTEEN_PERC_OF_AREA_MEDIAN_INCOME = 0, _('0-14% of Area Median Income (AMI) for household size')
        FIFTEEN_TO_THIRTY_PERC_OF_AMI = 1, _('15-30% of AMI for household size')
        MORE_THAN_THIRTY_PERC_OF_AMI = 2, _('More than 30% of AMI for household size (0 points)')

    class RentalEvictionsWithinThePastSevenYearsCategory(models.IntegerChoices):
        """
        This class is for rental evictions with in the past seven years category information
        """
        FOUR_OR_MORE_PRIOR_RENTAL_EVICTIONS = 0, _('4 or more prior rental evictions')
        TWO_TO_THREE_PRIOR_RENTAL_EVICTIONS = 1, _('2-3 prior rental evictions')
        ONE_PRIOR_RENTAL_EVICTION = 2, _('1 prior rental eviction')
        NO_PRIOR_RENTAL_EVICTION = 3, _('No prior rental eviction (0 points)')

    class HistoryOfLiteralHomelessnessCategory(models.IntegerChoices):
        """
        This class is for history of literal homelessness category information
        """
        FOUR_OR_MORE_TIMES = 0, _('4 or more times or total of at least 12 months in past three years')
        TWO_OR_THREE_TIMES = 1, _('2-3 times in past three years')
        ONE_TIME_IN_PAST_THREE_YEARS = 2, _('1 time in past three years')
        NONE = 3, _('None (0 points)')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='SSVFHPTargetingCriteria_EnrollmentID', default=None)
    ReferredByCoordinatedEntry = models.IntegerField(choices=YesNoResponse.choices)
    CurrentHousingLossExpectedWithin = models.IntegerField(choices=CurrentHousingLossExpectedWithinCategory.choices)
    CurrentHouseholdIncomeIsZeroDollars = models.IntegerField(choices=YesNoResponse.choices)
    AnnualHouseholdGrossIncomeAmount = models.IntegerField(choices=AnnualHouseholdGrossIncomeAmountCategory.choices)
    SuddenAndSignificantDecreaseIncashIncome = models.IntegerField(choices=YesNoResponse.choices)
    MajorChangeInHouseholdCompositionInPastTwelveMonths = models.IntegerField(choices=YesNoResponse.choices)
    RentalEvictionsWithinThePastSevenYears = models.IntegerField(
        choices=RentalEvictionsWithinThePastSevenYearsCategory.choices)
    CurrentlyAtRiskOfLosingATenantBasedHousingSubsidy = models.IntegerField(choices=YesNoResponse.choices)
    HistoryOfLiteralHomelessness = models.IntegerField(choices=HistoryOfLiteralHomelessnessCategory.choices)
    HeadOfHouseholdWithDisablingCondition = models.IntegerField(choices=YesNoResponse.choices)
    CriminalRecordForArsonDrugDealing = models.IntegerField(choices=YesNoResponse.choices)
    RegisteredSexOffender = models.IntegerField(choices=YesNoResponse.choices)
    AtLeastOneDependentChildUnderAgeSix = models.IntegerField(choices=YesNoResponse.choices)
    SingleParentWithMinorChild = models.IntegerField(choices=YesNoResponse.choices)
    HouseholdSizeOfFiveOrMore = models.IntegerField(choices=YesNoResponse.choices)
    AnyVeteranInHouseholdServedInIraqOrAfghanistan = models.IntegerField(choices=YesNoResponse.choices)
    FemaleVeteran = models.IntegerField(choices=YesNoResponse.choices)
    HPApplicantTotalPoints = models.IntegerField()
    GranteeTargetingThresholdScore = models.IntegerField()


class HUDVASHVoucherTracking(models.Model):
    """
    This class is for HUDVASHV voucher information
    """
    class VoucherChangeCategory(models.IntegerChoices):
        """
        This class is for voucher change category information
        """
        REFERRAL_PACKAGE_FORWARDED_TO_PHA = 1, _('Referral package forwarded to PHA')
        VOUCHER_DENIED_BY_PHA = 2, _('Voucher denied by PHA')
        VOUCHER_ISSUED_BY_PHA = 3, _('Voucher issued by PHA')
        VOUCHER_REVOKED_OR_EXPIRED = 4, _('Voucher revoked or expired')
        VOUCHER_IN_USE_VETERAN_MOVED_INTO_HOUSING = 5, _('Voucher in use- veteran moved into housing')
        VOUCHER_WAS_PORTED_LOCALLY = 6, _('Voucher was ported locally')
        VOUCHER_WAS_ADMINISTRATIVELY_ABSORBED_BY_NEW_PHA = 7, _('Voucher was administratively absorbed by new PHA')
        VOUCHER_WAS_CONVERTED_TO_HOUSING_CHOICE_VOUCHER = 8, _('Voucher was converted to Housing Choice Voucher')
        VETERAN_EXITED_VOUCHER_WAS_RETURNED = 9, _('Veteran exited - voucher was returned')
        VETERAN_EXITED_FAMILY_MAINTAINED_THE_VOUCHER = 10, _('0 Veteran exited - family maintained the voucher')
        VETERAN_EXITED_PRIOR_TO_EVERRECEIVING_A_VOUCHER = 11, _('Veteran exited - prior to ever receiving a voucher')
        OTHER = 12, _('Other')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='HUDVASHVoucherTracking_EnrollmentID', default=None)
    InformationDate = models.DateField()
    VoucherChange = models.IntegerField(choices=VoucherChangeCategory.choices)
    IfOther = models.TextField()


class HUDVASHExitInformation(models.Model):
    class CaseManagementExitReasonCategory(models.IntegerChoices):
        ACCOMPLISHED_GOALS = 1, _('Accomplished goals and /or obtained services and no longer needs CM')
        TRANSFERRED_TO_ANOTHER_HUDVASH_PROGRAM_SITE = 2, _('Transferred to another HUD - VASH program site')
        FOUND_OR_CHOSE_OTHER_HOUSING = 3, _('Found/chose other housing')
        DID_NOT_COMPLY_WITH_HUDVASH_CM = 4, _('Did not comply with HUD - VASH CM')
        EVICTION_OR_OTHER_HOUSING_RELATED_ISSUES = 5, _('Eviction and/or other housing related issues')
        UNHAPPY_WITH_HUD_VASH_HOUSING = 6, _('Unhappy with HUD-VASH housing')
        NO_LONGER_FINANCIALLY_ELIGIBLE_FOR_HUD_VASH_VOUCHER = 7, _(
            'No longer financially eligible for HUD-VASH voucher')
        NO_LONGER_INTERESTED_IN_PARTICIPATING_IN_THIS_PROGRAM = 8, _(
            'No longer interested in participating in this program')
        VETERAN_CANNOT_BE_LOCATED = 9, _('Veteran cannot be located')
        VETERAN_TOO_ILL_TO_PARTICIPATE_AT_THIS_TIME = 10, _('Veteran too ill to participate at this time')
        VETERAN_IS_INCARCERATED = 11, _('Veteran is incarcerated')
        VETERAN_IS_DECEASED = 12, _('Veteran is deceased')
        OTHER = 13, _('Other')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='HUDVASHExitInformation_EnrollmentID', default=None)
    CaseManagementExitReason = models.IntegerField(choices=CaseManagementExitReasonCategory.choices)
    IfOther = models.TextField()


# RHY and PATH models

class ConnectionWithSOAR(models.Model):
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='ConnectionWithSOAR_EnrollmentID', default=None)
    ConnectionWithSOAR = models.IntegerField(choices=ResponseCategory.choices)


class LastGradeCompleted(models.Model):
    class LastGradeCompletedCategory(models.IntegerChoices):
        LESS_THAN_GRADE_FIVE = 1, _('Less than Grade 5')
        GRADES_FIVE_TO_SIX = 2, _('Grades 5-6')
        GRADES_SEVEN_EIGHT = 3, _('Grades 7-8 ')
        GRADES_NINE_TO_ELEVEN = 4, _('Grades 9-11')
        GRADE_TWELVE_OR_HIGH_SCHOOL_DIPLOMA = 5, _('Grade 12/High school diploma')
        SCHOOL_PROGRAM_DOES_NOT_HAVE_GRADE_LEVELS = 6, _('School program does not have grade levels')
        GED = 7, _('GED')
        SOME_COLLEGE = 10, _('Some college')
        ASSOCIATES_DEGREE = 11, _('Associates degree')
        BACHELORS_DEGREE = 12, _('Bachelors degree')
        GRADUATE_DEGREE = 13, _('Graduate degree')
        VOCATIONAL_CERTIFICATION = 14, _('Vocational Certification')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='LastGradeCompleted_EnrollmentID', default=None)
    LastGradeCompleted = models.IntegerField(choices=LastGradeCompletedCategory.choices)


class W1ServicesProvidedHOPWA(models.Model):

    """
    This class is for HOPWA  Services information
    """
    class HOPWAServiceType(models.IntegerChoices):
        ADULT_DAYCARE_AND_PERSONAL_ASSISTANCE = 1, _('Adult day care and personal assistance')
        CASE_MANAGEMENT = 2, _('Case management')
        CHILDCARE = 3, _('Child care')
        CRIMINAL_JUSTICE_LEGAL_SERVICES = 4, _('Criminal justice/legal services')
        EDUCATION = 5, _('Education')
        EMPLOYMENT_AND_TRAINING_SERVICES = 6, _('Employment and training services')
        FOOD_MEALS_NUTRITIONAL_SERVICES = 7, _('Food/meals/nutritional services')
        HEALTH_MEDICAL_CARE = 8, _('Health/medical care')
        LIFE_SKILLS_TRAINING = 9, _('Life skills training')
        MENTAL_HEALTH_CARE_COUNSELING = 10, _('Mental health care/counseling')
        OUTREACH_AND_OR_ENGAGEMENT = 11, _('Outreach and/or engagement')
        SUBSTANCE_ABUSE_SERVICES_TREATMENT = 12, _('Substance abuse services/treatment')
        TRANSPORTATION = 13, _('Transportation')
        OTHER_HOPWA_FUNDED_SERVICE = 14, _('Other HOPWA funded service')

    DateOfService = models.DateField()
    TypeOfService = models.IntegerField(choices=HOPWAServiceType.choices)
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='W1ServicesProvidedHOPWA_EnrollmentID',
                                     default=None)

class TCellCD4AndViralLoadHOPWA(models.Model):
    """
    This class is for financial assistance HOPWA
    """
    class InformationObtainedResponseCategory(models.IntegerChoices):
        """
        This class is for reprt type
        """
        MEDICAL_REPORT = 1, _('Medical Report')
        CLIENT_REPORT = 2, _('Client Report')
        OTHER = 3, _('Other')
    InformationDate = models.DateField()
    IfYesTCellCount = models.IntegerField(validators=[MaxValueValidator(1500), MinValueValidator(0)],blank=True,null=True)
    HowWasTheInformationObtained = models.IntegerField(choices=InformationObtainedResponseCategory.choices,blank=True,null=True)
    ViralLoadInformationAvailable = models.IntegerField(choices=ResponseCategory.choices)
    ViralLoadCount = models.IntegerField(validators=[MaxValueValidator(999999), MinValueValidator(0)],blank=True,null=True)
    HowWasTheViralInformationObtained = models.IntegerField(choices=InformationObtainedResponseCategory.choices,blank=True,null=True)
    TCellCD4CountAvailable = models.IntegerField(choices=ResponseCategory.choices)
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='TCellCD4AndViralLoadHOPWA_EnrollmentID',
                                     default=None)


class MedicalAssistanceHOPWA(models.Model):
    """
    This class is consists of medical assistance HOPWA fields
    """

    class IfNoReasonTypeCategory(models.IntegerChoices):
        """
        This class is for medical assistance HOPWA applied status
        """
        APPLIED_DECISION_PENDING = 1, _('Applied; decision pending')
        APPLIED_CLIENT_NOT_ELIGIBLE = 2, _('Applied; client not eligible')
        CLIENT_DIDNOT_APPLY = 3, _('Client did not apply ')
        INSURANCE_TYPE_NA_FOR_THIS_CLIENT = 4, _('Insurance type N/A for this client')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    InformationDate = models.DateField()
    ReceivingPublicHIVAIDSMedicalAssistance = models.IntegerField(choices=ResponseCategory.choices)
    IfNoReason = models.IntegerField(choices=IfNoReasonTypeCategory.choices,blank=True,null=True)
    ReceivingAIDSDrugAssistanceProgram = models.IntegerField(choices=ResponseCategory.choices)
    IfNoReasonADAP = models.IntegerField(choices=IfNoReasonTypeCategory.choices,blank=True,null=True)
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='MedicalAssistanceHOPWA_EnrollmentID',
                                     default=None)

class HousingAssessmentAtExitHOPWA(models.Model):
    """
    This class is for housing assessment at exit HOPWA information
    """
    class HousingAssessmentAtExitResponseCategory(models.IntegerChoices):
        """
        This class is for housing assessment at exit HOPWA response category
        """
        ABLE_TO_MAINTAIN_THE_HOUSING_THEY_HAD_AT_PROJECT_ENTRY = 1, _(
            "Able to maintain the housing they had at project entry")
        MOVED_TO_NEW_HOUSING_UNIT = 2, _('Moved to new housing unit')
        MOVED_IN_WITH_FAMILY_FRIENDS_ON_A_TEMPORARY_BASIS = 3, _('Moved in with family/friends on a temporary basis')
        MOVED_IN_WITH_FAMILY_FRIENDS_ON_A_PERMANENT_BASIS = 4, _('Moved in with family/friends on a permanent basis')
        MOVED_TO_A_TRANSITIONAL_OR_TEMPORARY_HOUSING_FACILITY_OR_PROGRAM = 5, _(
            " Moved to a transitional or temporary housing facility or program")
        CLIENT_BECAME_HOMELESS_MOVING_TO_A_SHELTER_OR_OTHER_PLACE_UNFIT_FOR_HUMAN_HABITATION = 6, _(
            "Client became homeless - moving to a shelter or other place unfit for human habitation")
        CLIENT_WENT_TO_JAIL_PRISON = 7, _('Client went to jail/prison')
        CLIENT_DIED = 10, _('Client Died')
        CLIENT_DOESNOT_KNOW = 8, _('Client Doesn\'t Know')
        CLIENT_REFUSED = 9, _('Client Refused')
        DATA_NOT_COLLECTED = 99, _('Data Not Collected')

    class AnotherSubsidyInformationResponseCategory(models.IntegerChoices):
        """
        This class is for housing assessment at exit HOPWA subsidy response information
        """
        WITH_ONGOING_SUBSIDY = 1, _('With ongoing subsidy')
        WITHOUT_AN_ONGOING_SUBSIDY = 2, _('Without an ongoing subsidy')

    class SubsidyInformationResponseCategory(models.IntegerChoices):
        """
        This class is for housing assessment at exit HOPWA subsidy response information
        """
        WITHOUT_A_SUBSIDY = 1, _('Without_a_subsidy')
        WITH_THE_SUBSIDY_THEY_HAD_AT_PROJECT_ENTRY = 2, _('With the subsidy they had at project entry')
        WITH_AN_ONGOING_SUBSIDY_ACQUIRED_SINCE_PROJECT_ENTRY = 3, _(
            'With an ongoing subsidy acquired since project entry')
        ONLY_WITH_FINANCIAL_ASSISTANCE_OTHER_THAN_A_SUBSIDY = 4, _(
            'Only with financial assistance other than a subsidy')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='HousingAssessmentAtExitHOPWA_EnrollmentID',
                                     default=None)
    HousingAssessmentAtExit = models.IntegerField(choices=HousingAssessmentAtExitResponseCategory.choices)
    SubsidyInformation = models.IntegerField(choices=SubsidyInformationResponseCategory.choices,blank=True,null=True)
    AnotherSubsidyInformation = models.IntegerField(choices=AnotherSubsidyInformationResponseCategory.choices,blank=True,null=True)

class LabourExploitationTrafficking(models.Model):

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='LabourExploitationTrafficking_EnrollmentID',
                                     default=None)
    leavejob = models.IntegerField(choices=ResponseCategory.choices)
    paymentdifference = models.IntegerField(choices=ResponseCategory.choices)
    forcedintojob = models.IntegerField(choices=ResponseCategory.choices,blank=True,null=True)
    last3months = models.IntegerField(choices=ResponseCategory.choices, blank=True,null=True)

class ChildWelfareFoster(models.Model):

    class NoofYearsCategory(models.IntegerChoices):
        """
        This class is for how many years is he a child welfare member
        """
        Less_than_one_year = 1, _('Less than one year')
        One_to_Two_Years = 2, _('1 to 2 years')
        Three_to_Five_Years = 3,_('3 to 5 or more years')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='ChildWelfareFoster_EnrollmentID',
                                     default=None)
    formerChildWelfare = models.IntegerField(choices=ResponseCategory.choices)
    noofyears = models.IntegerField(choices=NoofYearsCategory.choices,blank=True,null=True)
    noofmonths = models.IntegerField(blank=True,null=True)

class GeneralHealthStatus(models.Model):


    class GeneralHealthStatusCategory(models.IntegerChoices):
        Excellent = 1, _('Excellent')
        Very_good = 2, _('Very Good')
        Good = 3, _('Good')
        Fair = 4, _('Fair')
        Poor = 5, _('Poor')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='GeneralHealthStatus_EnrollmentID',
                                     default=None)
    statusmentalhealth = models.IntegerField(choices=GeneralHealthStatusCategory.choices)

class DentalHealthStatus(models.Model):

    class DentalHealthStatusCategory(models.IntegerChoices):
        Excellent = 1, _('Excellent')
        Very_good = 2, _('Very Good')
        Good = 3, _('Good')
        Fair = 4, _('Fair')
        Poor = 5, _('Poor')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='DentalHealthStatus_EnrollmentID',
                                     default=None)
    statusdentalhealth = models.IntegerField(choices=DentalHealthStatusCategory.choices)


class FamilyCriticalIssues(models.Model):

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='FamilyCriticalIssues_EnrollmentID',
                                     default=None)
    unemploymentfamilymember=models.IntegerField(choices=YesNoResponse.choices)
    mentalhealthissues=models.IntegerField(choices=YesNoResponse.choices)
    physicaldisability=models.IntegerField(choices=YesNoResponse.choices)
    alcoholorsubstanceabuse=models.IntegerField(choices=YesNoResponse.choices)
    insufficientincome=models.IntegerField(choices=YesNoResponse.choices)
    parentofyouth=models.IntegerField(choices=YesNoResponse.choices)

class SexualExploitation(models.Model):


    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='SexualExploitation_EnrollmentID',
                                     default=None)
    receivedanything=models.IntegerField(choices=ResponseCategory.choices)
    receivedlastthreemonths=models.IntegerField(choices=ResponseCategory.choices,blank=True,null=True)
    howmanytimes=models.IntegerField(choices=NoofTimesResponse.choices,blank=True,null=True)
    forcedanything=models.IntegerField(choices=ResponseCategory.choices,blank=True,null=True)
    forcedlastthreemonths=models.IntegerField(choices=ResponseCategory.choices,blank=True,null=True)

class SafeandAppropriateExit(models.Model):

    class WorkerStatusCategory(models.IntegerChoices):
        No = 0, _('No')
        Yes = 1, _('Yes')
        Workerdoesnotknow = 2, _('Worker does not know')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='Safeandappropriateexit_EnrollmentID',
                                     default=None)
    destinationsafeclient = models.IntegerField(choices=ResponseCategory.choices)
    destinationsafecaseworker = models.IntegerField(choices=WorkerStatusCategory.choices)
    positivepeerconnections = models.IntegerField(choices=WorkerStatusCategory.choices)
    positivecommunityconnections = models.IntegerField(choices=WorkerStatusCategory.choices)
    positiveadultconnections = models.IntegerField(choices=WorkerStatusCategory.choices)

class Counseling(models.Model):

    class TypeofCounselingCategory(models.IntegerChoices):
        Individual = 0, _('Individual')
        Family = 1, _('Family')
        Group = 2, _('Group - including peer counseling')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='Counseling_EnrollmentID',
                                     default=None)
    receivedbyclient = models.IntegerField(choices=YesNoResponse.choices)
    typeofCounseling = models.IntegerField(choices=TypeofCounselingCategory.choices,blank=True,null=True)
    noofsessions = models.IntegerField(blank=True,null=True)
    noofsessionsplanned = models.IntegerField()
    continuecounseling = models.IntegerField(choices=YesNoResponse.choices)

class MentalHealthStatus(models.Model):

    class MentalHealthStatusCategory(models.IntegerChoices):
        Excellent = 1, _('Excellent')
        Very_good = 2, _('Very Good')
        Good = 3, _('Good')
        Fair = 4, _('Fair')
        Poor = 5, _('Poor')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='MentalHealthStatus_EnrollmentID',
                                     default=None)
    mentalhealthstatus = models.IntegerField(choices=MentalHealthStatusCategory.choices)

class SchoolStatus(models.Model):

    class SchoolstatusCategory(models.IntegerChoices):
        Attending_school_regularly = 1, _('Attending school regularly')
        Attending_school_irregularly = 2, _('Attending school irregularly')
        Graduated_from_high_school = 3, _('Graduated from high school')
        Obtained_GED = 4, _('Obtained GED')
        Dropped_out = 5, _('Dropped out')
        Suspended = 6, _('Suspended')
        Expelled = 7, _('Expelled')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='SchoolStatus_EnrollmentID',
                                     default=None)
    schoolstatusfield = models.IntegerField(choices=SchoolstatusCategory.choices)

class ProjectCompletionStatus(models.Model):
    class ProjectCompletionCategory(models.IntegerChoices):
        Completedproject = 1, _('Completed project')
        Youthvountarily = 2, _('Youth voluntarily left early')
        Youthexpelled = 3, _('Youth was expelled or otherwise involuntarily discharged from project')
    class majorreasoncategory(models.IntegerChoices):
        CriminalActivity = 1, _('Criminal activity/destruction of property/violence')
        Noncompliance = 2, _('Noncompliance')
        Nonpayment = 3, _('Non-payment of rent/occupancy charge')
        MaximumTime = 4, _('Reached maximum time allowed by project')
        projectterminated = 5, _('Project terminated')
        unknown = 6, _('Unknown/disappeared')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='ProjectCompletion_EnrollmentID',
                                     default=None)
    projectcompletion = models.IntegerField(choices=ProjectCompletionCategory.choices)
    majorreason = models.IntegerField(choices=majorreasoncategory.choices,blank=True,null=True)

class SexualOrientation(models.Model):
    class SexualOrientationCategory(models.IntegerChoices):
        Heterosexual = 1, _('Heterosexual')
        Gay = 2, _('Gay')
        Lesbian = 3, _('Lesbian')
        Bisexual = 4, _('Bisexual')
        Questioning = 5, _('Questioning / Unsure')
        Other = 6, _('Other')
        Expelled = 7, _('Expelled')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='SexualOrientation_EnrollmentID',
                                     default=None)
    sexualorientation = models.IntegerField(choices=SexualOrientationCategory.choices)

class ReferralSource(models.Model):
    class ReferralCategory(models.IntegerChoices):
        SelfReferral = 1, _('Self-Referral')
        Individual = 2, _('Individual: Parent/Guardian/Relative/Friend/Foster Parent/Other Individual')
        OutreachProject = 7, _('Outreach Project')
        TemporaryShelter = 11, _('Temporary Shelter')
        ResidentialProject = 18, _('Residential Project:')
        Hotline = 28, _('Hotline:')
        ChildWelfareCPS = 30, _('Child Welfare/CPS')
        JuvenileJustice = 34, _('Juvenile Justice')
        LawEnforcementPolice = 35, _('Law Enforcement/ Police')
        MentalHospital = 37, _('Mental Hospital')
        School = 38, _('School')
        OtherOrganization = 39, _('Other Organization')
        Client_doesnt_know = 8, _('Client doesn\'t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='Referral_EnrollmentID',
                                     default=None)
    referralsource = models.IntegerField(choices=ReferralCategory.choices)
    nooftimes = models.IntegerField(blank=True, null=True)

class AftercarePlans(models.Model):
    class AftercareplansCategory(models.IntegerChoices):
        Viaemailsocialmedia = 1, _('Via email/social media')
        Viatelephone = 2, _('Via telephone')
        oneonone = 3, _('In person: one-on-one')
        Inpersongroup  = 4, _('In person: group ')
    class Yesnocategory(models.IntegerChoices):
        No = 0, _('No')
        Yes = 1, _('Yes')
        clientrefused = 9, _('Client refused')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='Aftercareplans_EnrollmentID',
                                     default=None)
    aftercareprovided = models.IntegerField(choices=Yesnocategory.choices)
    primaryway = models.IntegerField(choices=AftercareplansCategory.choices,blank=True,null=True)
    InformationDate = models.DateField()



class PregancyStatus(models.Model):

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='PregancyStatus_EnrollmentID',
                                     default=None)
    pregancy_status = models.IntegerField(choices=ResponseCategory.choices)
    duedate = models.DateField()

class RHYBCPStatus(models.Model):
    class notfundedcategory(models.IntegerChoices):
        Out_of_Age = 1, _('Out of age range')
        Ward_of_state = 2, _('Ward of the State – Immediate Reunification')
        Ward_of_criminal = 3, _('Ward of the Criminal Justice System – Immediate Reunification')
        Other = 4, _('Other')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='RHYBCPStatus_EnrollmentID',
                                     default=None)
    runawayyouth = models.IntegerField(choices=ResponseCategory.choices,blank=True,null=True)
    notfundedreason = models.IntegerField(choices=notfundedcategory.choices,blank=True,null=True)
    dateofstatus = models.DateField()
    youtheligible = models.IntegerField(choices=YesNoResponse.choices)

class EmploymentStatus(models.Model):
    class employmentstatuscategory(models.IntegerChoices):
        Fulltime = 1, _('Full-time')
        Parttime = 2, _('Part-time')
        Seasonal = 3, _('Seasonal / sporadic (including day labor)')
    class notemployedcategory(models.IntegerChoices):
        Looking_for_work = 1, _('Looking for work')
        Unable_to_work = 2, _('Unable to work')
        Not_looking_for_work = 3, _('Not looking for work')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='EmploymentStatus_EnrollmentID',
                                     default=None)
    employed = models.IntegerField(choices=ResponseCategory.choices)
    employmentstatus = models.IntegerField(choices=employmentstatuscategory.choices,blank=True,null=True)
    notemployed = models.IntegerField(choices=notemployedcategory.choices,blank=True,null=True)
    InformationDate = models.DateField()

class RHYConnections(models.Model):

    class RHYConnectionscategory(models.IntegerChoices):
        Community = 2, _('Community service/service learning(CSL)')
        Criminal = 7, _('Criminal justice /legal services')
        Education = 5, _('Education')
        Employment = 6, _('Employment and/or training services')
        Health = 14, _('Health/medical care')
        Home = 26, _('Home-based Services')
        Life_Skill = 8, _('Life skills training')
        Parenting = 10, _('Parenting education for youth with children')
        Postnatal = 27, _('Post-natal newborn care (wellness exams; immunizations)')
        postnatalmother = 12, _('Post-natal care for mother')
        prenatal = 13, _('Pre-natal care')
        STDTesting = 28, _('STD Testing')
        Streetbased = 29, _('Street-based Services')
        Substanceabuse = 17, _('Substance abuse treatment')
        Preventionservices = 18, _('Substance Abuse Ed/Prevention Services')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='RHYConnections_EnrollmentID',
                                     default=None)
    connectionsrhy = models.IntegerField(choices=RHYConnectionscategory.choices)
    InformationDate = models.DateField()


class JuvenileJusticeSystem(models.Model):

    class NoofYearsCategory(models.IntegerChoices):
        """
        This class is for how many years is he a child welfare member
        """
        Less_than_one_year = 1, _('Less than one year')
        One_to_Two_Years = 2, _('1 to 2 years')
        Three_to_Five_Years = 3,_('3 to 5 or more years')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='JuvenileJustice_EnrollmentID',
                                     default=None)
    formerjuvenilejustice = models.IntegerField(choices=ResponseCategory.choices)
    noofyears = models.IntegerField(choices=NoofYearsCategory.choices,blank=True,null=True)
    noofmonths = models.IntegerField(blank=True,null=True)

class DateofEngagement(models.Model):

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='dateengagement_EnrollmentID',
                                     default=None)
    EngagementDate = models.DateField()

class PathFundedServices(models.Model):
    class PathFundedcategory(models.IntegerChoices):
        Reengagement = 1, _('Re-engagement')
        Screening = 2, _('Screening')
        Clinicalassessment = 14, _('Clinical assessment')
        Habilitationrehabilitation = 3, _('Habilitation/rehabilitation')
        Communitymentalhealth = 4, _('Community mental health')
        Substanceusetreatment = 5, _('Substance use treatment')
        Casemanagement = 6, _('Case management')
        Residentialsupportiveservices = 7, _('Residential supportive services')
        Housingminorrenovation = 8, _('Housing minor renovation')
        Housingmovingassistance = 9, _('Housing moving assistance')
        Housingeligibilitydetermination = 10, _('Housing eligibility determination')
        Securitydeposits = 11, _('Security deposits')
        Onetimerent  = 12, _('One-time rent for eviction prevention')
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='pathfundedservices_EnrollmentID',
                                     default=None)
    InformationDate = models.DateField()
    typeofpathservice = models.IntegerField(choices=PathFundedcategory.choices)

class currentlivingsituation(models.Model):

    class currentlivingcategory(models.IntegerChoices):
        HomelessSituations = 1, _('Homeless Situations')
        InstitutionalSituations = 2, _('Institutional Situations')
        TemporaryPermanentHousing  = 3, _('Temporary and Permanent Housing Situations')
        Other = 4, _('Other')

    class homelesssituationcategory(models.IntegerChoices):
        Habitation = 16, _('Place not meant for habitation (e.g., a vehicle, an abandoned building,bus/train/subway station/airport or anywhere outside)')
        EmergencyShelter = 1, _('Emergency shelter, including hotel or motel paid for with emergency shelter voucher, or RHY-funded Host Home shelter')
        SafeHaven  = 18, _('Safe Haven')

    class Institutionalsituationcategory(models.IntegerChoices):
        fostercare = 15, _('Foster care home or foster care group home')
        hospital = 6, _('Hospital or other residential non-psychiatric medical facility')
        Jail = 7, _('Jail, prison, or juvenile detention facility')
        nursing = 25, _('Long-term care facility or nursing home')
        psychiatric = 4, _('Psychiatric hospital or other psychiatric facility')
        Substanceabuse = 5, _('Substance abuse treatment facility or detox center')

    class TemporaryPermanentHousingSituationscategory(models.IntegerChoices):
        residentalproject = 29, _('Residential project or halfway house with no homeless criteria')
        hotel = 14, _('Hotel or motel paid for without emergency shelter voucher')
        transitionalhouse = 2, _('Transitional housing for homeless persons (including homeless youth)')
        hosthome = 32, _('Host Home (non-crisis)')
        temporarytenure = 13, _('Staying or living with friends, temporary tenure (e.g. room, apartment, or house)')
        friendsroom = 36, _('Staying or living in a friend’s room, apartment, or house')
        familyroom = 12, _('Staying or living with family, temporary tenure (e.g. room, apartment, or house)')
        permanenttenure = 22, _('Staying or living with family, permanent tenure')
        familymember = 35, _('Staying or living in a family member’s room, apartment, or house')
        friendspermanent = 23, _('Staying or living with friends, permanent tenure')
        hopwaph = 26, _('Moved from one HOPWA funded project to HOPWA PH')
        hopwath = 27, _('Moved from one HOPWA funded project to HOPWA TH')
        gpdtip = 28, _('Rental by client, with GPD TIP housing subsidy')
        vash = 19, _('Rental by client, with VASH housing subsidy')
        permanenthousing = 3, _('Permanent housing (other than RRH) for formerly homeless persons')
        rentalhousing = 31, _('Rental by client, with RRH or equivalent subsidy')
        rentalhcvvoucher = 33, _('Rental by client, with HCV voucher (tenant or project based)')
        publichousing = 34, _('Rental by client in a public housing unit')
        nohousingsubsidy = 10, _('Rental by client, no ongoing housing subsidy')
        housingsubsidy = 20, _('Rental by client, with other ongoing housing subsidy')
        ownedbyclientwithsubsidy = 21, _('Owned by client, with ongoing housing subsidy')
        ownedbyclientwithnosubsidy = 11, _('Owned by client, no ongoing housing subsidy')

    class Othercategory(models.IntegerChoices):
        noexitinterview = 30, _('No exit interview completed')
        Other = 17, _('Other')
        Deceased = 24, _('Deceased')
        Workerunable = 37, _('Worker unable to determine')
        Client_doesnt_know = 8, _('Client doesn’t know')
        Client_refused = 9, _('Client refused')
        Data_not_collected = 99, _('Data not collected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='currentlivingsituation_EnrollmentID',
                                     default=None)

    Informationdate = models.DateField()
    currentliving = models.IntegerField(choices=currentlivingcategory.choices)
    homelesssituation = models.IntegerField(choices=homelesssituationcategory.choices, default=homelesssituationcategory.EmergencyShelter)
    institutionalsituation = models.IntegerField(choices=Institutionalsituationcategory.choices, default=Institutionalsituationcategory.fostercare)
    temporaryhousingsituations = models.IntegerField(choices=TemporaryPermanentHousingSituationscategory.choices, default=TemporaryPermanentHousingSituationscategory.transitionalhouse)
    other = models.IntegerField(choices=Othercategory.choices, default=Othercategory.Client_doesnt_know)
    livingsituationin14days = models.IntegerField(choices=ResponseCategory.choices)
    subsequentresidence = models.IntegerField(choices=ResponseCategory.choices)
    supportnetworks = models.IntegerField(choices=ResponseCategory.choices)
    ownershipinterest = models.IntegerField(choices=ResponseCategory.choices)
    clientmoved = models.IntegerField(choices=ResponseCategory.choices)
    locationdetails = models.TextField()

class referralsprovidedpath(models.Model):

    class typeofreferralcategory(models.IntegerChoices):
        Community_Mental_Health = 1, _('Community Mental Health')
        Substance_Use_Treatment = 2, _('Substance Use Treatment')
        Primary_HealthDental_Care = 3, _('Primary Health/ Dental Care')
        Job_Training = 4, _('Job Training')
        Educational_Services = 5, _('Educational Services')
        Housing_Services = 6, _('Housing Services')
        Permanent_Housing = 7, _('Permanent Housing')
        Income_Assistance = 8, _('Income Assistance')
        Employment_Assistance = 9, _('Employment Assistance')
        Medical_Insurance = 10, _('Medical Insurance')
        Temporary_Housing = 11, _('Temporary Housing')
    class outcomeforeachcategory(models.IntegerChoices):
        Attained = 1, _('Attained')
        Not_attained = 2, _('Not attained')
        Unknown = 3, _('Unknown')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='referralsprovidedpath_EnrollmentID',
                                     default=None)

    Informationdate =models.DateField()
    typeofreferral = models.IntegerField(choices=typeofreferralcategory.choices)
    outcome = models.IntegerField(choices=outcomeforeachcategory.choices,blank=True,null=True)

class pathstatus(models.Model):
    class reasonnotenrolledcategory(models.IntegerChoices):
        ineligible = 1, _('Client was found ineligible for PATH')
        notenrolled = 2, _('Client was not enrolled for other reason(s)')
        uanble = 3, _('Unable to locate client')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='pathstatus_EnrollmentID',
                                     default=None)

    Informationdate = models.DateField()
    clientenrolled = models.IntegerField(choices=YesNoResponse.choices)
    reason = models.IntegerField(choices=reasonnotenrolledcategory.choices,blank=True,null=True)

class CoordinatedEntryAssessment(models.Model):
    class AssessmentTypeCategory(models.IntegerChoices):
        Phone = 1, _('Phone')
        Virtual = 2, _('Virtual')
        Inperson = 3, _('In person')
    class AssessmentLevelCategory(models.IntegerChoices):
        Crisis_needs_assessment = 1, _('Crisis Needs Assessment')
        Housing_needs_assessment =2, _('Housing Needs Assessment')
    class Prioritizationstatuscategory(models.IntegerChoices):
        Placed_on_prioritization = 1, _('Placed on prioritization list')
        Not_placed_on_prioritization = 2, _('Not placed on prioritization list')
    Informationdate=models.DateField()
    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='coordinatedEntry_EnrollmentID',
                                     default=None)
    assessmentlocation = models.TextField()
    assessmenttype = models.IntegerField(choices=AssessmentTypeCategory.choices)
    assessmentlevel = models.IntegerField(choices=AssessmentLevelCategory.choices)
    prioritizationstatus = models.IntegerField(choices=Prioritizationstatuscategory.choices)

class CoordinatedEntryEvent(models.Model):

    class EventCategory(models.IntegerChoices):
        prevention_assistance_project = 1,_('Referral to Prevention Assistance project')
        rapid_solution_intervention = 2,_('Problem Solving/Diversion/Rapid Resolution intervention or service')
        entry_crisis = 3,_('Referral to scheduled Coordinated Entry Crisis Needs Assessment')
        entry_housing = 4,_('Referral to scheduled Coordinated Entry Housing Needs Assessment')
        case_management = 5,_('Referral to post-placement/follow-up case management')
        street_outreach = 6,_('Referral to Street Outreach project or services')
        housing_navigation = 7,_('Referral to Housing Navigation project or services')
        ineligible = 8,_('Referral to Non-continuum services: Ineligible for continuum services')
        no_availability = 9,_('Referral to Non continuum services: No availability in continuum services')
        emergency_shelter = 10,_('Referral to Emergency Shelter bed opening')
        housing_bed = 11,_('Referral to Transitional Housing bed/unit opening')
        th_rrh_opening = 12,_('Referral to Joint TH-RRH project/unit/resource opening')
        rrh_opening = 13,_('Referral to RRH project resource opening')
        psh_opening = 14,_('Referral to PSH project resource opening')
        ph_opening = 15,_('Referral to Other PH project/unit/resource opening')

    class Referralresultcategory(models.IntegerChoices):
        client_accepted = 1, _('Successful referral: client accepted')
        client_rejected = 2, _('Unsuccessful referral: client rejected')
        provider_rejected = 3, _('Unsuccessful referral: provider rejected')

    EnrollmentID = models.ForeignKey(Enrollment, on_delete=models.CASCADE,
                                     related_name='coordinatedEntryEvent_EnrollmentID',
                                     default=None)
    dateofEvent=models.DateField()
    event = models.IntegerField(choices=EventCategory.choices)
    clienthoused = models.IntegerField(choices=YesNoResponse.choices, blank=True,null=True)
    aftercareproject = models.IntegerField(choices=YesNoResponse.choices, blank=True,null=True)
    hmisid = models.TextField(blank=True,null=True)
    referralresult = models.IntegerField(choices=Referralresultcategory.choices, blank=True,null=True)
    dateofresult = models.DateField(blank=True,null=True)








