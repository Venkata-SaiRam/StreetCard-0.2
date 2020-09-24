from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import SocialWorker, IncomeAndSources, NonCashBenefits, Enrollment, DisablingCondition, \
    DomesticViolence, HealthInsurance, UserNameAndIdMapping, Log, \
    VeteranInformation, ServicesProvidedSSVF, FinancialAssistanceSSVF, PercentOfAMI, LastPermanentAddress, \
    SSVFHPTargetingCriteria, HUDVASHVoucherTracking, HUDVASHExitInformation, ConnectionWithSOAR, LastGradeCompleted, \
    EmploymentStatus, Appointments, TransactionDetails, Product, Transactions, Homeless
from .utils import check_and_assign
from .utils import primary_key_generator


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class SocialWorkerSerializer(ModelSerializer):
    class Meta:
        model = SocialWorker
        fields = ('clearanceLevel', 'address', 'serviceProvider','phonenumber')


class HomelessSerializer(ModelSerializer):
    class Meta:
        model = Homeless
        fields = '__all__'


class TransactionDetailSerializer(ModelSerializer):
    class Meta:
        model = TransactionDetails
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    transaction_detail = TransactionDetailSerializer(required=False, many=True)

    class Meta:
        model = Transactions
        fields = ['transactionId', 'personalId', 'totalAmount', 'transaction_detail']

    def create(self, validated_data):
        transaction_detail_list = validated_data.pop('transaction_detail')
        transaction = Transactions.objects.create(**validated_data)
        for item in transaction_detail_list:
            transaction_detail_data = item
            if transaction_detail_data is not None:
                TransactionDetails.objects.create(transactionId_id=transaction.transactionId,
                                                  transactionDetailId=primary_key_generator(),
                                                  **transaction_detail_data)
        return transaction

    def to_representation(self, instance):
        response = super().to_representation(instance)
        if TransactionDetails.objects.filter(transactionId_id=response['transactionId']).exists():
            list_of_transactions = TransactionDetails.objects.filter(transactionId_id=response['transactionId'])
            response['transaction_detail'] = []
            for transaction in list_of_transactions:
                response['transaction_detail'].append(TransactionDetailSerializer(transaction).data)
        return response


class UserSerializer(ModelSerializer):
    socialWorker = SocialWorkerSerializer(required=False)

    class Meta:
        model = User
        fields = (
        'id', 'username', 'email', 'first_name', 'last_name', 'password', 'socialWorker')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('socialWorker')
        password = validated_data.pop('password')
        group_name = profile_data.get('clearanceLevel')
        group = Group.objects.get(name=group_name)
        user = User(**validated_data)
        user.set_password(password)
        if group_name == 'admin':
            user.is_staff = True
            user.is_superuser = True
        user.save()

        SocialWorker.objects.create(user=user, **profile_data)
        print("Before social save");

        UserNameAndIdMapping.objects.create(user_id=user.id, user_name=user.username)
        user.groups.add(group)
        return user

    def update(self, instance, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        user = User.objects.get(username__exact=username)
        user.set_password(password)
        user.save()
        return user

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['socialWorker'] = SocialWorkerSerializer(
            SocialWorker.objects.get(user_id=response['id'])).data
        return response


# Serializing and Deserializing data from the Log DB table
# ensuring rendering is correct on frontend
class LogSerializer(ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'
    # datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', )


class HomelessSerializer(ModelSerializer):
    class Meta:
        model = Homeless
        fields = '__all__'


class UserNameAndIdMappingSerializer(ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = UserNameAndIdMapping
        fields = ('user_name', 'user_id', 'user')

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(
            User.objects.get(id=response['user_id'])).data
        return response


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeAndSources
        fields = '__all__'


class NonCashBenefitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NonCashBenefits
        fields = '__all__'


class DisablingConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisablingCondition
        fields = '__all__'


class DomesticViolenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomesticViolence
        fields = '__all__'


class HealthInsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthInsurance
        fields = '__all__'


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = '__all__'




class VeteranInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VeteranInformation
        fields = '__all__'


class ServicesProvidedSSVFSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesProvidedSSVF
        fields = '__all__'


class FinancialAssistanceSSVFSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialAssistanceSSVF
        fields = '__all__'


class PercentOfAMISerializer(serializers.ModelSerializer):
    class Meta:
        model = PercentOfAMI
        fields = '__all__'


class LastPermanentAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastPermanentAddress
        fields = '__all__'


class SSVFHPTargetingCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SSVFHPTargetingCriteria
        fields = '__all__'


class HUDVASHVoucherTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = HUDVASHVoucherTracking
        fields = '__all__'


class HUDVASHExitInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HUDVASHExitInformation
        fields = '__all__'


class ConnectionWithSOARSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectionWithSOAR
        fields = '__all__'


class LastGradeCompletedSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastGradeCompleted
        fields = '__all__'


class EmploymentStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentStatus
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    income_and_sources = IncomeSerializer(required=False)
    non_cash_benefits = NonCashBenefitsSerializer(required=False)
    disabling_condition = DisablingConditionSerializer(required=False)
    domestic_violence = DomesticViolenceSerializer(required=False)
    health_insurance = HealthInsuranceSerializer(required=False)
    veteran_Information = VeteranInformationSerializer(required=False)
    services_Provided_SSVF = ServicesProvidedSSVFSerializer(required=False)
    financial_Assistance_SSVF = FinancialAssistanceSSVFSerializer(required=False)
    percent_Of_AMI = PercentOfAMISerializer(required=False)
    last_Permanent_Address = LastPermanentAddressSerializer(required=False)
    sSVFHP_Targeting_Criteria = SSVFHPTargetingCriteriaSerializer(required=False)
    hUD_VASH_Voucher_Tracking = HUDVASHVoucherTrackingSerializer(required=False)
    hUD_VASH_Exit_Information = HUDVASHExitInformationSerializer(required=False)
    connection_With_SOAR = ConnectionWithSOARSerializer(required=False)
    last_Grade_Completed = LastGradeCompletedSerializer(required=False)
    employment_Status = EmploymentStatusSerializer(required=False)

    class Meta:
        model = Enrollment
        fields = ['EnrollmentID', 'DisablingCondition', 'PersonalId', 'ProjectCategory', 'income_and_sources',
                  'non_cash_benefits', 'disabling_condition', 'domestic_violence', 'health_insurance',
                  'veteran_Information', 'services_Provided_SSVF', 'financial_Assistance_SSVF',
                  'percent_Of_AMI', 'last_Permanent_Address', 'sSVFHP_Targeting_Criteria', 'hUD_VASH_Voucher_Tracking',
                  'hUD_VASH_Exit_Information', 'connection_With_SOAR', 'last_Grade_Completed', 'employment_Status']

    def create(self, validated_data):

        income_and_sources_data = check_and_assign('income_and_sources', validated_data)
        non_cash_benefits_data = check_and_assign('non_cash_benefits', validated_data)
        disabling_condition_data = check_and_assign('disabling_condition', validated_data)
        domestic_violence_data = check_and_assign('domestic_violence', validated_data)
        health_insurance_data = check_and_assign('health_insurance', validated_data)
        veteran_information_data = check_and_assign('veteran_Information', validated_data)
        services_provided_ssvf_data = check_and_assign('services_Provided_SSVF', validated_data)
        financial_assistance_ssvf_data = check_and_assign('financial_Assistance_SSVF', validated_data)
        percent_of_ami_data = check_and_assign('percent_Of_AMI', validated_data)
        last_permanent_address_data = check_and_assign('last_Permanent_Address', validated_data)
        ssvfhp_targeting_criteria_data = check_and_assign('sSVFHP_Targeting_Criteria', validated_data)
        hud_vash_voucher_tracking_data = check_and_assign('hUD_VASH_Voucher_Tracking', validated_data)
        hud_vash_exit_information_data = check_and_assign('hUD_VASH_Exit_Information', validated_data)
        connection_with_soar_data = check_and_assign('connection_With_SOAR', validated_data)
        last_grade_completed_data = check_and_assign('last_Grade_Completed', validated_data)
        employment_status_data = check_and_assign('employment_Status', validated_data)

        enroll = Enrollment.objects.create(**validated_data)

        if income_and_sources_data is not None:
            IncomeAndSources.objects.create(EnrollmentID_id=enroll.EnrollmentID, **income_and_sources_data)
        if non_cash_benefits_data is not None:
            NonCashBenefits.objects.create(EnrollmentID_id=enroll.EnrollmentID, **non_cash_benefits_data)
        if disabling_condition_data is not None:
            DisablingCondition.objects.create(EnrollmentID_id=enroll.EnrollmentID, **disabling_condition_data)
        if domestic_violence_data is not None:
            DomesticViolence.objects.create(EnrollmentID_id=enroll.EnrollmentID, **domestic_violence_data)
        if health_insurance_data is not None:
            HealthInsurance.objects.create(EnrollmentID_id=enroll.EnrollmentID, **health_insurance_data)
        if veteran_information_data is not None:
            VeteranInformation.objects.create(EnrollmentID_id=enroll.EnrollmentID, **veteran_information_data)
        if services_provided_ssvf_data is not None:
            ServicesProvidedSSVF.objects.create(EnrollmentID_id=enroll.EnrollmentID, **services_provided_ssvf_data)
        if financial_assistance_ssvf_data is not None:
            FinancialAssistanceSSVF.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                                   **financial_assistance_ssvf_data)
        if percent_of_ami_data is not None:
            PercentOfAMI.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                        **percent_of_ami_data)
        if last_permanent_address_data is not None:
            LastPermanentAddress.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                                **last_permanent_address_data)
        if ssvfhp_targeting_criteria_data is not None:
            SSVFHPTargetingCriteria.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                                   **ssvfhp_targeting_criteria_data)
        if hud_vash_voucher_tracking_data is not None:
            HUDVASHVoucherTracking.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                                  **hud_vash_voucher_tracking_data)
        if hud_vash_exit_information_data is not None:
            HUDVASHExitInformation.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                                  **hud_vash_exit_information_data)
        if connection_with_soar_data is not None:
            ConnectionWithSOAR.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                              **connection_with_soar_data)
        if last_grade_completed_data is not None:
            LastGradeCompleted.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                              **last_grade_completed_data)
        if employment_status_data is not None:
            EmploymentStatus.objects.create(EnrollmentID_id=enroll.EnrollmentID,
                                            **employment_status_data)
        return enroll

    # TODO:
    # 1. Complete the update function for PUT request.
    # 2. Include all the project specific elements from JSON request.

    def update(self, instance, validated_data):

        financial_assistance_hopwa_data = check_and_assign('financialAssistanceHOPWA', validated_data)

        temp = FinancialAssistanceHOPWA.objects.filter(EnrollmentID_id=instance.EnrollmentID)
        for objects in temp:
            objects.FinancialAssistanceAmount = financial_assistance_hopwa_data['FinancialAssistanceAmount']
            objects.FinancialAssistanceType = financial_assistance_hopwa_data['FinancialAssistanceType']
            objects.DateOfFinancialAssistance = financial_assistance_hopwa_data['DateOfFinancialAssistance']
            objects.save()
        instance.DisablingCondition = validated_data.get('DisablingCondition', instance.DisablingCondition)
        instance.ProjectCategory = validated_data.get('ProjectCategory', instance.ProjectCategory)
        instance.EntryDate = validated_data.get('EntryDate', instance.EntryDate)
        instance.ExitDate = validated_data.get('ExitDate', instance.ExitDate)
        instance.save()
        return instance

    def to_representation(self, instance):
        response = super().to_representation(instance)
        if IncomeAndSources.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['income_and_sources'] = IncomeSerializer(
                IncomeAndSources.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if NonCashBenefits.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['non_cash_benefits'] = NonCashBenefitsSerializer(
                NonCashBenefits.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if DisablingCondition.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['disabling_condition'] = DisablingConditionSerializer(
                DisablingCondition.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if DomesticViolence.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['domestic_violence'] = DomesticViolenceSerializer(
                DomesticViolence.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if HealthInsurance.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['health_insurance'] = HealthInsuranceSerializer(
                HealthInsurance.objects.get(EnrollmentID_id=response['EnrollmentID'])).data

        if VeteranInformation.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['veteran_Information'] = VeteranInformationSerializer(
                VeteranInformation.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if ServicesProvidedSSVF.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['services_Provided_SSVF'] = ServicesProvidedSSVFSerializer(
                ServicesProvidedSSVF.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if FinancialAssistanceSSVF.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['financial_Assistance_SSVF'] = FinancialAssistanceSSVFSerializer(
                FinancialAssistanceSSVF.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if PercentOfAMI.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['percent_Of_AMI'] = PercentOfAMISerializer(
                PercentOfAMI.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if LastPermanentAddress.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['last_Permanent_Address'] = LastPermanentAddressSerializer(
                LastPermanentAddress.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if SSVFHPTargetingCriteria.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['sSVFHP_Targeting_Criteria'] = SSVFHPTargetingCriteriaSerializer(
                SSVFHPTargetingCriteria.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if HUDVASHVoucherTracking.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['hUD_VASH_Voucher_Tracking'] = HUDVASHVoucherTrackingSerializer(
                HUDVASHVoucherTracking.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if HUDVASHExitInformation.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['hUD_VASH_Exit_Information'] = HUDVASHExitInformationSerializer(
                HUDVASHExitInformation.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if ConnectionWithSOAR.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['connection_With_SOAR'] = ConnectionWithSOARSerializer(
                ConnectionWithSOAR.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if LastGradeCompleted.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['last_Grade_Completed'] = LastGradeCompletedSerializer(
                LastGradeCompleted.objects.get(EnrollmentID_id=response['EnrollmentID'])).data
        if EmploymentStatus.objects.filter(EnrollmentID_id=response['EnrollmentID']).exists():
            response['employment_Status'] = EmploymentStatusSerializer(
                EmploymentStatus.objects.get(EnrollmentID_id=response['EnrollmentID'])).data

        return response
