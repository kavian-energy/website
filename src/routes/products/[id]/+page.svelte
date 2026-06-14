<script lang="ts">
  import { page } from '$app/stores';

  const allProducts = [
    {
      id: 'charger-series-a',
      name: 'شارژر سریع ۵۰ کیلووات',
      category: 'ev-charging',
      categoryName: 'شارژرهای خودروی برقی',
      description: 'شارژر سریع برای خودروهای الکتریکی',
      fullDescription: 'شارژر سریع ۵۰ کیلووات مناسب برای محطات شارژ عمومی، شامل فناوری‌های پیشرفته برای شارژ سریع و ایمن خودروهای الکتریکی. این دستگاه توان زیادی دارد و می‌تواند اکثر خودروهای الکتریکی را در کمتر از یک ساعت به طور کامل شارژ کند.',
      features: ['شارژ سریع تا ۳۰ دقیقه', 'ایمن‌ترین فناوری', 'هوشمند و متصل'],
      specs: {
        power: '۵۰ کیلووات',
        voltage: '۴۰۰ ولت',
        warranty: '۵ سال',
        efficiency: '۹۸%',
        weight: '۲۰۰ کیلوگرم',
        dimensions: '۸۰ × ۶۰ × ۱۲۰ سانتی‌متر',
      },
      benefits: [
        'شارژ سریع و کارآمد',
        'کاهش هزینه‌های انرژی',
        'پشتیبانی ۲۴/۷',
        'نصب آسان',
      ],
      catalog: '/catalogs/charger-series-a.pdf',
      image: '⚡',
    },
    {
      id: 'charger-series-b',
      name: 'شارژر دیواری ۲۲ کیلووات',
      category: 'ev-charging',
      categoryName: 'شارژرهای خودروی برقی',
      description: 'شارژر خانگی و تجاری',
      fullDescription: 'شارژر دیواری ۲۲ کیلووات برای خانه‌ها و مسائل تجاری، ایمن‌ترین انتخاب برای شارژ روزانه خودروی خود. مناسب برای گاراژ‌ها و پارکینگ‌های شرکتی.',
      features: ['ایمنی بالا', 'سادگی استفاده', 'سرمایه‌گذاری پایین'],
      specs: {
        power: '۲۲ کیلووات',
        voltage: '۳۶۰ ولت',
        warranty: '۵ سال',
        efficiency: '۹۷%',
        weight: '۱۵۰ کیلوگرم',
        dimensions: '۶۰ × ۵۰ × ۱۰۰ سانتی‌متر',
      },
      benefits: [
        'نصب آسان در خانه',
        'کم‌صدا و ایمن',
        'هزینه‌های کمتر',
        'طول عمر طولانی',
      ],
      catalog: '/catalogs/charger-series-b.pdf',
      image: '🔌',
    },
    {
      id: 'battery-storage-a',
      name: 'سامانه ذخیره‌سازی ۱۰۰ کیلووات‌ساعت',
      category: 'energy-storage',
      categoryName: 'سیستم‌های ذخیره انرژی',
      description: 'باتری‌های لیتیومی پیشرفته',
      fullDescription: 'سامانه ذخیره‌سازی انرژی با ظرفیت ۱۰۰ کیلووات‌ساعت، استفاده از باتری‌های لیتیومی درجه‌۱ برای دوام بیشتر و عملکرد بهتر.',
      features: ['ظرفیت بالا و پایدار', 'طول عمر ۲۰ سال', 'کنترل هوشمند'],
      specs: {
        capacity: '۱۰۰ کیلووات‌ساعت',
        chemistry: 'لیتیومی‌فسفات',
        cycles: '۶۰۰۰ سیکل',
        warranty: '۱۰ سال',
        weight: '۲ تن',
        dimensions: '۴ × ۲ × ۲ متر',
      },
      benefits: [
        'ذخیره‌سازی دراز‌مدت',
        'بازیابی سریع انرژی',
        'کاهش نوسانات برق',
        'صرفه‌جویی در هزینه‌ها',
      ],
      catalog: '/catalogs/battery-storage-a.pdf',
      image: '🔋',
    },
    {
      id: 'solar-panel-monocrystal',
      name: 'پنل خورشیدی مونوکریستال ۴۵۰ وات',
      category: 'solar',
      categoryName: 'سامانه‌های خورشیدی',
      description: 'پنل‌های با بازده بالا',
      fullDescription: 'پنل‌های خورشیدی مونوکریستال با بازده ۲۲% و دوام ۲۵ سال، مناسب برای سیستم‌های تولید انرژی خورشیدی. بهترین انتخاب برای منطقه‌های آفتابی.',
      features: ['بازده ۲۲% بالا', 'دوام ۲۵ سال', 'استاندارد ISO'],
      specs: {
        power: '۴۵۰ وات',
        efficiency: '۲۲%',
        warranty: '۲۵ سال',
        area: '۲.۲ مترمربع',
        weight: '۲۲ کیلوگرم',
        temperature: '-۴۰ تا +۸۵ درجه',
      },
      benefits: [
        'تولید انرژی سالانه',
        'کاهش فاکتورهای برق',
        'سرمایه‌گذاری بلندمدت',
        'صرفه‌جویی محیطی',
      ],
      catalog: '/catalogs/solar-panel-mono.pdf',
      image: '☀️',
    },
    {
      id: 'inverter-hybrid',
      name: 'اینورتر هیبریدی ۱۰ کیلووات',
      category: 'electrical',
      categoryName: 'تجهیزات الکتریکی',
      description: 'تبدیل‌کننده DC به AC',
      fullDescription: 'اینورتر هیبریدی ۱۰ کیلووات برای سیستم‌های خورشیدی، قابلیت کنترل هوشمند و بازدهی بالا. می‌تواند انرژی از پنل‌های خورشیدی یا باتری را تبدیل کند.',
      features: ['هیبریدی و انعطاف‌پذیر', 'کنترل هوشمند', 'بازدهی ۹۸%'],
      specs: {
        power: '۱۰ کیلووات',
        efficiency: '۹۸%',
        warranty: '۵ سال',
        voltage: '۴۸ ولت DC',
        weight: '۸۰ کیلوگرم',
        dimensions: '۶۰ × ۴۰ × ۲۰ سانتی‌متر',
      },
      benefits: [
        'تبدیل دقیق و کارآمد',
        'کاهش تلفات انرژی',
        'کنترل سیستم آسان',
        'عمر طولانی',
      ],
      catalog: '/catalogs/inverter-hybrid.pdf',
      image: '⚙️',
    },
    {
      id: 'monitor-system',
      name: 'سامانه نظارت انرژی',
      category: 'optimization',
      categoryName: 'بهینه‌سازی مصرف انرژی',
      description: 'نظارت و مدیریت هوشمند مصرف',
      fullDescription: 'سامانه نظارت انرژی با قابلیت‌های AI، نظارت درمستقل و تحلیل هوشمند مصرف انرژی. می‌تواند الگوهای مصرف را شناسایی کند و راهکار بهینه‌سازی پیشنهاد دهد.',
      features: ['نظارت آنی', 'رپورتاژ اتوماتیک', 'تحلیل هوشمند'],
      specs: {
        sensors: 'بیش از ۱۰۰ حسگر',
        updateRate: 'هرثانیه',
        accuracy: '۰.۵%',
        storage: 'بی‌محدود ابری',
        interface: 'وب و موبایل',
        api: 'RESTful API',
      },
      benefits: [
        'کاهش مصرف ۲۰-۳۰%',
        'بهینه‌سازی خودکار',
        'پیش‌بینی هوشمند',
        'صرفه‌جویی ماهیانه',
      ],
      catalog: '/catalogs/monitor-system.pdf',
      image: '📊',
    },
  ];

  $: product = allProducts.find((p) => p.id === $page.params.id);
</script>

<svelte:head>
  {#if product}
    <title>{product.name} - کاویان انرژی</title>
    <meta name="description" content={product.fullDescription} />
  {/if}
</svelte:head>

{#if product}
  <div class="page-wrapper">
    <section class="product-hero">
      <div class="container-custom">
        <nav class="breadcrumb">
          <a href="/products">محصولات</a>
          <span>/</span>
          <span>{product.categoryName}</span>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <h1 class="heading-xl">{product.name}</h1>
        <p class="hero-subtitle">{product.categoryName}</p>
      </div>
    </section>

    <section class="product-section section-padding">
      <div class="container-custom">
        <div class="product-grid">
          <div class="product-image-side">
            <div class="product-image">
              <div class="image-icon">{product.image}</div>
            </div>
          </div>

          <div class="product-info-side">
            <h2 class="heading-lg">{product.name}</h2>
            <p class="category-tag">{product.categoryName}</p>

            <p class="full-description">{product.fullDescription}</p>

            <div class="features-section">
              <h3>ویژگی‌های اصلی</h3>
              <ul class="features-list">
                {#each product.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            </div>

            <div class="specs-section">
              <h3>مشخصات فنی</h3>
              <div class="specs-grid">
                {#each Object.entries(product.specs) as [key, value]}
                  <div class="spec-item">
                    <span class="spec-key">{key}:</span>
                    <span class="spec-value">{value}</span>
                  </div>
                {/each}
              </div>
            </div>

            <div class="benefits-section">
              <h3>مزایا</h3>
              <ul class="benefits-list">
                {#each product.benefits as benefit}
                  <li>{benefit}</li>
                {/each}
              </ul>
            </div>

            <div class="cta-section">
              <a href={product.catalog} target="_blank" rel="noopener noreferrer" class="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                دانلود کاتالوگ PDF
              </a>
              <a href="/contact?product={product.id}" class="btn-outline">
                درخواست مشاوره
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="related-section section-padding">
      <div class="container-custom">
        <h2 class="heading-lg section-title">محصولات مرتبط</h2>
        <div class="related-grid">
          {#each allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3) as related}
            <a href="/products/{related.id}" class="related-card">
              <div class="related-icon">{related.image}</div>
              <h3>{related.name}</h3>
              <p>{related.description}</p>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section class="contact-cta section-padding">
      <div class="container-custom">
        <div class="cta-content">
          <h2 class="heading-lg">سوالی درباره این محصول دارید؟</h2>
          <p>تیم متخصص ما آماده کمک است</p>
          <a href="/contact" class="btn-primary">تماس با ما</a>
        </div>
      </div>
    </section>
  </div>
{:else}
  <section class="error-section section-padding">
    <div class="container-custom">
      <h1 class="heading-lg">محصول یافت نشد</h1>
      <p>متأسفانه محصول مورد نظر وجود ندارد</p>
      <a href="/products" class="btn-primary">بازگشت به محصولات</a>
    </div>
  </section>
{/if}

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .product-hero {
    margin-top: -72px;
    padding: 200px 0 100px;
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1) 0%, rgba(0, 230, 118, 0.05) 100%);
    border-bottom: 1px solid var(--border);
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .breadcrumb a {
    color: var(--accent-blue-light);
    text-decoration: none;
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: var(--accent-green);
  }

  .breadcrumb span:last-child {
    color: var(--text-primary);
    font-weight: 600;
  }

  .product-hero .heading-xl {
    margin-bottom: 0.5rem;
  }

  .hero-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }

  .product-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 230, 118, 0.03) 100%);
    border-bottom: 1px solid var(--border);
  }

  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .product-image {
    padding: 3rem;
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1), rgba(0, 230, 118, 0.05));
    border-radius: var(--r-lg);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }

  .image-icon {
    font-size: 8rem;
  }

  .product-info-side {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .product-info-side .heading-lg {
    margin-bottom: 0;
  }

  .category-tag {
    display: inline-flex;
    padding: 0.4rem 1rem;
    background: rgba(0, 230, 118, 0.1);
    border: 1px solid rgba(0, 230, 118, 0.2);
    border-radius: 50px;
    color: var(--accent-green);
    font-size: 0.85rem;
    font-weight: 600;
    width: fit-content;
  }

  .full-description {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    margin: 1rem 0;
  }

  .features-section h3,
  .specs-section h3,
  .benefits-section h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .features-list,
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .features-list li,
  .benefits-list li {
    padding-right: 1.2rem;
    position: relative;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .features-list li::before,
  .benefits-list li::before {
    content: '✓';
    position: absolute;
    right: 0;
    color: var(--accent-green);
    font-weight: bold;
    font-size: 1.1rem;
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(21, 88, 255, 0.05);
    border-radius: var(--r-lg);
    border: 1px solid var(--border);
  }

  .spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .spec-key {
    color: var(--text-muted);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .spec-value {
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 500;
  }

  .benefits-section {
    padding: 1.5rem;
    background: rgba(0, 230, 118, 0.05);
    border-radius: var(--r-lg);
    border: 1px solid var(--border-green);
  }

  .cta-section {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .cta-section a {
    flex: 1;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .related-section {
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.05) 0%, rgba(0, 230, 118, 0.05) 100%);
    border-bottom: 1px solid var(--border);
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .related-card {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .related-card:hover {
    border-color: rgba(21, 88, 255, 0.3);
    background: rgba(21, 88, 255, 0.03);
    transform: translateY(-4px);
  }

  .related-icon {
    font-size: 3rem;
  }

  .related-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .related-card p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
  }

  .contact-cta {
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1) 0%, rgba(0, 230, 118, 0.08) 100%);
    border-top: 1px solid var(--border);
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-content .heading-lg {
    margin-bottom: 0.5rem;
  }

  .cta-content p {
    color: var(--text-secondary);
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  .error-section {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    .product-grid {
      grid-template-columns: 1fr;
    }

    .product-image {
      min-height: 300px;
    }

    .image-icon {
      font-size: 6rem;
    }
  }

  @media (max-width: 768px) {
    .product-hero {
      padding: 120px 0 60px;
    }

    .specs-grid {
      grid-template-columns: 1fr;
    }

    .cta-section {
      flex-direction: column;
    }

    .cta-section a {
      width: 100%;
    }

    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
