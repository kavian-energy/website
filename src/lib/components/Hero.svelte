<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import Emoji3D from './Emoji3D.svelte';

  let container: HTMLDivElement;
  let titleRef: HTMLHeadingElement;
  let subtitleRef: HTMLParagraphElement;
  let descRef: HTMLParagraphElement;
  let buttonContainerRef: HTMLDivElement;

  onMount(() => {
    const tl = gsap.timeline();

    // نمایش عناصر به صورت متتالی
    tl.fromTo(
      titleRef,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      0
    )
      .fromTo(
        subtitleRef,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        0.2
      )
      .fromTo(
        descRef,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        0.3
      )
      .fromTo(
        buttonContainerRef,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out' },
        0.5
      );

    // انیمیشن hover برای دکمه‌ها
    const buttons = buttonContainerRef?.querySelectorAll('a, button');
    buttons?.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { y: -4, duration: 0.3, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    // floating animation برای کل hero
    gsap.to(container, {
      y: 20,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  });
</script>

<section class="hero" bind:this={container}>
  <div class="emoji-background">
    <Emoji3D />
  </div>
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>

  <div class="hero-content container-custom">
    <h1 class="hero-title" bind:this={titleRef}>
      <span>بهینه‌سازی</span>
      <span class="gradient-accent">انرژی</span>
      <span>نوین</span>
    </h1>

    <div class="hero-label" bind:this={subtitleRef}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
      </svg>
      <span>نماینده رسمی eMAPNA — برقی‌سازی و راهکارهای انرژی پاک</span>
    </div>

    <p class="hero-subtitle" bind:this={descRef}>
      از شارژرهای خودروی برقی تا سیستم‌های ذخیره‌سازی انرژی، ما ارائه‌دهندگان حل‌های جامع برای کاهش مصرف انرژی و توسعه زیرساخت‌های نوین هستیم.
    </p>

    <div class="hero-buttons" bind:this={buttonContainerRef}>
      <a href="/products" class="btn-primary">
        <span>کاتالوگ محصولات</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <a href="/contact" class="btn-outline">
        تماس با ما
      </a>
      <a href="https://www.emapna.com/download" class="btn-secondary sharinet-btn" title="دانلود اپلیکیشن Sharinet">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.5 6c-2.61 0-4.92-1.5-6.02-3.66-.23-.45-.68-.75-1.2-.75s-.97.3-1.2.75C7.42 4.5 5.11 6 2.5 6c-.83 0-1.5.67-1.5 1.5v11c0 2.21 1.79 4 4 4h13c2.21 0 4-1.79 4-4v-11c0-.83-.67-1.5-1.5-1.5zm-9 10H9c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.55 0 1 .45 1 1s-.45 1-1 1z" />
        </svg>
        <span>Sharinet</span>
      </a>
    </div>
  </div>

  <div class="scroll-indicator" aria-hidden="true">
    <div class="scroll-dot"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: -72px;
    padding-top: 72px;
  }

  .emoji-background {
    position: absolute;
    top: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(21, 88, 255, 0.15) 0%,
      transparent 70%
    );
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(21, 88, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(21, 88, 255, 0.03) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  .hero-title span {
    display: inline-block;
  }

  .gradient-accent {
    background: linear-gradient(135deg, #4B83FF 0%, #00E676 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(21, 88, 255, 0.1);
    border: 1px solid rgba(21, 88, 255, 0.2);
    border-radius: 50px;
    color: var(--accent-blue-light);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .hero-label svg {
    color: var(--accent-green);
  }

  .hero-subtitle {
    max-width: 700px;
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin: 0;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1.4rem;
    background: rgba(0, 230, 118, 0.08);
    color: var(--accent-green);
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 50px;
    border: 1px solid var(--border-green);
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-family: 'Vazirmatn', sans-serif;
  }

  .btn-secondary:hover {
    background: rgba(0, 230, 118, 0.15);
    border-color: var(--accent-green);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 230, 118, 0.2);
  }

  .sharinet-btn {
    animation: floatY 3s ease-in-out infinite;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: fadeInDown 1.2s ease both 0.8s;
    z-index: 3;
  }

  .scroll-indicator svg {
    color: var(--text-muted);
    opacity: 0.5;
    animation: floatY 2s ease-in-out infinite;
  }

  .scroll-dot {
    width: 3px;
    height: 16px;
    background: linear-gradient(to bottom, var(--accent-blue), transparent);
    border-radius: 2px;
    animation: floatY 1.5s ease-in-out infinite;
  }

  @media (max-width: 640px) {
    .hero {
      min-height: 90vh;
    }

    .hero-title {
      font-size: clamp(1.8rem, 5vw, 3.5rem);
    }

    .hero-buttons {
      gap: 0.75rem;
    }

    .btn-primary,
    .btn-outline,
    .btn-secondary {
      padding: 0.6rem 1.2rem;
      font-size: 0.85rem;
    }
  }
</style>
