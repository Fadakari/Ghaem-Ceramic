from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import (
    SiteSetting, KeyStat, CeramicAdvantage, CeramicProductForm,
    TechnicalProperty, ProductionStep, InstallationMethod,
    IndustrySector, ProjectTestimonial, ContactInquiry
)
from .serializers import (
    SiteSettingSerializer, KeyStatSerializer, CeramicAdvantageSerializer,
    CeramicProductFormSerializer, TechnicalPropertySerializer,
    ProductionStepSerializer, InstallationMethodSerializer,
    IndustrySectorSerializer, ProjectTestimonialSerializer,
    ContactInquirySerializer
)

class CompanyDataBundleView(APIView):
    """
    سریع‌ترین و جامع‌ترین اندپوینت برای دریافت کلیه اطلاعات سایت در یک ریکوئست
    بهینه‌سازی شده برای SSR / SSG در Next.js
    """
    def get(self, request):
        settings_obj = SiteSetting.objects.first()
        if not settings_obj:
            settings_obj = SiteSetting.objects.create()

        data = {
            'settings': SiteSettingSerializer(settings_obj).data,
            'stats': KeyStatSerializer(KeyStat.objects.all(), many=True).data,
            'advantages': CeramicAdvantageSerializer(CeramicAdvantage.objects.all(), many=True).data,
            'products': CeramicProductFormSerializer(CeramicProductForm.objects.all(), many=True).data,
            'specs': TechnicalPropertySerializer(TechnicalProperty.objects.all(), many=True).data,
            'production_steps': ProductionStepSerializer(ProductionStep.objects.all(), many=True).data,
            'installation_methods': InstallationMethodSerializer(InstallationMethod.objects.all(), many=True).data,
            'industries': IndustrySectorSerializer(IndustrySector.objects.all(), many=True).data,
            'testimonials': ProjectTestimonialSerializer(ProjectTestimonial.objects.all(), many=True).data,
        }
        return Response(data)


class ContactInquiryCreateView(generics.CreateAPIView):
    """
    ثبت درخواست مشاوره فنی، استعلام یا پیام کارفرمایان
    """
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                "success": True,
                "message": "درخواست شما با موفقیت ثبت شد. کارشناسان فنی سرامیک صنعت قائم به زودی با شما تماس خواهند گرفت.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )
