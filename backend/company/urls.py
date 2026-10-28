from django.urls import path
from .views import CompanyDataBundleView, ContactInquiryCreateView

urlpatterns = [
    path('bundle/', CompanyDataBundleView.as_view(), name='company-bundle'),
    path('contact/', ContactInquiryCreateView.as_view(), name='company-contact'),
]
