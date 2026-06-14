<script lang="ts">
  import { onMount } from 'svelte';

  let selectedCategory = '';
  let filteredProducts: any[] = [];

  const categories = [
    { id: 'ev-charging', name: 'شارژرهای خودروی برقی', icon: '⚡' },
    { id: 'energy-storage', name: 'سیستم‌های ذخیره انرژی', icon: '🔋' },
    { id: 'electrical', name: 'تجهیزات الکتریکی', icon: '🔌' },
    { id: 'solar', name: 'سامانه‌های خورشیدی', icon: '☀️' },
    { id: 'optimization', name: 'بهینه‌سازی مصرف انرژی', icon: '📊' },
  ];

  const products = [
    {
      id: 'charger-series-a',
      name: 'شارژر سریع ۵۰ کیلووات',
      category: 'ev-charging',
      description: 'شارژر سریع برای خودروهای الکتریکی',
      fullDescription: 'شارژر سریع ۵۰ کیلووات مناسب برای محطات شارژ عمومی، شامل فناوری‌های پیشرفته برای شارژ سریع و ایمن خودروهای الکتریکی.',
      features: ['شارژ سریع', 'ایمن', 'هوشمند'],
      specs: {
        power: '۵۰ کیلووات',
        voltage: '۴۰۰ ولت',
        warranty: '۵ سال',
        efficiency: '۹۸%',
      },
      catalog: '/catalogs/charger-series-a.pdf',
      image: '⚡',
    },
    {
      id: 'charger-series-b',
      name: 'شارژر دیواری ۲۲ کیلووات',
      category: 'ev-charging',
      description: 'شارژر خانگی و تجاری',
      fullDescription: 'شارژر دیواری ۲۲ کیلووات برای خانه‌ها و مسائل تجاری، ایمن‌ترین انتخاب برای شارژ روزانه خودروی خود.',
      features: ['ایمنی بالا', 'سادگی', 'سرمایه‌گذاری پایین'],
      specs: {
        power: '۲۲ کیلووات',
        voltage: '۳۶۰ ولت',
        warranty: '۵ سال',
        efficiency: '۹۷%',
      },
      catalog: '/catalogs/charger-series-b.pdf',
      image: '🔌',
    },
    {
      id: 'battery-storage-a',
      name: 'سامانه ذخیره‌سازی ۱۰۰ کیلووات‌ساعت',
      category: 'energy-storage',
      description: 'باتری‌های لیتیومی پیشرفته',
      fullDescription: 'سامانه ذخیره‌سازی انرژی با ظرفیت ۱۰۰ کیلووات‌ساعت، استفاده از باتری‌های لیتیومی درجه‌۱ برای دوام بیشتر.',
      features: ['ظرفیت بالا', 'طول عمر ۲۰ سال', 'هوشمند'],
      specs: {
        capacity: '۱۰۰ کیلووات‌ساعت',
        chemistry: 'لیتیومی',
        cycles: '۶۰۰۰ سیکل',
        warranty: '۱۰ سال',
      },
      catalog: '/catalogs/battery-storage-a.pdf',
      image: '🔋',
    },
    {
      id: 'solar-panel-monocrystal',
      name: 'پنل خورشیدی مونوکریستال ۴۵۰ وات',
      category: 'solar',
      description: 'پنل‌های با بازده بالا',
      fullDescription: 'پنل‌های خورشیدی مونوکریستال با بازده ۲۲% و دوام ۲۵ سال، مناسب برای سیستم‌های تولید انرژی خورشیدی.',
      features: ['بازده ۲۲%', 'دوام ۲۵ سال', 'توصیه‌شده ISO'],
      specs: {
        power: '۴۵۰ وات',
        efficiency: '۲۲%',
        warranty: '۲۵ سال',
        area: '۲.۲ مترمربع',
      },
      catalog: '/catalogs/solar-panel-mono.pdf',
      image: '☀️',
    },
    {
      id: 'inverter-hybrid',
      name: 'اینورتر هیبریدی ۱۰ کیلووات',
      category: 'electrical',
      description: 'تبدیل‌کننده DC به AC',
      fullDescription: 'اینورتر هیبریدی ۱۰ کیلووات برای سیستم‌های خورشیدی، قابلیت کنترل هوشمند و بازدهی بالا.',
      features: ['هیبریدی', 'هوشمند', 'بازدهی بالا'],
      specs: {
        power: '۱۰ کیلووات',
        efficiency: '۹۸%',
        warranty: '۵ سال',
        voltage: '۴۸ ولت DC',
      },
      catalog: '/catalogs/inverter-hybrid.pdf',
      image: '⚙️',
    },
    {
      id: 'monitor-system',
      name: 'سامانه نظارت انرژی',
      category: 'optimization',
      description: 'نظارت و مدیریت هوشمند مصرف',
      fullDescription: 'سامانه نظارت انرژی با قابلیت‌های AI، نظارت درمستقل و تحلیل هوشمند مصرف انرژی.',
      features: ['درک آنی', 'رپورتاژ', 'AI تحلیل'],
      specs: {
        sensors: 'بیش از ۱۰۰',
        updateRate: 'درهر ثانیه',
        accuracy: '۰.۵%',
        storage: 'بی‌محدود ابری',
      },
      catalog: '/catalogs/monitor-system.pdf',
      image: '📊',
    },
  ];

  onMount(() => {
    pagePage.subscribe((p) => {
      const cat = p.url.searchParams.get('cat');
      if (cat) {
        selectedCategory = cat;
        filteredProducts = products.filter((pr) => pr.category === cat);
      } else {
        filteredProducts = products;
      }
    });
  });

  function filterByCategory(catId: string) {
    selectedCategory = catId;
    if (catId) {
      filteredProducts = products.filter((p) => p.category === catId);
    } else {
      filteredProducts = products;
    }
  }
</script>

<svelte:head>
  <title>محصولات کاویان انرژی</title>
  <meta
    name="description"
    content="محصولات کاویان انرژی: شارژرهای خودروی برقی، سیستم‌های ذخیره انرژی، پنل‌های خورشیدی و راهکارهای بهینه‌سازی"
  />
</svelte:head>

<div class="page-wrapper">
  <section class="products-hero">
    <div class="container-custom">
      <div class="hero-content">
        <h1 class="heading-xl">محصولات ما</h1>
        <p class="hero-subtitle">
          محصولات و تجهیزات برتر برای انتقال به انرژی پاک
        </p>
      </div>
    </div>
  </section>

  <section class="products-section section-padding">
    <div class="container-custom">
      <div class="filters-section">
        <h2 class="filters-title">دسته‌بندی محصولات</h2>
        <div class="filter-buttons">
          <button
            class="filter-btn"
            class:active={selectedCategory === ''}
            onclick={() => filterByCategory('')}
          >
            تمام محصولات
          </button>
          {#each categories as category}
            <button
              class="filter-btn"
              class:active={selectedCategory === category.id}
              onclick={() => filterByCategory(category.id)}
            >
              <span class="category-icon">{category.icon}</span>
              {category.name}
            </button>
          {/each}
        </div>
      </div>

      <div class="products-grid">
        {#each filteredProducts as product (product.id)}
          <a href="/products/{product.id}" class="product-item">
            <div class="product-visual">
              <div class="product-icon">{product.image}</div>
              <div class="product-badge">{categories.find((c) => c.id === product.category)?.name}</div>
            </div>

            <div class="product-info">
              <h3>{product.name}</h3>
              <p class="description">{product.description}</p>

              <div class="features">
                <h4>ویژگی‌ها:</h4>
                <ul>
                  {#each product.features as feature}
                    <li>{feature}</li>
                  {/each}
                </ul>
              </div>

              <button
                class="btn-catalog"
                onclick={() => downloadCatalog(product.catalog, product.name)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                دانلود کاتالوگ
              </button>
            </div>
          </a>
        {/each}
      </div>

      {#if filteredProducts.length === 0}
        <div class="no-products">
          <p>محصولی برای این دسته‌بندی یافت نشد</p>
        </div>
      {/if}
    </div>
  </section>

  <section class="app-cta section-padding">
    <div class="container-custom">
      <div class="cta-content">
        <div class="cta-icon">📱</div>
        <h2 class="heading-lg">اپلیکیشن Sharinet</h2>
        <p class="cta-description">
          اپلیکیشن موبایلی eMAPNA برای مدیریت و نظارت سیستم‌های انرژی شما
        </p>
        <div class="app-buttons">
          <a href="#" class="btn-app app-ios" title="دانلود برای iOS">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 13.5c-.91 2.92-.3 5.98 1.86 8.04 2.18 2.08 5.33 2.19 7.54.21 2.19-1.98 2.51-5.09 1.59-7.99h-8.53" />
            </svg>
            iOS
          </a>
          <a href="#" class="btn-app app-android" title="دانلود برای Android">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 11.48h3.98c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72h-3.98c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72H.72C.32 14.52 0 14.2 0 13.8v-.36c0-.4.32-.72.72-.72h3.98V11.48H.72c-.4 0-.72-.32-.72-.72v-.36c0-.4.32-.72.72-.72h3.98V9.12H.72C.32 9.12 0 8.8 0 8.4v-.36c0-.4.32-.72.72-.72h3.98V6.76c0-.4.32-.72.72-.72h.36c.4 0 .72.32.72.72v.56h3.94V6.76c0-.4.32-.72.72-.72h.36c.4 0 .72.32.72.72v.56h3.94V6.76c0-.4.32-.72.72-.72h.36c.4 0 .72.32.72.72v.56h.36c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72h-.36v1.2h3.98c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72h-3.98v1.2h3.98c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72h-3.98v1.2h3.98c.4 0 .72.32.72.72v.36c0 .4-.32.72-.72.72H17.6" />
            </svg>
            Android
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="support-section section-padding">
    <div class="container-custom">
      <h2 class="heading-lg section-title">نیاز به کمک دارید؟</h2>
      <p class="support-description">
        تیم فنی ما آماده‌است تا برای انتخاب محصول صحیح کمک کند
      </p>
      <a href="/contact" class="btn-primary">درخواست مشاوره رایگان</a>
    </div>
  </section>
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .products-hero {
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

  .products-hero .heading-xl {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .products-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 230, 118, 0.03) 100%);
    border-bottom: 1px solid var(--border);
  }

  .filters-section {
    margin-bottom: 3rem;
    text-align: center;
  }

  .filters-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    background: var(--bg-card);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 50px;
    cursor: pointer;
    font-family: 'Vazirmatn', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    border-color: rgba(21, 88, 255, 0.3);
    color: var(--text-primary);
  }

  .filter-btn.active {
    background: linear-gradient(135deg, var(--accent-blue), #0A3BD4);
    color: #fff;
    border-color: var(--accent-blue);
    box-shadow: 0 4px 15px rgba(21, 88, 255, 0.3);
  }

  .category-icon {
    font-size: 1.1rem;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .product-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .product-item:hover {
    border-color: rgba(21, 88, 255, 0.3);
    background: rgba(21, 88, 255, 0.03);
    transform: translateY(-4px);
  }

  .product-visual {
    position: relative;
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1), rgba(0, 230, 118, 0.05));
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }

  .product-icon {
    font-size: 4rem;
  }

  .product-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.4rem 0.8rem;
    background: rgba(21, 88, 255, 0.2);
    border: 1px solid rgba(21, 88, 255, 0.3);
    border-radius: 50px;
    color: var(--accent-blue-light);
    font-size: 0.75rem;
    font-weight: 600;
  }

  .product-info {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
  }

  .product-info h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.4;
  }

  .description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.6;
  }

  .features {
    flex-grow: 1;
  }

  .features h4 {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 0.6rem;
  }

  .features ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .features li {
    color: var(--text-muted);
    font-size: 0.85rem;
    padding-right: 1rem;
    position: relative;
  }

  .features li::before {
    content: '✓';
    position: absolute;
    right: 0;
    color: var(--accent-green);
    font-weight: bold;
  }

  .btn-catalog {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.7rem 1.4rem;
    background: linear-gradient(135deg, var(--accent-blue), #0A3BD4);
    color: #fff;
    border: none;
    border-radius: 50px;
    font-family: 'Vazirmatn', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(21, 88, 255, 0.2);
  }

  .btn-catalog:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(21, 88, 255, 0.3);
  }

  .no-products {
    text-align: center;
    padding: 3rem;
    color: var(--text-muted);
  }

  .app-cta {
    background: linear-gradient(
      135deg,
      rgba(21, 88, 255, 0.1) 0%,
      rgba(0, 230, 118, 0.08) 100%
    );
    border-bottom: 1px solid var(--border);
  }

  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .cta-content .heading-lg {
    margin-bottom: 1rem;
  }

  .cta-description {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .app-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-app {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.8rem;
    border: 2px solid var(--border);
    border-radius: 12px;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.02);
  }

  .btn-app:hover {
    transform: translateY(-2px);
    border-color: var(--accent-blue);
    background: rgba(21, 88, 255, 0.1);
  }

  .app-ios:hover {
    border-color: #1558ff;
  }

  .app-android:hover {
    border-color: #00e676;
  }

  .support-section {
    background: linear-gradient(180deg, rgba(0, 230, 118, 0.03) 0%, transparent 100%);
    border-top: 1px solid var(--border);
    text-align: center;
  }

  .section-title {
    margin-bottom: 1rem;
  }

  .support-description {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  @media (max-width: 768px) {
    .products-hero {
      padding: 120px 0 60px;
    }

    .products-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .filter-buttons {
      flex-direction: column;
      gap: 0.8rem;
    }

    .filter-btn {
      width: 100%;
    }

    .app-buttons {
      flex-direction: column;
    }

    .btn-app {
      width: 100%;
    }
  }
</style>
