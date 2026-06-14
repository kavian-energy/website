<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {

  });
</script>

<svelte:head>
  <title>تماس با کاویان انرژی</title>
  <meta
    name="description"
    content="راه‌های ارتباطی با کاویان انرژی"
  />
</svelte:head>


<div class="page-wrapper">

  <section class="contact-hero">
    <div class="container-custom">
      <div class="hero-content">
        <h1 class="heading-xl">
          تماس با ما
        </h1>
        <p class="hero-subtitle">
          با تیم متخصص ما در ارتباط باشید
        </p>
      </div>
    </div>
  </section>


  <section class="contact-section section-padding">
    <div class="container-custom">
      <div class="contact-card">
        <div class="contact-header">
          <h2>راه‌های ارتباطی</h2>
          <p>
            برای دریافت مشاوره، همکاری یا اطلاعات بیشتر با ما در ارتباط باشید.
          </p>
        </div>

        <div class="contact-items">
          <div class="contact-item">
            <div class="contact-icon">📍</div>

            <div>
              <h3>آدرس</h3>
              <p>
                 خراسان رضوی-مشهد-بلوار جانباز، جانباز 5-برج مروارید گوهرشاد-طبقه 14-واحد ۲
              </p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📞</div>

            <div>
              <h3>شماره تماس</h3>
              <a href="tel:+985137907858">
                05137907858
              </a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <h3>ایمیل</h3>
              <a href="mailto:info@kavian-energy.ir">
                info@kavian-energy.ir
              </a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
              <h3>اینستاگرام</h3>
              <a
                href="https://instagram.com/kavian.energy"
                target="_blank"
              >
                @kavian.energy
              </a>
            </div>
          </div>
        </div>

        <div class="map-container">
          <h3>موقعیت ما</h3>
          <iframe
            title="دفتر مرکزی"
            src="https://neshan.org/maps/iframe/places/_b14x_WJGPAa#c36.330-59.563-20z-0p/36.3296966422504/59.56256502476694"
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>
      </div>
    </div>
  </section>
</div>



<style>


.page-wrapper {
  min-height:100vh;
}

.contact-hero {
  margin-top:-72px;
  padding:200px 0 100px;
  background:
    linear-gradient(
      135deg,
      rgba(21,88,255,.1),
      rgba(0,230,118,.05)
    );
  border-bottom:1px solid var(--border);
}

.hero-content {
  text-align:center;
  max-width:800px;
  margin:auto;
}

.contact-hero .heading-xl {
  margin-bottom:1rem;
}

.hero-subtitle {
  font-size:1.2rem;
  color:var(--text-secondary);
  line-height:1.8;
}

.contact-section {
  background:
    linear-gradient(
      180deg,
      transparent,
      rgba(0,230,118,.03)
    );
  border-bottom:1px solid var(--border);
}

.contact-card {
  max-width:850px;
  margin:0 auto;
  padding:3rem;
  background:var(--bg-card);
  border:1px solid var(--border);
  border-radius:var(--r-lg);
  box-shadow:
    0 20px 50px rgba(0,0,0,.15);
}

.contact-header {
  text-align:center;
  margin-bottom:2.5rem;
}

.contact-header h2 {
  color:var(--text-primary);
  font-size:1.8rem;
  margin-bottom:1rem;
}

.contact-header p {
  color:var(--text-secondary);
}

.contact-items {
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:1.5rem;
}

.contact-item {
  display:flex;
  align-items:center;
  gap:1rem;
  padding:1.3rem;
  background:
    rgba(255,255,255,.04);

  border:1px solid var(--border);
  border-radius:var(--r-md);
  transition:.3s ease;
}

.contact-item:hover {
  transform:translateY(-4px);
  border-color:var(--accent-blue);
}

.contact-icon {
  font-size:2rem;
}

.contact-item h3 {
  margin:0 0 .4rem;
  color:var(--text-primary);
  font-size:.95rem;
}

.contact-item p,

.contact-item a {
  margin:0;
  color:var(--text-muted);
  text-decoration:none;
  font-size:.9rem;
}

.contact-item a:hover {
  color:var(--accent-blue-light);
}

.map-container {
  margin-top:2rem;
}

.map-container h3 {
  margin-bottom:1rem;
  color:var(--text-primary);
}

.map-container iframe {
  width:100%;

  height:300px;

  border:none;

  border-radius:var(--r-md);

  filter:
    invert(93%)
    hue-rotate(180deg)
    saturate(.75)
    brightness(.78);
}





@media(max-width:768px){
  .contact-hero {
    padding:120px 0 60px;
  }

  .contact-card {
    padding:1.5rem;
  }

  .contact-items {
    grid-template-columns:1fr;
  }
}
</style>