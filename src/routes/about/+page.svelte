<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const values = [
    {
      icon: '💡',
      title: 'نوآوری',
      description: 'استفاده از تازه‌ترین فناوری‌های انرژی',
    },
    {
      icon: '🌱',
      title: 'پایداری',
      description: 'تعهد به حفاظت از محیط‌زیست',
    },
    {
      icon: '🤝',
      title: 'مسئولیت پذیری',
      description: 'پشتیبانی دائمی برای مشتریان',
    },
    {
      icon: '⭐',
      title: 'کیفیت',
      description: 'محصولات با استانداردهای جهانی',
    },
  ];

  const achievements = [
    { number: '+۳۰۰', text: 'پروژه موفق' },
    { number: '+۵۰۰', text: 'مشتری راضی' },
    { number: '+۱۰۰۰۰', text: 'مگاوات نصب‌شده' },
    { number: '+۱۰', text: 'سال تجربه' },
  ];

  let statsRef: HTMLDivElement;
  let statsItemsRef: HTMLElement[] = [];

  onMount(() => {
    // Stats counter animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statsItemsRef.forEach((item, idx) => {
            const numberEl = item.querySelector('.stat-number') as HTMLElement;
            const finalNumber = parseInt(numberEl.textContent?.replace(/\D/g, '') || '0');

            gsap.to(numberEl, {
              innerHTML: finalNumber,
              duration: 2.5,
              snap: { innerHTML: 1 },
              stagger: 0.1,
              ease: 'power2.out',
            });
          });
          observer.unobserve(entry.target);
        }
      });
    });

    if (statsRef) {
      observer.observe(statsRef);
    }
  });
</script>

<svelte:head>
  <title>درباره کاویان انرژی — نماینده رسمی eMAPNA</title>
  <meta
    name="description"
    content="بیشتر درباره کاویان انرژی، نماینده رسمی eMAPNA و تجربه ۱۰+ سال در حوزه انرژی پاک و برقی‌سازی"
  />
</svelte:head>

<div class="page-wrapper">
  <section class="about-hero">
    <div class="container-custom">
      <div class="hero-content">
        <h1 class="heading-xl">درباره کاویان انرژی</h1>
        <p class="hero-subtitle">
          متعهد به تحول انرژی و توسعه راهکارهای نوین برای آینده‌ای پایدار
        </p>
      </div>
    </div>
  </section>

  <section class="story-section section-padding">
    <div class="container-custom">
      <div class="story-grid">
        <div class="story-content">
          <h2 class="heading-lg">داستان ما</h2>
          <p class="body-lg">
            بهینه‌سازی انرژی کاویان در سال ۱۴۰۲ با هدفی واضح تاسیس شد: ارائه راهکارهای مدرن برای مشکلات
            انرژی در کشور.
          </p>
          <p class="body-md">
            با تحقیقات گسترده و همکاری با کارشناسان خارجی، ما موفق شدیم به نماینده رسمی eMAPNA تبدیل شویم
            و بیش از ۳۰۰ پروژه بزرگ را اجرا کنیم.
          </p>
          <p class="body-md">
            امروزه، کاویان انرژی یکی از برترین ارائه‌دهندگان راهکارهای انرژی در منطقه شرق است و به بیش از
            ۵۰۰ مشتری شامل صنایع بزرگ، شهرداری‌ها و بنگاه‌های دولتی و خصوصی خدمت می‌دهد.
          </p>
        </div>
        <div class="story-stats" bind:this={statsRef}>
          {#each achievements as stat, idx}
            <div class="stat-item" bind:this={statsItemsRef[idx]}>
              <div class="stat-number">{stat.number}</div>
              <div class="stat-text">{stat.text}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="mission-section section-padding">
    <div class="container-custom">
      <div class="mission-grid">
        <div class="mission-card">
          <div class="mission-icon">🎯</div>
          <h3 class="heading-md">مشن ما</h3>
          <p>
            ارائه تجهیزات و خدمات فنی برتر برای تحقق اهداف انرژی پاک و بهینه‌سازی مصرف برای صنایع و
            سازمان‌ها
          </p>
        </div>

        <div class="mission-card">
          <div class="mission-icon">🌟</div>
          <h3 class="heading-md">دیدگاه ما</h3>
          <p>
            جهانی که انرژی تجدیدپذیر در آن نقش اصلی ایفا می‌کند و از هدر رفتن انرژی و آثار منفی زیست
            محیطی جلوگیری شده است
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="values-section section-padding">
    <div class="container-custom">
      <div class="values-header">
        <h2 class="heading-lg">ارزش‌های ما</h2>
        <p class="section-description">
          اصول اساسی که تمام تصمیمات و اقدامات ما را هدایت می‌کند
        </p>
      </div>

      <div class="values-grid">
        {#each values as value}
          <div class="value-card">
            <div class="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="services-section section-padding">
    <div class="container-custom">
      <h2 class="heading-lg section-title">خدمات ما</h2>

      <div class="services-grid">
        <div class="service-card">
          <h3>مشاوره و طراحی</h3>
          <p>تحلیل نیازهای شما و طراحی راهکار شخصی‌شده با بهترین ROI</p>
          <ul>
            <li>بررسی مصرف انرژی موجود</li>
            <li>طراحی سیستم بهینه</li>
            <li>تخمین هزینه‌ها و بازده</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>نصب و راه‌اندازی</h3>
          <p>تیم متخصص برای نصب و راه‌اندازی سیستم‌های پیچیده</p>
          <ul>
            <li>نصب حرفه‌ای تجهیزات</li>
            <li>تست‌های کیفی</li>
            <li>آموزش کارکنان</li>
          </ul>
        </div>

        <div class="service-card">
          <h3>پشتیبانی و نگهداری</h3>
          <p>خدمات پشتیبانی ۲۴/۷ و نگهداری دوره‌ای</p>
          <ul>
            <li>نظارت دقیق سیستم</li>
            <li>نگهداری پیشگیرانه</li>
            <li>پاسخ سریع به خرابی‌ها</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="partnership-section section-padding">
    <div class="container-custom">
      <div class="partnership-content">
        <h2 class="heading-lg">بخش‌های شریک</h2>
        <p class="body-lg">
          ما افتخار می‌کنیم که نماینده رسمی محصولات و خدمات eMAPNA هستیم
        </p>
        <a href="https://www.emapna.com/" target="_blank" rel="noopener noreferrer" class="btn-primary">
          بیشتر درباره eMAPNA
        </a>
      </div>
    </div>
  </section>

  <section class="cta-section section-padding">
    <div class="container-custom">
      <div class="cta-content">
        <h2 class="heading-lg">آماده‌اید شروع کنید؟</h2>
        <p class="body-lg">
          با تیم کاویان انرژی در تماس باشید و یاد بگیرید که چگونه می‌توانید مصرف انرژی خود را کاهش دهید
        </p>
        <a href="/contact" class="btn-primary">
          درخواست مشاوره رایگان
        </a>
      </div>
    </div>
  </section>
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .about-hero {
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

  .about-hero .heading-xl {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .story-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 230, 118, 0.03) 100%);
    border-bottom: 1px solid var(--border);
  }

  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .story-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .stat-item {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    text-align: center;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .stat-text {
    color: var(--text-secondary);
    font-weight: 600;
  }

  .mission-section {
    background: linear-gradient(
      135deg,
      rgba(21, 88, 255, 0.05) 0%,
      rgba(0, 230, 118, 0.05) 100%
    );
    border-bottom: 1px solid var(--border);
  }

  .mission-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .mission-card {
    padding: 3rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    text-align: center;
  }

  .mission-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .mission-card h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .mission-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.8;
    margin: 0;
  }

  .values-section {
    background: linear-gradient(180deg, rgba(0, 230, 118, 0.03) 0%, transparent 100%);
    border-bottom: 1px solid var(--border);
  }

  .values-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 600px;
    margin: 1rem auto 0;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .value-card {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    text-align: center;
    transition: all 0.3s ease;
  }

  .value-card:hover {
    border-color: rgba(0, 230, 118, 0.3);
    background: rgba(0, 230, 118, 0.03);
    transform: translateY(-4px);
  }

  .value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .value-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .value-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  .services-section {
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(21, 88, 255, 0.03) 100%
    );
    border-bottom: 1px solid var(--border);
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    transition: all 0.3s ease;
  }

  .service-card:hover {
    border-color: rgba(21, 88, 255, 0.3);
    background: rgba(21, 88, 255, 0.03);
    transform: translateY(-4px);
  }

  .service-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .service-card > p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .service-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .service-card li {
    color: var(--text-muted);
    font-size: 0.9rem;
    padding-right: 1.2rem;
    position: relative;
  }

  .service-card li::before {
    content: '✓';
    position: absolute;
    right: 0;
    color: var(--accent-green);
    font-weight: bold;
  }

  .partnership-section {
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.08) 0%, rgba(0, 230, 118, 0.05) 100%);
    border-bottom: 1px solid var(--border);
  }

  .partnership-content {
    text-align: center;
  }

  .partnership-content .body-lg {
    margin: 1rem 0 2rem;
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

  @media (max-width: 1024px) {
    .story-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .mission-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .about-hero {
      padding: 120px 0 60px;
    }

    .story-stats {
      grid-template-columns: 1fr;
    }

    .stat-item {
      padding: 1.5rem;
    }

    .value-card h3 {
      font-size: 1rem;
    }
  }
</style>
