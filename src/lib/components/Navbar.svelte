<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';

    let scrolled = $state(false);
    let mobileOpen = $state(false);

    const navLinks = [
        { href: '/',         label: 'خانه' },
        { href: '/about',    label: 'درباره ما' },
        { href: '/services', label: 'خدمات' },
        { href: '/products', label: 'محصولات' },
        { href: '/contact',  label: 'تماس با ما' },
    ];

    function isActive(href: string): boolean {
        if (href === "/") return page.url.pathname === '/';
        return page.url.pathname.startsWith(href);
    }

    onMount(() => {
        const onScroll = () => (scrolled = window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<header class="navbar" class:scrolled style="view-transition-name: navbar;">
    <div class="container-custom nav-inner">
        <a href="/" class="logo" onclick={() => (mobileOpen = false)}>
            <div class="logo-icon">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <polygon
                    points="16,2 28,8 28,24 16,30 4,24 4,8"
                    fill="none" stroke="url(#hexGrad)" stroke-width="1.5"
                  />
                  <path
                    d="M19 7L12 16h6l-5 9"
                    stroke="url(#boltGrad)" stroke-width="2.2"
                    stroke-linecap="round" stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient id="hexGrad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1558FF"/>
                      <stop offset="1" stop-color="#00E676"/>
                    </linearGradient>
                    <linearGradient id="boltGrad" x1="12" y1="7" x2="19" y2="25" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4B83FF"/>
                      <stop offset="1" stop-color="#00E676"/>
                    </linearGradient>
                  </defs>
                </svg>
            </div>
            <div class="logo-text">
              <span class="logo-name">کاویان انرژی</span>
              <span class="logo-tagline">بهینه‌سازی انرژی کاویان</span>
            </div>
        </a>

        <nav class="desktop-nav" aria-label="ناوبری اصلی">
          <ul>
            {#each navLinks as link}
              <li>
                <a
                  href={link.href}
                  class:active={isActive(link.href)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>

        <div class="nav-actions">
          <a href="/contact" class="btn-primary nav-cta">ارتباط با ما</a>
          <button
            class="hamburger"
            class:open={mobileOpen}
            onclick={() => (mobileOpen = !mobileOpen)}
            aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
    </div>

    {#if mobileOpen}
      <div
        class="mobile-overlay"
        role="button"
        tabindex="0"
        onclick={() => (mobileOpen = false)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            mobileOpen = false;
          }
        }}
      >
      </div>
    {/if}

    <div
      id="mobile-drawer"
      class="mobile-drawer"
      class:open={mobileOpen}
      aria-hidden={!mobileOpen}
    >
      <nav aria-label="ناوبری موبایل">
        <ul>
          {#each navLinks as link}
            <li>
              <a
                href={link.href}
                class:active={isActive(link.href)}
                onclick={() => (mobileOpen = false)}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
      <div class="drawer-cta">
        <a href="/contact" class="btn-primary" onclick={() => (mobileOpen = false)}>
          ارتباط با ما
        </a>
      </div>
    </div>
</header>

<div class="navbar-spacer" aria-hidden="true"></div>

<style>
  .navbar {
    position: fixed;
    inset-inline: 0;
    z-index: 1000;
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background: rgba(2, 8, 16, 0.85);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    border-bottom-color: var(--border);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    gap: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    flex-shrink: 0;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(21, 88, 255, 0.1);
    border: 1px solid rgba(21, 88, 255, 0.22);
    border-radius: 10px;
    transition: background 0.3s, border-color 0.3s;
  }

  .logo:hover .logo-icon {
    background: rgba(21, 88, 255, 0.18);
    border-color: rgba(21, 88, 255, 0.4);
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
    gap: 3px;
  }

  .logo-name {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .logo-tagline {
    font-size: 0.62rem;
    color: var(--text-muted);
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  .desktop-nav {
    display: none;
  }

  @media (min-width: 1024px) {
    .desktop-nav {
      display: block;
    }
  }

  .desktop-nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 0.1rem;
  }

  .desktop-nav a {
    display: block;
    padding: 0.45rem 0.8rem;
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
    position: relative;
  }

  .desktop-nav a::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0.8rem;
    left: 0.8rem;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-blue), var(--accent-green));
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.25s ease;
    transform-origin: center;
  }

  .desktop-nav a:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.04);
  }

  .desktop-nav a:hover::after,
  .desktop-nav a.active::after {
    transform: scaleX(1);
  }

  .desktop-nav a.active {
    color: var(--text-primary);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* CTA فقط از تبلت به بالا نمایش داده میشه */
  .nav-cta {
    display: none;
    padding: 0.5rem 1.2rem !important;
    font-size: 0.83rem !important;
  }

  @media (min-width: 768px) {
    .nav-cta {
      display: inline-flex;
    }
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    padding: 0 10px;
    transition: background 0.2s;
    flex-shrink: 0;
  }

  @media (min-width: 1024px) {
    .hamburger { display: none; }
  }

  .hamburger:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  .hamburger span {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--text-secondary);
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
    background: var(--text-primary);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
    background: var(--text-primary);
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    z-index: 998;
  }

  .mobile-drawer {
    position: fixed;
    top: 72px;
    inset-inline: 0;
    background: rgba(4, 10, 20, 0.97);
    backdrop-filter: blur(24px);
    border-bottom: 1px solid var(--border);
    z-index: 999;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    /* انیمیشن slide-down */
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .mobile-drawer.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  /* روی دسکتاپ کلاً نمایش نمیده */
  @media (min-width: 1024px) {
    .mobile-drawer { display: none; }
  }

  .mobile-drawer ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .mobile-drawer a {
    display: block;
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--r-md);
    border: 1px solid transparent;
    transition: all 0.2s;
  }

  .mobile-drawer a:hover,
  .mobile-drawer a.active {
    color: var(--text-primary);
    background: rgba(21, 88, 255, 0.08);
    border-color: var(--border-blue);
    padding-right: 1.4rem; /* کمی indent برای active */
  }

  .drawer-cta {
    padding-top: 0.5rem;
    border-top: 1px solid var(--border);
  }

  .navbar-spacer {
    height: 72px;
    flex-shrink: 0;
  }
</style>