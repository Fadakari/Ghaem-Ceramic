from django.urls import path
from .views import (
    CompanyDataBundleView,
    ProductListView,
    ProductDetailView,
    ServiceListView,
    ArticleListView,
    ArticleDetailView,
    ContactInquiryCreateView,
)

urlpatterns = [
    path('bundle/', CompanyDataBundleView.as_view(), name='company-bundle'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<str:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('services/', ServiceListView.as_view(), name='service-list'),
    path('articles/', ArticleListView.as_view(), name='article-list'),
    path('articles/<str:slug>/', ArticleDetailView.as_view(), name='article-detail'),
    path('contact/', ContactInquiryCreateView.as_view(), name='company-contact'),
]
