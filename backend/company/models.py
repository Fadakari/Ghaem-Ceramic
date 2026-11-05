from django.db import models


class CompanySetting(models.Model):
    """
    تنظیمات هویتی و پایه‌ای شرکت بی‌سان سام یزد
    """
    company_name = models.CharField(max_length=200, default='شرکت بی‌سان سام یزد', verbose_name='نام شرکت')
    tagline = models.CharField(
        max_length=300,
        default='زنجیره یکپارچه فرآوری صنعتی، کنترل بهداشتی و توزیع گوشت و فرآورده‌های پروتئینی',
        verbose_name='شعار سازمانی'
    )
    established_year = models.CharField(max_length=20, default='۱۳۸۸', verbose_name='سال تأسیس')
    veterinary_code = models.CharField(max_length=100, default='IR-VET-984210', verbose_name='کد پروانه بهداشتی دامپزشکی')
    
    # Hero Section
    hero_title = models.CharField(
        max_length=250,
        default='تامین مستقیم و تخصصی گوشت گرم و فرآورده‌های پروتئینی با بالاترین استاندارد بهداشتی کشور',
        verbose_name='تیتر بخش هیرو'
    )
    hero_subtitle = models.TextField(
        default='تأمین پایدار انواع گوشت گرم گوساله، گوسفندی، شتر ممتاز یزد و ماکیان؛ پایش برخط زنجیره سرمایش و توزیع روزانه برای هتل‌ها، رستوران‌ها، سازمان‌ها و خانوار.',
        verbose_name='زیرتیتر بخش هیرو'
    )
    hero_badge = models.CharField(
        max_length=150,
        default='کشتارگاه صنعتی دارای رتبه کیفی A+ و نظارت مقیم سازمان دامپزشکی',
        verbose_name='مدال/بج هیرو'
    )
    hero_image = models.ImageField(upload_to='hero/', default='hero/hero-craft-meat.jpg', verbose_name='تصویر بخش هیرو')
    
    # Contact & Location
    phone_primary = models.CharField(max_length=50, default='035-38200000', verbose_name='تلفن مرکزی')
    phone_sales = models.CharField(max_length=50, default='035-38200001', verbose_name='تلفن واحد بازرگانی و فروش')
    phone_emergency = models.CharField(max_length=50, default='09130000000', verbose_name='خط مستقیم پشتیبانی و پیگیری')
    email = models.EmailField(default='info@bisansam.ir', verbose_name='ایمیل رسمی')
    address = models.CharField(
        max_length=300,
        default='یزد، شهرک صنعتی یزد، بلوار کارگر، خیابان صنایع غذایی، مجتمع فرآوری گوشت بی‌سان سام یزد',
        verbose_name='آدرس دفتر و کارخانه'
    )
    working_hours = models.CharField(
        max_length=150,
        default='شنبه تا چهارشنبه: ۷:۰۰ الی ۱۶:۰۰ | پنج‌شنبه: ۷:۰۰ الی ۱۳:۰۰ (توزیع شبانه‌روزی)',
        verbose_name='ساعات کاری'
    )
    
    # Stats
    annual_tonnage = models.CharField(max_length=50, default='۱۲,۰۰۰+ تن', verbose_name='ظرفیت تامین سالانه')
    active_centers = models.CharField(max_length=50, default='۱۸۰+ مرکز', verbose_name='مراکز طرف قرارداد فعال')
    cold_chain_temp = models.CharField(max_length=50, default='۰ تا ۲+ درجه', verbose_name='دمای پایش مداوم زنجیره سرد')
    satisfaction_rate = models.CharField(max_length=50, default='۹۹.۴٪', verbose_name='شاخص رضایت مشتریان')

    # About Content
    about_story = models.TextField(
        default='شرکت بی‌سان سام یزد به عنوان یکی از پیشگامان صنعت فرآوری بهداشتی دام و طیور در مرکز کشور، با بهره‌گیری از خطوط کشتارگاهی مکانیزه، سالن‌های قطعه‌بندی تمام‌استیل، سردخانه‌های آمونیاکی مدرن و ناوگان اختصاصی مجهز به تله‌متری دما، زنجیره تامین مطمئن، حلال و بهداشتی را در سراسر کشور فراهم آورده است.',
        verbose_name='متن درباره ما'
    )
    about_vision = models.TextField(
        default='تضمین سلامت پایدار جامعه با عرضه فرآورده‌های پروتئینی فاقد هرگونه نگهدارنده، اصلاح نژاد بومی و حفظ بالاترین رتبه‌های استاندارد بهداشتی بین‌المللی.',
        verbose_name='چشم‌انداز و مأموریت'
    )
    about_image = models.ImageField(upload_to='facilities/', default='facilities/livestock-ranch.jpg', verbose_name='تصویر درباره ما')
    facility_image = models.ImageField(upload_to='facilities/', default='facilities/cold-chain-facility.jpg', verbose_name='تصویر تاسیسات')

    class Meta:
        verbose_name = 'تنظیمات شرکت و سایت'
        verbose_name_plural = 'تنظیمات شرکت و سایت'

    def __str__(self):
        return self.company_name


class ProductCategory(models.Model):
    """
    دسته‌بندی‌های تخصصی فرآورده‌های دامی و پروتئینی
    """
    name = models.CharField(max_length=150, verbose_name='نام دسته‌بندی')
    slug = models.SlugField(max_length=150, unique=True, allow_unicode=True, verbose_name='اسلاگ URL')
    description = models.TextField(blank=True, verbose_name='توضیحات کوتاه')
    icon = models.CharField(max_length=50, default='meat', verbose_name='آیکون کلیدی')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'دسته‌بندی محصول'
        verbose_name_plural = 'دسته‌بندی‌های محصولات'

    def __str__(self):
        return self.name


class Product(models.Model):
    """
    مدل اصلی محصولات و برش‌های تخصصی گوشت
    """
    ANIMAL_CHOICES = [
        ('beef', 'گوساله نر پرواری'),
        ('lamb', 'گوسفند و بره کشتار روز'),
        ('camel', 'شتر درجه یک کویر یزد'),
        ('poultry', 'طیور و ماکیان تازه'),
        ('offal', 'آلایش خوراکی استریل'),
    ]

    TEMP_CHOICES = [
        ('chilled', 'گرم تازه (۰ تا ۴ درجه سانتی‌گراد)'),
        ('frozen', 'منجمد فوق‌سریع IQF (منفی ۱۸ درجه)'),
    ]

    PACKAGING_CHOICES = [
        ('map', 'بسته‌بندی اتمسفر اصلاح‌شده (MAP)'),
        ('vacuum', 'وکیوم ترموفرمینگ (Skin Pack)'),
        ('bulk_box', 'کارتن بهداشتی شرینک عمده'),
        ('carcass', 'لاشه کامل آویز با پلاک رهگیری دامپزشکی'),
    ]

    name = models.CharField(max_length=200, verbose_name='نام تجاری محصول')
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name='اسلاگ URL')
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, related_name='products', verbose_name='دسته‌بندی')
    
    animal_type = models.CharField(max_length=50, choices=ANIMAL_CHOICES, default='beef', verbose_name='نوع دام/طیور')
    cut_type = models.CharField(max_length=100, verbose_name='نوع قطعه/برش')
    temperature_state = models.CharField(max_length=50, choices=TEMP_CHOICES, default='chilled', verbose_name='وضعیت برودتی')
    packaging_type = models.CharField(max_length=50, choices=PACKAGING_CHOICES, default='map', verbose_name='شیوه بسته‌بندی')
    
    shelf_life = models.CharField(max_length=150, verbose_name='ماندگاری بهداشتی')
    weight_options = models.CharField(max_length=200, verbose_name='اوزان قابل عرضه')
    suitable_for = models.CharField(max_length=250, verbose_name='مناسب برای پخت')
    target_audience = models.CharField(max_length=200, default='خانوار، هتل‌ها و رستوران‌ها (HoReCa)، سازمان‌ها', verbose_name='گروه هدف')
    
    # Organoleptic & Quality Scores
    marbling_score = models.PositiveSmallIntegerField(default=4, verbose_name='امتیاز ماربلینگ (۱ تا ۵)')
    tenderness_rating = models.PositiveSmallIntegerField(default=5, verbose_name='شاخص نرمی و لطافت بافت (۱ تا ۵)')
    
    # Nutritional Info (per 100g)
    protein_per_100g = models.CharField(max_length=50, default='۲۲.۴ گرم', verbose_name='میزان پروتئین (در ۱۰۰ گرم)')
    fat_per_100g = models.CharField(max_length=50, default='۴.۲ گرم', verbose_name='میزان چربی (در ۱۰۰ گرم)')
    calories_per_100g = models.CharField(max_length=50, default='۱۴۲ کیلوکالری', verbose_name='کالری (در ۱۰۰ گرم)')
    
    # Descriptions
    description = models.TextField(verbose_name='توضیحات مشخصات و ویژگی‌های بافت')
    cooking_guide = models.TextField(blank=True, verbose_name='دستور پخت و توصیه سرآشپز')
    storage_instructions = models.TextField(
        default='در دمای ۰ الی ۴ درجه سانتی‌گراد درون یخچال یا منفی ۱۸ درجه در فریزر نگهداری شود. پیش از مصرف در یخچال یخ‌زدایی گردد.',
        verbose_name='دستورالعمل نگهداری'
    )
    
    image = models.ImageField(upload_to='products/', default='products/beef-sirloin.jpg', verbose_name='تصویر محصول')
    
    is_featured = models.BooleanField(default=True, verbose_name='نمایش در کاتالوگ منتخب صفحه اصلی')
    is_available = models.BooleanField(default=True, verbose_name='موجود در خط توزیع')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'محصول پروتئینی'
        verbose_name_plural = 'محصولات پروتئینی'

    def __str__(self):
        return f"{self.name} ({self.get_animal_type_display()})"


class Service(models.Model):
    """
    خدمات B2B، تامین سازمانی و امکانات کشتارگاهی
    """
    title = models.CharField(max_length=200, verbose_name='عنوان خدمت')
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name='اسلاگ URL')
    short_description = models.TextField(verbose_name='توضیح کوتاه')
    full_description = models.TextField(verbose_name='شرح کامل خدمت سازمانی')
    target_sector = models.CharField(max_length=200, verbose_name='بخش‌های هدف (HoReCa، بیمارستان‌ها و...)')
    benefits = models.TextField(help_text='ویژگی‌ها با خط تیره (-) جدا شوند', verbose_name='مزایای کلیدی')
    icon = models.CharField(max_length=50, default='truck', verbose_name='آیکون')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'خدمت سازمانی'
        verbose_name_plural = 'خدمات سازمانی'

    def __str__(self):
        return self.title


class QualityStandard(models.Model):
    """
    استانداردها، گواهینامه‌ها و تاییدیه‌های بهداشتی
    """
    title = models.CharField(max_length=200, verbose_name='عنوان استاندارد/گواهینامه')
    authority = models.CharField(max_length=200, verbose_name='مرجع صادرکننده')
    license_number = models.CharField(max_length=100, verbose_name='شماره ثبت / شناسه پروانه')
    description = models.TextField(verbose_name='شرح الزامات بهداشتی')
    badge_text = models.CharField(max_length=100, verbose_name='متن نشان اعتباری')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب')

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'استاندارد و گواهینامه'
        verbose_name_plural = 'استانداردها و گواهینامه‌ها'

    def __str__(self):
        return self.title


class Article(models.Model):
    """
    مقالات علمی، راهنمای سلامت گوشت و دانش پروتئین
    """
    title = models.CharField(max_length=250, verbose_name='عنوان مقاله')
    slug = models.SlugField(max_length=250, unique=True, allow_unicode=True, verbose_name='اسلاگ URL')
    category = models.CharField(max_length=100, verbose_name='دسته‌بندی مقاله')
    summary = models.TextField(verbose_name='خلاصه مقاله (متا دیسکریپشن)')
    content = models.TextField(verbose_name='متن کامل مقاله')
    featured_image = models.ImageField(upload_to='articles/', default='articles/fresh-meat-guide.jpg', verbose_name='تصویر شاخص')
    author = models.CharField(max_length=150, default='دکتر ناظر کنترل کیفی دامپزشکی', verbose_name='نویسنده')
    author_role = models.CharField(max_length=150, default='متخصص بهداشت مواد غذایی و فرآورده‌های دامی', verbose_name='سمت نویسنده')
    reading_time = models.CharField(max_length=50, default='۵ دقیقه', verbose_name='مدت زمان مطالعه')
    is_published = models.BooleanField(default=True, verbose_name='منتشر شده')
    published_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ انتشار')

    class Meta:
        ordering = ['-published_at']
        verbose_name = 'مقاله'
        verbose_name_plural = 'مقالات و دانشنامه'

    def __str__(self):
        return self.title


class FAQ(models.Model):
    """
    پرسش‌های متداول مشتریان خانگی و خریداران عمده سازمانی
    """
    question = models.CharField(max_length=300, verbose_name='پرسش')
    answer = models.TextField(verbose_name='پاسخ تخصصی')
    category = models.CharField(max_length=100, default='تامین عمده و بهداشت', verbose_name='دسته‌بندی پرسش')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب')

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'پرسش متداول'
        verbose_name_plural = 'پرسش‌های متداول'

    def __str__(self):
        return self.question


class ContactInquiry(models.Model):
    """
    استعلام‌های تامین عمده و پیام‌های ارتباطی و پشتیبانی
    """
    INQUIRY_TYPES = [
        ('wholesale_supply', 'تامین عمده ارگان‌ها و صنایع غذایی'),
        ('horeca_contract', 'قرارداد مستمر هتل‌ها، رستوران‌ها و کترینگ‌ها'),
        ('private_label', 'درخواست بسته‌بندی سفارشی (Private Label)'),
        ('veterinary_support', 'استعلام پروانه‌های بهداشتی و آزمایشگاهی'),
        ('general', 'سایر موارد و پشتیبانی'),
    ]

    full_name = models.CharField(max_length=150, verbose_name='نام و نام خانوادگی')
    organization = models.CharField(max_length=200, blank=True, verbose_name='نام سازمان / رستوران / واحد تجاری')
    phone = models.CharField(max_length=50, verbose_name='شماره تماس')
    email = models.EmailField(blank=True, verbose_name='ایمیل')
    inquiry_type = models.CharField(max_length=60, choices=INQUIRY_TYPES, default='wholesale_supply', verbose_name='نوع استعلام')
    estimated_tonnage = models.CharField(
        max_length=100,
        blank=True,
        default='حجم هفتگی ۱ الی ۵ تن',
        verbose_name='حجم سفارش یا تناژ درخواستی'
    )
    message = models.TextField(verbose_name='متن پیام و جزئیات نیاز')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='زمان ثبت')
    is_handled = models.BooleanField(default=False, verbose_name='بررسی و پیگیری شده توسط واحد فروش')

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'استعلام و پیام تماس'
        verbose_name_plural = 'استعلام‌ها و پیام‌های تماس'

    def __str__(self):
        return f"{self.full_name} - {self.get_inquiry_type_display()} ({self.created_at.strftime('%Y-%m-%d')})"
