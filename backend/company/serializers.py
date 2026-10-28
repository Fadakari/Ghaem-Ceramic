from rest_framework import serializers
from .models import (
    SiteSetting, KeyStat, CeramicAdvantage, CeramicProductForm,
    TechnicalProperty, ProductionStep, InstallationMethod,
    IndustrySector, ProjectTestimonial, ContactInquiry
)

class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'

class KeyStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyStat
        fields = '__all__'

class CeramicAdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CeramicAdvantage
        fields = '__all__'

class CeramicProductFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = CeramicProductForm
        fields = '__all__'

class TechnicalPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalProperty
        fields = '__all__'

class ProductionStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductionStep
        fields = '__all__'

class InstallationMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstallationMethod
        fields = '__all__'

class IndustrySectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustrySector
        fields = '__all__'

class ProjectTestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTestimonial
        fields = '__all__'

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'full_name', 'company_name', 'phone', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
