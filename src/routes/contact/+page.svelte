<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let form = $state({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
  });

  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

  onMount(() => {
    const serviceParam = $page.url.searchParams.get('service');
    if (serviceParam) {
      form.service = serviceParam;
    }
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;

    setTimeout(() => {
      submitStatus = 'success';
      isSubmitting = false;
      form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
      };
      setTimeout(() => {
        submitStatus = 'idle';
      }, 5000);
    }, 1500);
  }
</script>

<svelte:head>
  <title>تماس با کاویان انرژی</title>
  <meta
    name="description"
    content="درخواست خدمات کاویان انرژی یا فرم تماس برای سوالات خود"
  />
</svelte:head>

<div class="page-wrapper">
  <section class="contact-hero">
    <div class="container-custom">
      <div class="hero-content">
        <h1 class="heading-xl">تماس با ما</h1>
        <p class="hero-subtitle">با تیم متخصص ما در ارتباط باشید</p>
      </div>
    </div>
  </section>

  <section class="contact-section section-padding">
    <div class="container-custom">
      <div class="contact-grid">
        <div class="contact-form-wrapper">
          <h2 class="form-title">فرم تماس</h2>
          <form onsubmit={handleSubmit} class="contact-form">
            <div class="form-group">
              <label for="name">نام شما *</label>
              <input
                id="name"
                type="text"
                bind:value={form.name}
                placeholder="نام کامل"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">ایمیل *</label>
              <input
                id="email"
                type="email"
                bind:value={form.email}
                placeholder="آدرس ایمیل"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">شماره تماس</label>
              <input
                id="phone"
                type="tel"
                bind:value={form.phone}
                placeholder="۰۲۱-۰۰۰۰-۰۰۰۰"
              />
            </div>

            <div class="form-group">
              <label for="service">موضوع خدمت</label>
              <select id="service" bind:value={form.service}>
                <option value="">انتخاب کنید...</option>
                <option value="consultation">مشاوره و طراحی</option>
                <option value="installation">نصب و راه‌اندازی</option>
                <option value="maintenance">پشتیبانی و نگهداری</option>
              </select>
            </div>

            <div class="form-group">
              <label for="subject">موضوع *</label>
              <input
                id="subject"
                type="text"
                bind:value={form.subject}
                placeholder="موضوع پیام"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">پیام *</label>
              <textarea
                id="message"
                bind:value={form.message}
                placeholder="پیام خود را اینجا بنویسید..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-submit" disabled={isSubmitting}>
              {#if submitStatus === 'success'}
                <span>✓</span>
                پیام ارسال شد!
              {:else}
                ارسال پیام
              {/if}
            </button>
          </form>
        </div>

        <div class="contact-info-wrapper">
          <h2 class="info-title">اطلاعات تماس</h2>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <h3>آدرس</h3>
                <p>مشهد، خراسان رضوی، ایران</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-content">
                <h3>تلفن</h3>
                <a href="tel:+982100000000">۰۲۱-۰۰۰۰-۰۰۰۰</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3>ایمیل</h3>
                <a href="mailto:info@kavian-energy.ir">info@kavian-energy.ir</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🕐</div>
              <div class="info-content">
                <h3>ساعات کاری</h3>
                <p>شنبه تا چهارشنبه: ۸:۳۰ - ۱۷:۰۰</p>
              </div>
            </div>
          </div>

          <div class="map-container">
            <h3>موقعیت ما</h3>
            <iframe
              title="دفتر شرکت"
              src="https://neshan.org/maps/iframe/places/_b14x_WJGPAa#c36.330-59.563-20z-0p/36.3296966422504/59.56256502476694"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
  }

  .contact-hero {
    margin-top: -72px;
    padding: 200px 0 100px;
    background: linear-gradient(135deg, rgba(21, 88, 255, 0.1) 0%, rgba(0, 230, 118, 0.05) 100%);
    border-bottom: 1px solid var(--border);
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-hero .heading-xl {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  .contact-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 230, 118, 0.03) 100%);
    border-bottom: 1px solid var(--border);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-form-wrapper,
  .contact-info-wrapper {
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
  }

  .form-title,
  .info-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    color: var(--text-primary);
    font-family: 'Vazirmatn', sans-serif;
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--text-muted);
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--accent-blue);
    background: rgba(21, 88, 255, 0.08);
  }

  .btn-submit {
    padding: 0.9rem 1.6rem;
    background: linear-gradient(135deg, var(--accent-blue), #0A3BD4);
    color: #fff;
    border: none;
    border-radius: 50px;
    font-family: 'Vazirmatn', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(21, 88, 255, 0.2);
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(21, 88, 255, 0.3);
  }

  .info-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-item {
    display: flex;
    gap: 1rem;
  }

  .info-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .info-content h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.3rem;
  }

  .info-content p,
  .info-content a {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.5;
    text-decoration: none;
  }

  .info-content a {
    color: var(--accent-blue-light);
  }

  .info-content a:hover {
    color: var(--accent-green);
  }

  .map-container {
    margin-bottom: 2rem;
  }

  .map-container h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .map-container iframe {
    width: 100%;
    height: 250px;
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    filter: invert(93%) hue-rotate(180deg) saturate(0.75) brightness(0.78);
  }

  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .contact-hero {
      padding: 120px 0 60px;
    }

    .contact-form-wrapper,
    .contact-info-wrapper {
      padding: 1.5rem;
    }
  }
</style>
