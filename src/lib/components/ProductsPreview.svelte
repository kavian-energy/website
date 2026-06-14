<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Emoji3D from './Emoji3D.svelte';

  gsap.registerPlugin(ScrollTrigger);

  const products = [
    {
      id: 'ev-charging',
      title: 'شارژرهای خودروی برقی',
      description: 'سیستم‌های شارژ سریع و ایمن برای تمام نوع خودروهای الکتریکی',
      icon: '⚡',
      category: 'برقی‌سازی',
      color: 'blue',
    },
    {
      id: 'energy-storage',
      title: 'سیستم‌های ذخیره انرژی',
      description: 'باتری‌های قابل شارژ با ظرفیت بالا برای صنایع و اماکن',
      icon: '🔋',
      category: 'ذخیره‌سازی',
      color: 'green',
    },
    {
      id: 'solar',
      title: 'سامانه‌های خورشیدی',
      description: 'پنل‌های خورشیدی و اینورتر‌های پیشرفته برای انرژی تجدیدپذیر',
      icon: '☀️',
      category: 'انرژی تجدیدپذیر',
      color: 'gold',
    },
    {
      id: 'optimization',
      title: 'بهینه‌سازی مصرف انرژی',
      description: 'راهکارهای هوشمند برای کاهش مصرف تا ۳۰ درصد',
      icon: '📊',
      category: 'بهینه‌سازی',
      color: 'teal',
    },
  ];

  let containerRef: HTMLDivElement;
  let cardsRef: HTMLElement[] = [];

  onMount(() => {
    // Staggered animation
    gsap.fromTo(
      cardsRef,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hover animation
    cardsRef.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -12, duration: 0.4, ease: 'power2.out' });
        gsap.to(card.querySelector('.product-icon'), {
          scale: 1.2,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.4, ease: 'power2.out' });
        gsap.to(card.querySelector('.product-icon'), {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  });
</script>

<section class="products-section section-padding">
  <div class="emoji-background">
    <Emoji3D />
  </div>
  <div class="container-custom">
    <div class="section-header">
      <div class="section-label">
        <span>محصولات و خدمات</span>
      </div>
      <h2 class="heading-lg">راهکارهای جامع انرژی</h2>
      <p class="section-description">
        ما تمام چیزی را که برای انتقال به انرژی پاک و بهینه‌سازی مصرف نیاز دارید فراهم می‌کنیم
      </p>
    </div>

    <div class="products-grid" bind:this={containerRef}>
      {#each products as product, idx}
        <a
          href="/products?cat={product.id}"
          class="product-card"
          bind:this={cardsRef[idx]}
        >
          <div class="card-header">
            <div class="product-icon">{product.icon}</div>
            <span class="product-category">{product.category}</span>
          </div>

          <h3 class="product-title">{product.title}</h3>
          <p class="product-desc">{product.description}</p>

          <div class="card-footer">
            <span class="explore-text">مشاهده محصولات</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      {/each}
    </div>

    <div class="cta-section">
      <a href="/products" class="btn-primary">
        مشاهده تمام محصولات
      </a>
    </div>
  </div>
</section>

<style>
  .products-section {
    position: relative;
    background: linear-gradient(
      135deg,
      rgba(21, 88, 255, 0.02) 0%,
      rgba(0, 230, 118, 0.02) 100%
    );
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .emoji-background {
    position: absolute;
    top: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .container-custom {
    position: relative;
    z-index: 2;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 1rem;
    background: rgba(21, 88, 255, 0.1);
    border: 1px solid rgba(21, 88, 255, 0.2);
    border-radius: 50px;
    color: var(--accent-blue-light);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  .section-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 600px;
    margin: 1rem auto 0;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .product-card {
    position: relative;
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow: hidden;
    z-index: 1;
  }

  .product-card::before {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-blue), var(--accent-green));
    transform: scaleX(0);
    transition: transform 0.5s ease;
    transform-origin: left;
    z-index: -1;
  }

  .product-card:hover::before {
    transform: scaleX(1);
  }

  .product-card:hover {
    border-color: rgba(21, 88, 255, 0.4);
    background: rgba(21, 88, 255, 0.05);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-icon {
    font-size: 2.5rem;
    transition: all 0.3s ease;
  }

  .product-category {
    padding: 0.25rem 0.7rem;
    background: rgba(21, 88, 255, 0.1);
    border: 1px solid rgba(21, 88, 255, 0.2);
    border-radius: 6px;
    color: var(--accent-blue-light);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .product-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
  }

  .product-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
    flex-grow: 1;
    margin: 0;
  }

  .card-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-blue-light);
    font-weight: 600;
    font-size: 0.9rem;
    transition: gap 0.3s ease;
  }

  .product-card:hover .card-footer {
    gap: 0.8rem;
  }

  .card-footer svg {
    transition: transform 0.3s ease;
  }

  .product-card:hover .card-footer svg {
    transform: translateX(-4px);
  }

  .cta-section {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .section-header {
      margin-bottom: 2rem;
    }

    .product-card {
      padding: 1.5rem;
    }
  }
</style>
