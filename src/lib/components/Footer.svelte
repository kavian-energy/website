<script lang="ts">
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: '/',         label: 'صفحه اصلی' },
    { href: '/about',    label: 'درباره ما' },
    { href: '/services', label: 'خدمات' },
    { href: '/products', label: 'محصولات' },
    { href: '/contact',  label: 'تماس با ما' },
  ];

  const productLinks = [
    { href: '/products?cat=ev-charging',    label: 'شارژرهای خودروی برقی' },
    { href: '/products?cat=energy-storage', label: 'سیستم‌های ذخیره انرژی' },
    { href: '/products?cat=electrical',     label: 'تجهیزات الکتریکی' },
    { href: '/products?cat=solar',          label: 'سامانه‌های خورشیدی' },
    { href: '/products?cat=optimization',   label: 'بهینه‌سازی مصرف انرژی' },
  ];
</script>

<footer style="view-transition-name: footer;">
  <div class="footer-glow-line" aria-hidden="true"></div>

  <div class="footer-body">
    <div class="container-custom footer-grid">

      <div class="col-brand">
        <a href="/" class="footer-logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <polygon points="16,2 28,8 28,24 16,30 4,24 4,8"
              fill="none" stroke="url(#fHex)" stroke-width="1.5"/>
            <path d="M19 7L12 16h6l-5 9"
              stroke="url(#fBolt)" stroke-width="2.2"
              stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="fHex" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1558FF"/>
                <stop offset="1" stop-color="#00E676"/>
              </linearGradient>
              <linearGradient id="fBolt" x1="12" y1="7" x2="19" y2="25" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4B83FF"/>
                <stop offset="1" stop-color="#00E676"/>
              </linearGradient>
            </defs>
          </svg>
          <span>کاویان انرژی</span>
        </a>

        <p class="brand-desc">
          شرکت بهینه‌سازی انرژی کاویان — نماینده رسمی eMAPNA — ارائه‌دهنده
          راهکارهای نوین انرژی، برقی‌سازی و بهینه‌سازی مصرف برای صنایع و سازمان‌ها.
        </p>

        <div class="socials">
          <a href="#" aria-label="اینستاگرام" class="social-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="تلگرام" class="social-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M22 2L11 13"/>
              <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="col-links">
        <h3 class="col-title">دسترسی سریع</h3>
        <ul>
          {#each quickLinks as link}
            <li>
              <a href={link.href}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="col-links">
        <h3 class="col-title">محصولات</h3>
        <ul>
          {#each productLinks as link}
            <li>
              <a href={link.href}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="col-contact">
        <h3 class="col-title">تماس و موقعیت</h3>

        <div class="contact-list">
          <div class="contact-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>مشهد-خراسان رضوی-ایران</span>
          </div>
          <div class="contact-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.9a19.5 19.5 0 01-5-5 19.79 19.79 0 01-3.07-8.67A2 2 0 015.73 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 17.92z"/>
            </svg>
            <a href="tel:+982100000000">۰۲۱-۰۰۰۰-۰۰۰۰</a>
          </div>
          <div class="contact-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:info@kavian-energy.ir">info@kavian-energy.ir</a>
          </div>
        </div>

        <div class="map-wrap">
          <iframe
            title="دفتر شرکت"
            src="https://neshan.org/maps/iframe/places/137c0f1dbe2c1abfacfd276948120c58#c36.330-59.563-19z-0p/36.3298488911435/59.562657203418524"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div class="map-overlay" aria-hidden="true"></div>
        </div>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container-custom bottom-row">
      <p class="copyright">
        © {year} شرکت بهینه‌سازی انرژی کاویان — تمامی حقوق محفوظ است
      </p>

      <div class="emapna-badge">
        <span>نماینده رسمی</span>
        <span class="emapna-name">eMAPNA</span>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background: linear-gradient(180deg, var(--bg-surface) 0%, #01060F 100%);
    position: relative;
    margin-top: auto;
  }

  .footer-glow-line {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--accent-blue) 40%, var(--accent-green) 60%, transparent 100%);
    opacity: 0.4;
  }

  .footer-body {
    padding: 3.5rem 0 2.5rem;
  }

  .footer-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .footer-grid {
      grid-template-columns: 2fr 1fr 1fr 2fr;
      gap: 2.5rem;
    }
  }

  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    margin-bottom: 0.9rem;
  }

  .brand-desc {
    font-size: 0.82rem;
    line-height: 1.85;
    color: var(--text-muted);
    margin-bottom: 1.1rem;
    max-width: 275px;
  }

  .socials {
    display: flex;
    gap: 0.55rem;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 9px;
    color: var(--text-muted);
    text-decoration: none;
    transition: all 0.25s;
  }

  .social-btn:hover {
    color: var(--accent-blue-light);
    border-color: var(--border-blue);
    background: rgba(21, 88, 255, 0.08);
    transform: translateY(-2px);
  }

  .col-links, .col-contact, .col-brand {
    display: flex;
    flex-direction: column;
  }

  .col-title {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 0.9rem;
  }

  .col-links ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .col-links a {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.32rem 0;
    font-size: 0.85rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s, gap 0.2s;
  }

  .col-links a:hover {
    color: var(--text-secondary);
    gap: 0.65rem;
  }

  .col-links a svg {
    flex-shrink: 0;
    opacity: 0.4;
    transition: opacity 0.2s, color 0.2s;
  }

  .col-links a:hover svg {
    opacity: 1;
    color: var(--accent-blue-light);
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  .contact-row {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.83rem;
    color: var(--text-muted);
  }

  .contact-row svg {
    color: var(--accent-blue-light);
    flex-shrink: 0;
  }

  .contact-row a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-row a:hover {
    color: var(--text-primary);
  }

  .map-wrap {
    position: relative;
    border-radius: var(--r-md);
    overflow: hidden;
    border: 1px solid var(--border);
    height: 180px;
  }

  .map-wrap iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    filter: invert(93%) hue-rotate(180deg) saturate(0.75) brightness(0.78);
  }

  .map-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(2, 8, 16, 0.5) 100%
    );
    pointer-events: none;
    border-radius: var(--r-md);
  }

  .footer-bottom {
    border-top: 1px solid var(--border);
    padding: 1.1rem 0;
  }

  .bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .copyright {
    font-size: 0.76rem;
    color: var(--text-muted);
  }

  .emapna-badge {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.76rem;
    color: var(--text-muted);
    padding: 0.25rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 50px;
  }

  .emapna-name {
    font-weight: 700;
    color: var(--accent-blue-light);
    font-size: 0.82rem;
  }
</style>