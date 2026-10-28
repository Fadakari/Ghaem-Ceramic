from django.db import models

class SiteSetting(models.Model):
    """تنظیمات کلی و اطلاعات اصلی وب‌سایت سرامیک صنعت قائم"""
    company_name_fa = models.CharField(max_length=200, default="شرکت سرامیک صنعت قائم", verbose_name="نام شرکت (فارسی)")
    company_name_en = models.CharField(max_length=200, default="Ghaem Ceramic Industry", verbose_name="نام شرکت (انگلیسی)")
    tagline = models.CharField(max_length=300, default="تولیدکننده تخصصی قطعات و سرامیک‌های ضد سایش آلومینایی میکروبلورین", verbose_name="شعار یا معرفی کوتاه")
    
    hero_badge = models.CharField(max_length=150, default="پیشگام بومی‌سازی پوشش‌های ضد سایش در صنایع سنگین کشور", verbose_name="نشان بالای هدر")
    hero_title = models.CharField(max_length=250, default="پوشش‌های فوق‌مقاوم سرامیکی؛ پایان استهلاک و توقف خطوط تولید صنعتی", verbose_name="عنوان اصلی صفحه نخست")
    hero_subtitle = models.TextField(default="جایگزین قطعی فولادهای هاردوکس با سختی ۹ موهس، مقاومت حرارتی تا ۸۰۰ درجه و حداقل ۴ برابر طول عمر بیشتر در مواجهه با شدیدترین سایش‌ها و محیط‌های خورنده شیمیایی.", verbose_name="زیرعنوان هدر")
    
    about_title = models.CharField(max_length=250, default="بیش از یک دهه نوآوری و مهندسی مواد پیشرفته در صنایع سنگین", verbose_name="عنوان درباره ما")
    about_text_1 = models.TextField(default="شرکت سرامیک صنعت قائم از سال ۱۳۹۰ به عنوان تخصصی‌ترین واحد مشاوره، طراحی، تولید، تأمین و نصب سرامیک‌های ضد سایش آلومینایی در کشور فعالیت خود را آغاز نموده است.", verbose_name="متن درباره ما - بخش اول")
    about_text_2 = models.TextField(default="همواره در صنایع بزرگ نظیر فولاد، سیمان، مس و پتروشیمی، سایش و خوردگی مداوم ماشین‌آلات هزینه‌های گزافی به واسطه توقف‌های مکرر خط تولید تحمیل می‌کند. استفاده از فلزات ضد سایش مانند هاردوکس به دلیل ضعف در برابر حرارت، اسیدها و مواد خورنده پاسخگوی نیاز نیست. سرامیک‌های آلومینایی قائم با تکیه بر فرمولاسیون نوین و پخت در کوره تونلی ۱۶۰۰ درجه، جایگزین مطمئنی است که طول عمر تجهیزات را چند برابر افزایش می‌دهد.", verbose_name="متن درباره ما - بخش دوم")
    
    phone = models.CharField(max_length=50, default="035-37301340", verbose_name="تلفن تماس")
    fax = models.CharField(max_length=50, default="035-37301320", verbose_name="فکس")
    email = models.EmailField(default="sales.csgh@gmail.com", verbose_name="پست الکترونیک")
    website = models.CharField(max_length=100, default="www.pssgh.ir", verbose_name="آدرس وب‌سایت")
    address = models.CharField(max_length=300, default="یزد، بلوار پاسداران، مجتمع مهران، طبقه ۳، واحد D31", verbose_name="نشانی دفتر مرکزی")
    manager_name = models.CharField(max_length=100, default="جناب آقای مهندس زارع", verbose_name="مدیریت شرکت")
    
    catalog_title = models.CharField(max_length=150, default="کاتالوگ جامع مهندسی سرامیک صنعت قائم", verbose_name="عنوان کاتالوگ")
    catalog_url = models.CharField(max_length=300, blank=True, default="", verbose_name="لینک مستقیم دانلود کاتالوگ")
    
    meta_title = models.CharField(max_length=250, default="شرکت سرامیک صنعت قائم | سرامیک‌های ضد سایش آلومینا و جایگزین هاردوکس", verbose_name="عنوان سئو (Title)")
    meta_description = models.TextField(default="تولید تخصصی انواع لاینرها، تایل‌ها، موزاییک‌های شش ضلعی و قطعات سرامیکی ضد سایش آلومینایی با سختی ۹ موهس برای شوت‌ها، هاپرها و لوله‌های صنایع فولاد، مس، سیمان و پتروشیمی.", verbose_name="توضیحات سئو (Description)")
    
    updated_at = models.DateTimeField(auto_now=True, verbose_name="تاریخ آخرین بروزرسانی")

    class Meta:
        verbose_name = "تنظیمات وب‌سایت و متون اصلی"
        verbose_name_plural = "تنظیمات وب‌سایت و متون اصلی"

    def __str__(self):
        return self.company_name_fa


class KeyStat(models.Model):
    """آمارهای کلیدی جهت جلب اعتماد و نمایش در بخش آمار و ارقام"""
    value = models.CharField(max_length=50, verbose_name="مقدار / عدد شاخص (مثلاً +۴x یا ۹۹.۲٪)")
    label = models.CharField(max_length=150, verbose_name="عنوان شاخص")
    sublabel = models.CharField(max_length=150, blank=True, default="", verbose_name="توضیح تکمیلی کوتاه")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "شاخص و آمار کلیدی"
        verbose_name_plural = "شاخص‌ها و آمارهای کلیدی"
        ordering = ['order']

    def __str__(self):
        return f"{self.label}: {self.value}"


class CeramicAdvantage(models.Model):
    """مزایای رقابتی سرامیک ضد سایش نسبت به فلزات مانند هاردوکس"""
    title = models.CharField(max_length=200, verbose_name="عنوان مزیت")
    description = models.TextField(verbose_name="شرح مهندسی و مزیت")
    hardox_comparison = models.TextField(blank=True, default="", verbose_name="مقایسه با فلزات ضد سایش و هاردوکس")
    icon_name = models.CharField(max_length=50, default="ShieldCheck", verbose_name="نام آیکون")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "مزیت رقابتی و ویژگی برتر"
        verbose_name_plural = "مزایای رقابتی سرامیک نسبت به هاردوکس"
        ordering = ['order']

    def __str__(self):
        return self.title


class CeramicProductForm(models.Model):
    """انواع اشکال و قطعات سرامیکی (لاینر، موزاییک، لاینر لوله، تیغه و...)"""
    code = models.CharField(max_length=50, verbose_name="کد قطعه (مثلاً PARY WE-AT)")
    name_fa = models.CharField(max_length=150, verbose_name="نام فارسی قطعه")
    name_en = models.CharField(max_length=150, verbose_name="نام انگلیسی قطعه")
    category = models.CharField(max_length=100, default="قطعات استاندارد ضد سایش", verbose_name="دسته‌بندی")
    short_desc = models.CharField(max_length=300, verbose_name="خلاصه کاربرد")
    full_desc = models.TextField(verbose_name="توضیحات فنی و مهندسی کامل")
    dimensions = models.TextField(verbose_name="ابعاد و اندازه‌های در دسترس (Available Sizes)")
    applications = models.TextField(verbose_name="تجهیزات و کاربردهای رایج")
    industries = models.CharField(max_length=300, verbose_name="صنایع هدف")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "نوع قطعه و فرم سرامیکی"
        verbose_name_plural = "اشکال و فرم‌های سرامیک‌های ضد سایش"
        ordering = ['order']

    def __str__(self):
        return f"{self.code} - {self.name_fa}"


class TechnicalProperty(models.Model):
    """مشخصات فنی و خواص فیزیکی و شیمیایی (آنالیز آزمایشگاهی)"""
    CATEGORY_CHOICES = [
        ('chemical', 'خواص شیمیایی'),
        ('physical', 'خواص فیزیکی'),
        ('mechanical', 'خواص مکانیکی و مقاومت'),
    ]
    name_fa = models.CharField(max_length=150, verbose_name="نام پارامتر (فارسی)")
    name_en = models.CharField(max_length=150, verbose_name="نام پارامتر (انگلیسی)")
    value = models.CharField(max_length=100, verbose_name="مقدار استاندارد")
    standard_ref = models.CharField(max_length=100, blank=True, default="", verbose_name="استاندارد مرجع یا روش آزمون")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='physical', verbose_name="دسته بندی")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "مشخصه فنی و آزمایشی"
        verbose_name_plural = "مشخصات فنی و آزمایشگاهی سرامیک‌ها"
        ordering = ['order']

    def __str__(self):
        return f"{self.name_fa} ({self.value})"


class ProductionStep(models.Model):
    """مراحل خط تولید پیشرفته (فرآیند دانش‌بنیان)"""
    step_number = models.PositiveIntegerField(verbose_name="شماره مرحله")
    title = models.CharField(max_length=150, verbose_name="عنوان مرحله")
    headline = models.CharField(max_length=200, verbose_name="تیتر برجسته مرحله")
    description = models.TextField(verbose_name="شرح فرآیند و کنترل کیفیت")
    equipment = models.CharField(max_length=150, blank=True, default="", verbose_name="تجهیزات و ماشین‌آلات کلیدی")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "مرحله خط تولید"
        verbose_name_plural = "مراحل فرآیند تولید و کنترل کیفی"
        ordering = ['order', 'step_number']

    def __str__(self):
        return f"مرحله {self.step_number}: {self.title}"


class InstallationMethod(models.Model):
    """روش‌های نصب تخصصی سرامیک‌ها (جوش، چسب، ترکیبی)"""
    title = models.CharField(max_length=150, verbose_name="عنوان روش نصب")
    subtitle = models.CharField(max_length=200, verbose_name="تجهیزات و محل‌های کاربرد")
    description = models.TextField(verbose_name="شرح نحوه اجرا")
    specifications = models.TextField(verbose_name="نکات کلیدی، دما، زمان گیرش و شرایط سطح")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "دستورالعمل و روش نصب"
        verbose_name_plural = "دستورالعمل‌ها و روش‌های نصب مهندسی"
        ordering = ['order']

    def __str__(self):
        return self.title


class IndustrySector(models.Model):
    """صنایع هدف تحت پوشش"""
    title = models.CharField(max_length=150, verbose_name="نام صنعت")
    description = models.TextField(verbose_name="شرح نقاط سایش و راهکار سرامیک")
    equipments = models.TextField(verbose_name="تجهیزات هدف (شوت، هاپر، زانویی و...)")
    icon_name = models.CharField(max_length=50, default="Factory", verbose_name="نام آیکون")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "صنعت هدف"
        verbose_name_plural = "صنایع و کاربردهای صنعتی"
        ordering = ['order']

    def __str__(self):
        return self.title


class ProjectTestimonial(models.Model):
    """گواهی‌های رسمی حسن انجام کار و پروژه‌های اجرا شده"""
    client_name = models.CharField(max_length=200, verbose_name="نام کارفرما / مجتمع صنعتی")
    project_title = models.CharField(max_length=200, verbose_name="عنوان پروژه و بخش تجهیز شده")
    quote = models.TextField(verbose_name="متن گواهی یا نتیجه عملکرد")
    result_highlight = models.CharField(max_length=200, verbose_name="نتیجه برجسته (مثلاً: ۵ برابر طول عمر نسبت به هاردوکس)")
    letter_number = models.CharField(max_length=100, blank=True, default="", verbose_name="شماره نامه رسمی")
    letter_date = models.CharField(max_length=50, blank=True, default="", verbose_name="تاریخ نامه")
    signer = models.CharField(max_length=150, blank=True, default="", verbose_name="مقام امضاکننده")
    verified = models.BooleanField(default=True, verbose_name="دارای تأییدیه رسمی")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "گواهی حسن انجام کار و پروژه"
        verbose_name_plural = "گواهی‌های حسن انجام کار و پروژه‌ها"
        ordering = ['order']

    def __str__(self):
        return f"{self.client_name} - {self.result_highlight}"


class ContactInquiry(models.Model):
    """پیام‌ها و درخواست‌های مشاوره فنی ثبت شده توسط مخاطبان و مدیران کارخانجات"""
    full_name = models.CharField(max_length=150, verbose_name="نام و نام خانوادگی")
    company_name = models.CharField(max_length=150, blank=True, default="", verbose_name="شرکت یا واحد صنعتی")
    phone = models.CharField(max_length=50, verbose_name="شماره تماس")
    email = models.EmailField(blank=True, default="", verbose_name="پست الکترونیک")
    subject = models.CharField(max_length=200, verbose_name="موضوع استعلام یا مشاوره")
    message = models.TextField(verbose_name="متن پیام و شرایط پروژه")
    is_read = models.BooleanField(default=False, verbose_name="بررسی شده توسط کارفرما")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت درخواست")

    class Meta:
        verbose_name = "درخواست مشاوره و پیام تماس"
        verbose_name_plural = "درخواست‌های مشاوره و پیام‌های تماس"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.full_name} ({self.company_name or 'شخصی'}) - {self.subject}"
