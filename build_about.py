import re

# Read the current about.html
with open('about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The new About page main content
about_content = '''        <!--================= About Hero section start =================-->
        <section class="banner-three section section-padding-top-bottom"
          data-bg-src="./assets/images/banner/banner-three-bg.png">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">About PrivacyCrumb</span>
                  <h1 class="section-title text-anime" style="color:#1a1a2e;">
                    Making Privacy Compliance<br>Simple for Everyone
                  </h1>
                  <p style="color:#4a4a6a;max-width:640px;margin:0 auto;">
                    We believe that website owners shouldn't need a law degree to stay compliant. PrivacyCrumb was built
                    to automate cookie compliance so you can focus on what matters — growing your business.
                  </p>
                </div>
                <div style="margin-top:32px;">
                  <a href="./sign-up.html" class="saaslyn-4-btn v2" style="margin-right:12px;">Get Started Free <i class="fa-light fa-arrow-right-long"></i></a>
                  <a href="./contact.html" class="saaslyn-4-btn">Contact Us <i class="fa-light fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
            <div class="row row-padding-top justify-content-center">
              <div class="col-lg-10 text-center">
                <img src="./assets/images/about-hero.png" alt="PrivacyCrumb Team" style="max-width:100%;border-radius:20px;box-shadow:0 20px 60px rgba(108,60,224,0.15);" />
              </div>
            </div>
          </div>
        </section>
        <!--================= About Hero section end =================-->

        <!--================= Stats section start =================-->
        <section class="section" style="padding:60px 0;">
          <style>
            .about-stats-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }
            @media (max-width: 991px) {
              .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 575px) {
              .about-stats-grid { grid-template-columns: 1fr; }
            }
            .about-stat-card {
              background: #f5f5fa;
              border-radius: 16px;
              padding: 32px 24px;
              text-align: center;
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .about-stat-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 40px rgba(108,60,224,0.1);
            }
            .about-stat-number {
              font-size: 42px;
              font-weight: 800;
              background: linear-gradient(135deg, #6c3ce0, #4642fc);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              line-height: 1.1;
              margin-bottom: 8px;
            }
            .about-stat-label {
              font-size: 15px;
              font-weight: 600;
              color: #1a1a2e;
              margin-bottom: 4px;
            }
            .about-stat-desc {
              font-size: 13px;
              color: #6a6a8a;
            }
          </style>
          <div class="container">
            <div class="about-stats-grid">
              <div class="about-stat-card">
                <div class="about-stat-number">10K+</div>
                <div class="about-stat-label">Websites Protected</div>
                <div class="about-stat-desc">Across 80+ countries worldwide</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-number">50M+</div>
                <div class="about-stat-label">Consents Logged</div>
                <div class="about-stat-desc">Tamper-proof audit-ready records</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-number">99.9%</div>
                <div class="about-stat-label">Uptime</div>
                <div class="about-stat-desc">Enterprise-grade reliability</div>
              </div>
              <div class="about-stat-card">
                <div class="about-stat-number">&lt;2min</div>
                <div class="about-stat-label">Setup Time</div>
                <div class="about-stat-desc">One script, full compliance</div>
              </div>
            </div>
          </div>
        </section>
        <!--================= Stats section end =================-->

        <!--================= Our Story section start =================-->
        <section class="section section-padding-top-bottom" style="background:#f5f5fa;">
          <style>
            .about-story-icon {
              width: 64px;
              height: 64px;
              border-radius: 16px;
              background: linear-gradient(135deg, #6c3ce0, #4642fc);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 24px;
            }
            .about-story-icon i {
              font-size: 28px;
              color: #fff;
            }
          </style>
          <div class="container">
            <div class="row justify-content-center" style="margin-bottom:48px;">
              <div class="col-lg-7 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">Our Story</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">Why We Built PrivacyCrumb</h2>
                </div>
              </div>
            </div>
            <div class="row g-4 align-items-center">
              <div class="col-lg-6">
                <div style="padding-right:20px;">
                  <p style="font-size:16px;line-height:1.8;color:#3a3a5c;margin-bottom:20px;">
                    PrivacyCrumb was born from frustration. As web developers, we watched businesses struggle
                    with cookie compliance — juggling confusing regulations, paying for overpriced solutions,
                    and still getting it wrong.
                  </p>
                  <p style="font-size:16px;line-height:1.8;color:#3a3a5c;margin-bottom:20px;">
                    We saw cookie banners that were little more than "digital wallpaper" — pretty overlays
                    that offered zero real protection. Meanwhile, regulators were issuing fines worth millions.
                  </p>
                  <p style="font-size:16px;line-height:1.8;color:#3a3a5c;">
                    So we built what we wish existed: a single platform that <strong>scans your cookies</strong>,
                    <strong>generates your policies</strong>, <strong>displays a compliant banner</strong>, and
                    <strong>logs every consent</strong> with a tamper-proof audit trail — all for a fraction of
                    the cost that legacy tools charge.
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
                  <div style="background:#fff;border-radius:16px;padding:28px;border:1px solid rgba(26,26,46,0.06);">
                    <div class="about-story-icon"><i class="fa-light fa-shield-check"></i></div>
                    <h5 style="font-size:17px;font-weight:700;color:#1a1a2e;margin-bottom:8px;">Real Compliance</h5>
                    <p style="font-size:14px;color:#4a4a6a;line-height:1.6;">Not just a banner — a complete compliance system with proof.</p>
                  </div>
                  <div style="background:#fff;border-radius:16px;padding:28px;border:1px solid rgba(26,26,46,0.06);">
                    <div class="about-story-icon"><i class="fa-light fa-bolt"></i></div>
                    <h5 style="font-size:17px;font-weight:700;color:#1a1a2e;margin-bottom:8px;">Built for Speed</h5>
                    <p style="font-size:14px;color:#4a4a6a;line-height:1.6;">Lightweight script that won't slow your site down.</p>
                  </div>
                  <div style="background:#fff;border-radius:16px;padding:28px;border:1px solid rgba(26,26,46,0.06);">
                    <div class="about-story-icon"><i class="fa-light fa-money-bill-wave"></i></div>
                    <h5 style="font-size:17px;font-weight:700;color:#1a1a2e;margin-bottom:8px;">Fair Pricing</h5>
                    <p style="font-size:14px;color:#4a4a6a;line-height:1.6;">Enterprise features at startup-friendly prices.</p>
                  </div>
                  <div style="background:#fff;border-radius:16px;padding:28px;border:1px solid rgba(26,26,46,0.06);">
                    <div class="about-story-icon"><i class="fa-light fa-earth-americas"></i></div>
                    <h5 style="font-size:17px;font-weight:700;color:#1a1a2e;margin-bottom:8px;">Global Coverage</h5>
                    <p style="font-size:14px;color:#4a4a6a;line-height:1.6;">GDPR, CCPA, LGPD, POPIA — all in one platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= Our Story section end =================-->

        <!--================= Values section start =================-->
        <section class="section section-padding-top-bottom">
          <style>
            .about-value-card {
              background: #ffffff;
              border: 1px solid rgba(26,26,46,0.06);
              border-radius: 18px;
              padding: 36px 28px;
              text-align: center;
              transition: transform 0.3s, box-shadow 0.3s;
              height: 100%;
            }
            .about-value-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 48px rgba(108,60,224,0.08);
            }
            .about-value-icon {
              width: 72px;
              height: 72px;
              border-radius: 18px;
              background: rgba(108,60,224,0.06);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
            }
            .about-value-icon i {
              font-size: 30px;
              color: #6c3ce0;
            }
            .about-value-title {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a2e;
              margin-bottom: 10px;
            }
            .about-value-desc {
              font-size: 14px;
              color: #4a4a6a;
              line-height: 1.65;
            }
          </style>
          <div class="container">
            <div class="row justify-content-center" style="margin-bottom:48px;">
              <div class="col-lg-7 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">Our Values</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">What Drives Us Every Day</h2>
                  <p style="color:#4a4a6a;max-width:560px;margin:0 auto;">
                    These principles guide every feature we build and every decision we make.
                  </p>
                </div>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-eye"></i></div>
                  <h4 class="about-value-title">Transparency First</h4>
                  <p class="about-value-desc">We practice what we preach. Our code, our pricing, and our policies are clear and upfront — no hidden tricks.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-user-shield"></i></div>
                  <h4 class="about-value-title">Privacy by Design</h4>
                  <p class="about-value-desc">We don't just help you comply — we build with privacy at the core. Minimal data, maximum protection.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-people-group"></i></div>
                  <h4 class="about-value-title">Customer Obsession</h4>
                  <p class="about-value-desc">Our customers' success is our success. We offer dedicated support and listen to every feature request.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-gauge-max"></i></div>
                  <h4 class="about-value-title">Performance Matters</h4>
                  <p class="about-value-desc">Compliance should never slow down your website. Our script is ultra-lightweight and loads asynchronously.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-arrows-rotate"></i></div>
                  <h4 class="about-value-title">Always Evolving</h4>
                  <p class="about-value-desc">Privacy laws change constantly. We stay ahead so you don't have to — automatic updates, always compliant.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="about-value-card">
                  <div class="about-value-icon"><i class="fa-light fa-handshake"></i></div>
                  <h4 class="about-value-title">Fair & Accessible</h4>
                  <p class="about-value-desc">Enterprise-grade compliance shouldn't cost enterprise-grade prices. We make it affordable for businesses of all sizes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= Values section end =================-->

        <!--================= How It Works section start =================-->
        <section class="section section-padding-top-bottom" style="background:#f5f5fa;">
          <style>
            .about-timeline {
              position: relative;
              max-width: 800px;
              margin: 0 auto;
            }
            .about-timeline::before {
              content: '';
              position: absolute;
              left: 30px;
              top: 0;
              bottom: 0;
              width: 3px;
              background: linear-gradient(to bottom, #6c3ce0, #4642fc);
              border-radius: 99px;
            }
            @media (max-width: 575px) {
              .about-timeline::before { left: 22px; }
            }
            .about-tl-item {
              position: relative;
              padding-left: 80px;
              padding-bottom: 40px;
            }
            @media (max-width: 575px) {
              .about-tl-item { padding-left: 60px; }
            }
            .about-tl-item:last-child { padding-bottom: 0; }
            .about-tl-dot {
              position: absolute;
              left: 18px;
              top: 4px;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: #fff;
              border: 3px solid #6c3ce0;
              z-index: 1;
            }
            @media (max-width: 575px) {
              .about-tl-dot { left: 10px; width: 24px; height: 24px; }
            }
            .about-tl-year {
              font-size: 13px;
              font-weight: 700;
              color: #6c3ce0;
              letter-spacing: 0.05em;
              margin-bottom: 6px;
            }
            .about-tl-title {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a2e;
              margin-bottom: 8px;
            }
            .about-tl-desc {
              font-size: 14px;
              color: #4a4a6a;
              line-height: 1.65;
            }
          </style>
          <div class="container">
            <div class="row justify-content-center" style="margin-bottom:48px;">
              <div class="col-lg-7 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">Our Journey</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">The PrivacyCrumb Timeline</h2>
                </div>
              </div>
            </div>
            <div class="about-timeline">
              <div class="about-tl-item">
                <div class="about-tl-dot"></div>
                <div class="about-tl-year">2022</div>
                <h4 class="about-tl-title">The Idea Was Born</h4>
                <p class="about-tl-desc">After seeing too many websites with fake cookie banners and no real compliance, our founders decided to build the platform they wish existed.</p>
              </div>
              <div class="about-tl-item">
                <div class="about-tl-dot"></div>
                <div class="about-tl-year">2023</div>
                <h4 class="about-tl-title">First Beta Launch</h4>
                <p class="about-tl-desc">We launched our beta with automated cookie scanning, consent banner customization, and GDPR compliance. Early adopters loved the simplicity.</p>
              </div>
              <div class="about-tl-item">
                <div class="about-tl-dot"></div>
                <div class="about-tl-year">2024</div>
                <h4 class="about-tl-title">Global Expansion</h4>
                <p class="about-tl-desc">Added support for CCPA, LGPD, POPIA, and Google Consent Mode v2. Reached 5,000+ websites across 60+ countries.</p>
              </div>
              <div class="about-tl-item">
                <div class="about-tl-dot"></div>
                <div class="about-tl-year">2025</div>
                <h4 class="about-tl-title">10K Milestone & Beyond</h4>
                <p class="about-tl-desc">Crossed 10,000 protected websites. Launched IAB TCF v2.2, consent logging, policy generator, and WordPress / Shopify integrations.</p>
              </div>
              <div class="about-tl-item">
                <div class="about-tl-dot"></div>
                <div class="about-tl-year">2026</div>
                <h4 class="about-tl-title">The Future of Privacy</h4>
                <p class="about-tl-desc">Developing AI-powered compliance monitoring, multi-regulation engine, and enterprise SSO. The journey is just getting started.</p>
              </div>
            </div>
          </div>
        </section>
        <!--================= How It Works section end =================-->

        <!--================= Regulations section start =================-->
        <section class="section section-padding-top-bottom">
          <style>
            .about-reg-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            @media (max-width: 991px) {
              .about-reg-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 575px) {
              .about-reg-grid { grid-template-columns: 1fr; }
            }
            .about-reg-card {
              background: #fff;
              border: 1px solid rgba(26,26,46,0.06);
              border-radius: 14px;
              padding: 24px;
              display: flex;
              align-items: flex-start;
              gap: 16px;
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .about-reg-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 36px rgba(108,60,224,0.08);
            }
            .about-reg-badge {
              flex-shrink: 0;
              width: 48px;
              height: 48px;
              border-radius: 12px;
              background: rgba(108,60,224,0.06);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 800;
              font-size: 11px;
              letter-spacing: 0.04em;
              color: #6c3ce0;
            }
            .about-reg-title {
              font-size: 15px;
              font-weight: 700;
              color: #1a1a2e;
              margin-bottom: 4px;
            }
            .about-reg-desc {
              font-size: 13px;
              color: #6a6a8a;
              line-height: 1.5;
            }
          </style>
          <div class="container">
            <div class="row justify-content-center" style="margin-bottom:48px;">
              <div class="col-lg-7 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">Global Compliance</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">Regulations We Cover</h2>
                  <p style="color:#4a4a6a;max-width:560px;margin:0 auto;">
                    One platform, every regulation. PrivacyCrumb automatically adapts to the visitor's location.
                  </p>
                </div>
              </div>
            </div>
            <div class="about-reg-grid">
              <div class="about-reg-card">
                <div class="about-reg-badge">GDPR</div>
                <div>
                  <h5 class="about-reg-title">EU & UK GDPR</h5>
                  <p class="about-reg-desc">Full compliance with the General Data Protection Regulation.</p>
                </div>
              </div>
              <div class="about-reg-card">
                <div class="about-reg-badge">CCPA</div>
                <div>
                  <h5 class="about-reg-title">CCPA / CPRA</h5>
                  <p class="about-reg-desc">California Consumer Privacy Act with "Do Not Sell" support.</p>
                </div>
              </div>
              <div class="about-reg-card">
                <div class="about-reg-badge">LGPD</div>
                <div>
                  <h5 class="about-reg-title">Brazil LGPD</h5>
                  <p class="about-reg-desc">Lei Geral de Proteção de Dados compliance for Brazilian visitors.</p>
                </div>
              </div>
              <div class="about-reg-card">
                <div class="about-reg-badge">POPIA</div>
                <div>
                  <h5 class="about-reg-title">South Africa POPIA</h5>
                  <p class="about-reg-desc">Protection of Personal Information Act compliance.</p>
                </div>
              </div>
              <div class="about-reg-card">
                <div class="about-reg-badge">TCF</div>
                <div>
                  <h5 class="about-reg-title">IAB TCF v2.2</h5>
                  <p class="about-reg-desc">Transparency & Consent Framework for ad-tech compliance.</p>
                </div>
              </div>
              <div class="about-reg-card">
                <div class="about-reg-badge">GCM</div>
                <div>
                  <h5 class="about-reg-title">Google Consent Mode</h5>
                  <p class="about-reg-desc">v2 integration to preserve your analytics and ad performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= Regulations section end =================-->

        <!--================= CTA section start =================-->
        <section class="cta-3 section section-padding-top-bottom overflow-hidden"
          data-bg-src="./assets/images/cta/cta-3-dot-bg.svg">
          <style>
            .cta-3 .features-list ul {
              display: inline-flex !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              text-align: left !important;
            }
            .cta-3 .features-list {
              display: flex !important;
              justify-content: center !important;
            }
          </style>
          <div class="container">
            <div class="row g-4">
              <div class="cta-3__content">
                <h2 class="content-title text-anime">Ready to Make Your Website<br>Truly Compliant?</h2>
                <div class="buttons">
                  <a href="./sign-up.html" class="saaslyn-4-btn v2">Start Free Trial <i class="fa-light fa-arrow-right-long"></i></a>
                  <a href="./pricing.html" class="saaslyn-4-btn">View Pricing <i class="fa-light fa-arrow-right-long"></i></a>
                </div>
                <div class="features-list">
                  <ul>
                    <li><i class="fa-light fa-badge-check"></i>No credit card required</li>
                    <li><i class="fa-light fa-badge-check"></i>Full features included in trial</li>
                    <li><i class="fa-light fa-badge-check"></i>Setup in under 2 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= CTA section end =================-->'''

# Now find and replace the content between <main> and </main>
# The pattern: everything between <main> and </main>
pattern = r'(<main>)\s*.*?\s*(</main>)'
replacement = r'\1\n' + about_content + r'\n      \2'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Also update the title
new_content = new_content.replace('<title>PrivacyCrumb</title>', '<title>PrivacyCrumb - About Us</title>')

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! about.html updated with About page content.")
