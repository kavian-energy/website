<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Emoji3D from './Emoji3D.svelte';

  gsap.registerPlugin(ScrollTrigger);

  const features = [
    {
      icon: '🎯',
      title: 'مشاوره تخصصی',
      description: 'تیم متخصصی برای طراحی راهکارهای شخصی‌شده',
    },
    {
      icon: '🛠️',
      title: 'نصب و راه‌اندازی',
      description: 'خدمات نصب حرفه‌ای و پشتیبانی فنی ۲۴/۷',
    },
    {
      icon: '📈',
      title: 'بهینه‌سازی عملیاتی',
      description: 'نظارت دقیق و بهبود مستمر کارایی سیستم',
    },
    {
      icon: '🌍',
      title: 'راهکارهای سبز',
      description: 'محصولات پیرو استانداردهای بین‌المللی محیط‌زیست',
    },
  ];

  let containerRef: HTMLDivElement;
  let featureRefs: HTMLElement[] = [];

  onMount(() => {
    // Animation on scroll
    gsap.fromTo(
      featureRefs,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
</script>

<section class="about-preview section-padding">
  <div class="emoji-background">
    <Emoji3D />
  </div>
  <div class="container-custom">
    <div class="about-grid">
      <div class="about-content">
        <div class="section-label">
          <span>درباره ما</span>
        </div>

        <h2 class="heading-lg">شرکتی متعهد به انرژی پاک</h2>

        <p class="body-lg">
          بهینه‌سازی انرژی کاویان با بیش از ده سال تجربه، بزرگترین نماینده رسمی eMAPNA در منطقه شرق کشور است.
        </p>

        <p class="body-md">
          ما با تمرکز بر کیفیت، نوآوری و خدمات مشتری‌محور، راهکارهای جامع برای کاهش مصرف انرژی و توسعه زیرساخت‌های نوین ارائه می‌دهیم.
        </p>

        <a href="/about" class="btn-outline">
          <span>بیشتر بخوانید</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div class="about-features" bind:this={containerRef}>
        {#each features as feature, idx}
          <div class="feature-item" bind:this={featureRefs[idx]}>
            <div class="feature-icon">{feature.icon}</div>
            <div class="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about-preview {
    position: relative;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 230, 118, 0.03) 100%
    );
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

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-content a {
    align-self: flex-start;
  }

  .about-features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-item {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    transition: all 0.3s ease;
  }

  .feature-item:hover {
    border-color: rgba(0, 230, 118, 0.3);
    background: rgba(0, 230, 118, 0.03);
    transform: translateX(-4px);
  }

  .feature-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .feature-text h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.3rem;
  }

  .feature-text p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.5;
  }

  .section-label {
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

  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .about-grid {
      gap: 1.5rem;
    }

    .about-features {
      grid-template-columns: 1fr;
    }

    .feature-item {
      padding: 1rem;
    }
  }
</style>
