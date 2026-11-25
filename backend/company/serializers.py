from rest_framework import serializers
from .models import (
    CompanySetting,
    ProductCategory,
    Product,
    Service,
    QualityStandard,
    Article,
    FAQ,
    ContactInquiry,
    Facility,
)


class CompanySettingSerializer(serializers.ModelSerializer):
    hero_image = serializers.SerializerMethodField()
    hero_image_2 = serializers.SerializerMethodField()
    hero_image_3 = serializers.SerializerMethodField()
    hero_images = serializers.SerializerMethodField()
    about_image = serializers.SerializerMethodField()
    facility_image = serializers.SerializerMethodField()

    class Meta:
        model = CompanySetting
        fields = '__all__'

    def _resolve_url(self, image_field):
        if not image_field:
            return ''
        return image_field.url

    def get_hero_image(self, obj):
        return self._resolve_url(obj.hero_image)

    def get_hero_image_2(self, obj):
        return self._resolve_url(obj.hero_image_2)

    def get_hero_image_3(self, obj):
        return self._resolve_url(obj.hero_image_3)

    def get_hero_images(self, obj):
        images = []
        if obj.hero_image:
            images.append(obj.hero_image.url)
        if obj.hero_image_2:
            images.append(obj.hero_image_2.url)
        if obj.hero_image_3:
            images.append(obj.hero_image_3.url)
        return images

    def get_about_image(self, obj):
        return self._resolve_url(obj.about_image)

    def get_facility_image(self, obj):
        return self._resolve_url(obj.facility_image)


class ProductCategorySerializer(serializers.ModelSerializer):
    products_count = serializers.IntegerField(source='products.count', read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProductCategory
        fields = ['id', 'name', 'slug', 'subtitle', 'description', 'icon', 'image', 'order', 'products_count']

    def get_image(self, obj):
        if not obj.image:
            return ''
        return obj.image.url


class FacilitySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    features_list = serializers.ListField(source='get_features_list', read_only=True)

    class Meta:
        model = Facility
        fields = [
            'id',
            'key_slug',
            'title',
            'subtitle',
            'badge',
            'image',
            'description',
            'features',
            'features_list',
            'capacity',
            'order',
            'is_active',
        ]

    def get_image(self, obj):
        if not obj.image:
            return ''
        return obj.image.url


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    animal_type_display = serializers.CharField(source='get_animal_type_display', read_only=True)
    temperature_state_display = serializers.CharField(source='get_temperature_state_display', read_only=True)
    packaging_type_display = serializers.CharField(source='get_packaging_type_display', read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, obj):
        if not obj.image:
            return ''
        return obj.image.url


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class QualityStandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = QualityStandard
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    featured_image = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = '__all__'

    def get_featured_image(self, obj):
        if not obj.featured_image:
            return ''
        return obj.featured_image.url


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = [
            'id',
            'full_name',
            'organization',
            'phone',
            'email',
            'inquiry_type',
            'estimated_tonnage',
            'message',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']
