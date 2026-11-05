from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q

from .models import (
    CompanySetting,
    ProductCategory,
    Product,
    Service,
    QualityStandard,
    Article,
    FAQ,
    ContactInquiry,
)
from .serializers import (
    CompanySettingSerializer,
    ProductCategorySerializer,
    ProductSerializer,
    ServiceSerializer,
    QualityStandardSerializer,
    ArticleSerializer,
    FAQSerializer,
    ContactInquirySerializer,
)


class CompanyDataBundleView(APIView):
    """
    سرویس داده‌های کلیدی و جامع برای صفحه اصلی و مقداردهی اولیه فرانت‌اند
    """
    def get(self, request, *args, **kwargs):
        settings_obj = CompanySetting.objects.first()
        if not settings_obj:
            settings_obj = CompanySetting.objects.create()

        context = {'request': request}
        settings_data = CompanySettingSerializer(settings_obj, context=context).data
        categories = ProductCategorySerializer(ProductCategory.objects.all(), many=True, context=context).data
        featured_products = ProductSerializer(
            Product.objects.filter(is_featured=True, is_available=True)[:12],
            many=True,
            context=context
        ).data
        all_products = ProductSerializer(
            Product.objects.filter(is_available=True),
            many=True,
            context=context
        ).data
        services = ServiceSerializer(Service.objects.all()[:6], many=True, context=context).data
        standards = QualityStandardSerializer(QualityStandard.objects.all()[:6], many=True, context=context).data
        articles = ArticleSerializer(Article.objects.filter(is_published=True)[:6], many=True, context=context).data
        faqs = FAQSerializer(FAQ.objects.all()[:8], many=True, context=context).data

        return Response({
            'settings': settings_data,
            'categories': categories,
            'featured_products': featured_products,
            'products': all_products,
            'services': services,
            'standards': standards,
            'articles': articles,
            'faqs': faqs,
        })


class ProductListView(generics.ListAPIView):
    """
    لیست محصولات همراه با جستجو و فیلترهای پیشرفته
    """
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.filter(is_available=True)
        
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(Q(category__slug=category) | Q(category__name=category))

        animal = self.request.query_params.get('animal')
        if animal:
            queryset = queryset.filter(animal_type=animal)

        temp = self.request.query_params.get('temp')
        if temp:
            queryset = queryset.filter(temperature_state=temp)

        packaging = self.request.query_params.get('packaging')
        if packaging:
            queryset = queryset.filter(packaging_type=packaging)

        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(cut_type__icontains=search) |
                Q(suitable_for__icontains=search) |
                Q(description__icontains=search)
            )

        return queryset


class ProductDetailView(generics.RetrieveAPIView):
    """
    مشاهده جزئیات یک محصول از روی اسلاگ
    """
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    queryset = Product.objects.all()


class ServiceListView(generics.ListAPIView):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class ArticleListView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    
    def get_queryset(self):
        queryset = Article.objects.filter(is_published=True)
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset


class ArticleDetailView(generics.RetrieveAPIView):
    serializer_class = ArticleSerializer
    lookup_field = 'slug'
    queryset = Article.objects.filter(is_published=True)


class ContactInquiryCreateView(generics.CreateAPIView):
    """
    ثبت استعلام یا پیام پشتیبانی
    """
    serializer_class = ContactInquirySerializer
    queryset = ContactInquiry.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {
                'status': 'success',
                'message': 'استعلام شما با موفقیت ثبت شد. کارشناسان بازرگانی بی‌سان سام در اسرع وقت با شما تماس خواهند گرفت.',
                'data': serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )
