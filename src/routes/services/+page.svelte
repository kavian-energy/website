<script lang="ts">
  const services = [
    {
      id: 'consultation',
      icon: '💼',
      title: 'مشاوره و طراحی',
      description: 'تحلیل دقیق نیازهای انرژی و طراحی راهکار شخصی‌شده',
      features: [
        'بررسی جامع مصرف انرژی',
        'تحلیل فنی و اقتصادی',
        'طراحی سیستم بهینه',
        'مطالعات امکان‌سنجی',
        'تخمین کمی کننده تکنولوژی',
      ],
    },
    {
      id: 'installation',
      icon: '🔧',
      title: 'نصب و راه‌اندازی',
      description: 'نصب حرفه‌ای سیستم‌های برقی و انرژی',
      features: [
        'نصب و رفع تخصصی',
        'تست‌های کیفی و ایمنی',
        'آموزش تیم مشتری',
        'راه‌اندازی سیستم',
        'مستندسازی کامل',
      ],
    },
    {
      id: 'maintenance',
      icon: '🛡️',
      title: 'پشتیبانی و نگهداری',
      description: 'خدمات پشتیبانی ۲۴/۷ و نگهداری مستمر',
      features: [
        'نظارت سیستم ۲۴/۷',
        'نگهداری پیشگیرانه',
        'رفع خرابی سریع',
        'جایگزینی قطعات',
        'گزارش عملکرد ماهانه',
      ],
    },
    {
      id: 'optimization',
      icon: '📊',
      title: 'بهینه‌سازی عملیاتی',
      description: 'افزایش کارایی و کاهش هزینه‌های تشغیل',
      features: [
        'تحلیل داده‌های عملیاتی',
        'پیش‌بینی مصرف',
        'بهینه‌سازی زمان‌بندی',
        'مدیریت انرژی هوشمند',
        'کاهش ۲۰-۳۰% مصرف',
      ],
    },
    {
      id: 'training',
      icon: '📚',
      title: 'آموزش و توان‌سازی',
      description: 'آموزش تیم متخصص برای استفاده بهینه',
      features: [
        'آموزش برخورد صحیح',
        'تشخیص خرابی‌ها',
        'بهینه‌سازی مصرف',
        'ایمنی و حفاظت',
        'سرتیفیکه‌شدگی استانداردی',
      ],
    },
    {
      id: 'consulting',
      icon: '🌍',
      title: 'مشاوره راهبردی',
      description: 'راهنمایی در انتخاب فناوری درست',
      features: [
        'تحلیل بازار و روند',
        'مقایسه فناوری‌ها',
        'برنامه‌ریزی دراز‌مدت',
        'استراتژی سرمایه‌گذاری',
        'بررسی میزان بازده',
      ],
    },
  ];
</script>

<svelte:head>
  <title>خدمات کاویان انرژی</title>
  <meta
    name="description"
    content="خدمات جامع کاویان انرژی: مشاوره، طراحی، نصب، نگهداری و بهینه‌سازی سیستم‌های انرژی"
  />
</svelte:head>

<div class="page-wrapper">
  <section class="services-hero">
    <div class="container-custom">
      <div class="hero-content">
        <h1 class="heading-xl">خدمات جامع انرژی</h1>
        <p class="hero-subtitle">
          از مشاوره تا پشتیبانی ۲۴/۷، تمام چیزی که برای انتقال موفق به انرژی پاک نیاز دارید
        </p>
      </div>
    </div>
  </section>

  <section class="services-list section-padding">
    <div class="container-custom">
      <div class="services-grid">
        {#each services as service}
          <div class="service-card">
            <div class="card-header">
              <div class="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>

            <p class="service-description">{service.description}</p>

            <div class="features-list">
              <h4>ویژگی‌ها:</h4>
              <ul>
                {#each service.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            </div>

            <a href="/contact?service={service.id}" class="btn-outline">
              درخواست خدمت
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="process-section section-padding">
    <div class="container-custom">
      <h2 class="heading-lg section-title">روند کار ما</h2>

      <div class="process-timeline">
        <div class="timeline-item">
          <div class="timeline-number">۱</div>
          <h3>مشاوره اولیه</h3>
          <p>تماس اولیه و بررسی نیازهای اولیه شما</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-number">۲</div>
          <h3>تحلیل دقیق</h3>
          <p>بررسی جامع شامل بازدید محل و تحلیل داده‌ها</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-number">۳</div>
          <h3>طراحی راهکار</h3>
          <p>ارائه پیشنهاد شخصی‌شده و برنامه اجرایی</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-number">۴</div>
          <h3>اجرا و نصب</h3>
          <p>نصب حرفه‌ای و آموزش تیم شما</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-number">۵</div>
          <h3>پشتیبانی مستمر</h3>
          <p>نظارت و پشتیبانی دراز‌مدت</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section section-padding">
    <div class="container-custom">
      <div class="cta-content">
        <h2 class="heading-lg">آماده‌اید یک خدمت انتخاب کنید؟</h2>
        <p class="body-lg">
          تیم متخصص ما منتظر شنیدن از شما است
        </p>
        <a href="/contact" class="btn-primary">تماس با ما</a>
      </div>
    </div>
  </section>
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .services-hero {
    margin-top: -72px;
    padding: 200px 0 100px;
    background: linear-gradient(
      135deg,
      rgba(21, 88, 255, 0.1) 0%,
      rgba(0, 230, 118, 0.05) 100%
    );
    border-bottom: 1px solid var(--border);
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .services-hero .heading-xl {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .services-list {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 230, 118, 0.03) 100%);
    border-bottom: 1px solid var(--border);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .service-card {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: all 0.3s ease;
  }

  .service-card:hover {
    border-color: rgba(21, 88, 255, 0.3);
    background: rgba(21, 88, 255, 0.05);
    transform: translateY(-4px);
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .service-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .card-header h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
  }

  .service-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
  }

  .features-list {
    flex-grow: 1;
  }

  .features-list h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 0.8rem;
  }

  .features-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .features-list li {
    color: var(--text-muted);
    font-size: 0.9rem;
    padding-right: 1.2rem;
    position: relative;
  }

  .features-list li::before {
    content: '✓';
    position: absolute;
    right: 0;
    color: var(--accent-green);
    font-weight: bold;
  }

  .process-section {
    background: linear-gradient(
      135deg,
      rgba(21, 88, 255, 0.05) 0%,
      rgba(0, 230, 118, 0.05) 100%
    );
    border-bottom: 1px solid var(--border);
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .process-timeline {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    position: relative;
  }

  .process-timeline::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-blue), transparent);
    z-index: 0;
    display: none;
  }

  @media (min-width: 1024px) {
    .process-timeline::before {
      display: block;
    }
  }

  .timeline-item {
    position: relative;
    text-align: center;
    padding: 2rem 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    z-index: 1;
    transition: all 0.3s ease;
  }

  .timeline-item:hover {
    border-color: rgba(0, 230, 118, 0.3);
    background: rgba(0, 230, 118, 0.03);
    transform: translateY(-4px);
  }

  .timeline-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-green));
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 50%;
  }

  .timeline-item h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.5rem;
  }

  .timeline-item p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  .cta-section {
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1) 0%, rgba(0, 230, 118, 0.08) 100%);
    border-top: 1px solid var(--border);
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-content .heading-lg {
    margin-bottom: 1rem;
  }

  .cta-content .body-lg {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .services-hero {
      padding: 120px 0 60px;
    }

    .services-grid {
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .process-timeline {
      gap: 1.5rem;
    }

    .timeline-item {
      padding: 1.5rem 1rem;
    }
  }
</style>
