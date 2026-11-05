from django.contrib import admin
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


@admin.register(CompanySetting)
class CompanySettingAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'established_year', 'veterinary_code', 'phone_sales')

    def has_add_permission(self, request):
        if CompanySetting.objects.exists():
            return False
        return True


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'icon', 'order')
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ('order',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'category',
        'animal_type',
        'cut_type',
        'temperature_state',
        'packaging_type',
        'is_featured',
        'is_available',
        'order',
    )
    list_filter = ('category', 'animal_type', 'temperature_state', 'packaging_type', 'is_featured', 'is_available')
    search_fields = ('name', 'cut_type', 'description', 'suitable_for')
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ('is_featured', 'is_available', 'order')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'target_sector', 'order')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('order',)


@admin.register(QualityStandard)
class QualityStandardAdmin(admin.ModelAdmin):
    list_display = ('title', 'authority', 'license_number', 'badge_text', 'order')
    list_editable = ('order',)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'reading_time', 'is_published', 'published_at')
    list_filter = ('category', 'is_published')
    search_fields = ('title', 'summary', 'content')
    prepopulated_fields = {'slug': ('title',)}


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'order')
    list_filter = ('category',)
    list_editable = ('order',)


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'organization', 'phone', 'inquiry_type', 'estimated_tonnage', 'is_handled', 'created_at')
    list_filter = ('inquiry_type', 'is_handled', 'created_at')
    search_fields = ('full_name', 'organization', 'phone', 'message')
    list_editable = ('is_handled',)
    readonly_fields = ('created_at',)


admin.site.site_header = "سامانه مدیریت محتوای شرکت بی‌سان سام یزد"
admin.site.site_title = "پنل مدیریت بی‌سان سام یزد"
admin.site.index_title = "میز کار مدیریت فرآورده‌های پروتئینی و تامین سازمانی"
