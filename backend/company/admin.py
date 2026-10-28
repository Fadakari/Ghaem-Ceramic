from django.contrib import admin
from .models import (
    SiteSetting, KeyStat, CeramicAdvantage, CeramicProductForm,
    TechnicalProperty, ProductionStep, InstallationMethod,
    IndustrySector, ProjectTestimonial, ContactInquiry
)

admin.site.site_header = "سامانه مدیریت محتوای شرکت سرامیک صنعت قائم"
admin.site.site_title = "پنل مدیریت سرامیک صنعت قائم"
admin.site.index_title = "مدیریت بخش‌ها، متون و مشخصات فنی سایت"

@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('company_name_fa', 'phone', 'email', 'updated_at')
    fieldsets = (
        ('اطلاعات عمومی شرکت', {
            'fields': ('company_name_fa', 'company_name_en', 'tagline', 'manager_name')
        }),
        ('بخش بنر و معرفی اصلی (Hero)', {
            'fields': ('hero_badge', 'hero_title', 'hero_subtitle')
        }),
        ('بخش درباره ما', {
            'fields': ('about_title', 'about_text_1', 'about_text_2')
        }),
        ('اطلاعات تماس و نشانی', {
            'fields': ('phone', 'fax', 'email', 'website', 'address')
        }),
        ('دانلودها و سئو', {
            'fields': ('catalog_title', 'catalog_url', 'meta_title', 'meta_description')
        }),
    )

    def has_add_permission(self, request):
        # Only allow 1 instance of SiteSetting
        return SiteSetting.objects.count() == 0

@admin.register(KeyStat)
class KeyStatAdmin(admin.ModelAdmin):
    list_display = ('label', 'value', 'sublabel', 'order')
    list_editable = ('value', 'order')
    search_fields = ('label', 'value')

@admin.register(CeramicAdvantage)
class CeramicAdvantageAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon_name', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'hardox_comparison')

@admin.register(CeramicProductForm)
class CeramicProductFormAdmin(admin.ModelAdmin):
    list_display = ('code', 'name_fa', 'name_en', 'category', 'order')
    list_editable = ('order',)
    search_fields = ('code', 'name_fa', 'name_en', 'applications')

@admin.register(TechnicalProperty)
class TechnicalPropertyAdmin(admin.ModelAdmin):
    list_display = ('name_fa', 'value', 'category', 'standard_ref', 'order')
    list_filter = ('category',)
    list_editable = ('value', 'order')
    search_fields = ('name_fa', 'name_en', 'value')

@admin.register(ProductionStep)
class ProductionStepAdmin(admin.ModelAdmin):
    list_display = ('step_number', 'title', 'headline', 'equipment', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'headline', 'description')

@admin.register(InstallationMethod)
class InstallationMethodAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'specifications')

@admin.register(IndustrySector)
class IndustrySectorAdmin(admin.ModelAdmin):
    list_display = ('title', 'equipments', 'icon_name', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description', 'equipments')

@admin.register(ProjectTestimonial)
class ProjectTestimonialAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'project_title', 'result_highlight', 'letter_number', 'verified', 'order')
    list_filter = ('verified',)
    list_editable = ('order', 'verified')
    search_fields = ('client_name', 'project_title', 'result_highlight', 'quote')

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'company_name', 'phone', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    list_editable = ('is_read',)
    search_fields = ('full_name', 'company_name', 'phone', 'email', 'message')
    readonly_fields = ('created_at',)
