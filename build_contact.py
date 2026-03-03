import re

with open('contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

contact_content = '''        <!--================= Contact Hero section start =================-->
        <section class="banner-three section section-padding-top-bottom"
          data-bg-src="./assets/images/banner/banner-three-bg.png">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">Contact Us</span>
                  <h1 class="section-title text-anime" style="color:#1a1a2e;">
                    Get In Touch With Our Team
                  </h1>
                  <p style="color:#4a4a6a;max-width:600px;margin:0 auto;">
                    Have a question about compliance, need help with setup, or want to explore enterprise plans?
                    We'd love to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= Contact Hero section end =================-->

        <!--================= Contact Info Cards section start =================-->
        <section class="section" style="padding:60px 0;">
          <style>
            .contact-info-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
            @media (max-width: 991px) {
              .contact-info-grid { grid-template-columns: 1fr; }
            }
            .contact-info-card {
              background: #f5f5fa;
              border-radius: 18px;
              padding: 36px 28px;
              text-align: center;
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .contact-info-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 48px rgba(108,60,224,0.1);
            }
            .contact-info-icon {
              width: 64px;
              height: 64px;
              border-radius: 16px;
              background: linear-gradient(135deg, #6c3ce0, #4642fc);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
            }
            .contact-info-icon i {
              font-size: 26px;
              color: #fff;
            }
            .contact-info-title {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a2e;
              margin-bottom: 8px;
            }
            .contact-info-text {
              font-size: 14px;
              color: #4a4a6a;
              line-height: 1.65;
            }
            .contact-info-text a {
              color: #6c3ce0 !important;
              font-weight: 600;
              text-decoration: none;
            }
            .contact-info-text a:hover {
              text-decoration: underline;
            }
          </style>
          <div class="container">
            <div class="contact-info-grid">
              <div class="contact-info-card">
                <div class="contact-info-icon"><i class="fa-light fa-envelope"></i></div>
                <h4 class="contact-info-title">Email Us</h4>
                <p class="contact-info-text">
                  For general inquiries and support<br>
                  <a href="mailto:privacy@gmail.com">privacy@gmail.com</a>
                </p>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon"><i class="fa-light fa-location-dot"></i></div>
                <h4 class="contact-info-title">Visit Us</h4>
                <p class="contact-info-text">
                  Main Street, DaanLungsod<br>
                  Tuburan, Philippines
                </p>
              </div>
              <div class="contact-info-card">
                <div class="contact-info-icon"><i class="fa-light fa-clock"></i></div>
                <h4 class="contact-info-title">Office Hours</h4>
                <p class="contact-info-text">
                  Monday - Friday<br>
                  8:00 AM - 5:00 PM (PHT)
                </p>
              </div>
            </div>
          </div>
        </section>
        <!--================= Contact Info Cards section end =================-->

        <!--================= Contact Form section start =================-->
        <section class="section section-padding-top-bottom" style="background:#f5f5fa;">
          <style>
            .contact-form-wrap {
              background: #ffffff;
              border-radius: 20px;
              padding: 48px;
              box-shadow: 0 8px 40px rgba(0,0,0,0.04);
            }
            @media (max-width: 767px) {
              .contact-form-wrap { padding: 28px 20px; }
            }
            .contact-form-group {
              margin-bottom: 20px;
            }
            .contact-form-group label {
              display: block;
              font-size: 13px;
              font-weight: 700;
              color: #1a1a2e;
              margin-bottom: 8px;
              letter-spacing: 0.02em;
            }
            .contact-form-group input,
            .contact-form-group select,
            .contact-form-group textarea {
              width: 100%;
              padding: 14px 18px;
              border-radius: 12px;
              border: 2px solid rgba(26,26,46,0.08);
              background: #f9f9fc;
              color: #1a1a2e;
              font-size: 14px;
              font-family: inherit;
              outline: none;
              transition: border-color 0.25s, box-shadow 0.25s;
            }
            .contact-form-group input:focus,
            .contact-form-group select:focus,
            .contact-form-group textarea:focus {
              border-color: #6c3ce0;
              box-shadow: 0 0 0 4px rgba(108,60,224,0.06);
              background: #fff;
            }
            .contact-form-group input::placeholder,
            .contact-form-group textarea::placeholder {
              color: #8a8aaa;
            }
            .contact-form-group textarea {
              resize: vertical;
              min-height: 140px;
            }
            .contact-form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            @media (max-width: 575px) {
              .contact-form-row { grid-template-columns: 1fr; }
            }
            .contact-submit-btn {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 14px 36px;
              border-radius: 12px;
              background: linear-gradient(135deg, #6c3ce0, #4642fc);
              color: #fff;
              font-weight: 700;
              font-size: 15px;
              border: none;
              cursor: pointer;
              font-family: inherit;
              transition: transform 0.15s, box-shadow 0.15s, opacity 0.2s;
              box-shadow: 0 4px 20px rgba(108,60,224,0.35);
            }
            .contact-submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 28px rgba(108,60,224,0.45);
            }
            .contact-submit-btn:active {
              transform: translateY(0);
            }
          </style>
          <div class="container">
            <div class="row g-5 align-items-start">
              <div class="col-lg-5">
                <div class="section-header-3" style="text-align:left;">
                  <span class="section-sub-title" style="color:#6c3ce0;">Send a Message</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">Let's Start a<br>Conversation</h2>
                  <p style="color:#4a4a6a;">
                    Fill out the form and our team will get back to you within 24 hours. For urgent
                    matters, reach out directly via email.
                  </p>
                </div>
                <div style="margin-top:32px;">
                  <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
                    <div style="width:44px;height:44px;border-radius:12px;background:rgba(108,60,224,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                      <i class="fa-light fa-phone" style="color:#6c3ce0;font-size:18px;"></i>
                    </div>
                    <div>
                      <div style="font-size:12px;color:#6a6a8a;font-weight:600;">Phone</div>
                      <a href="tel:+11002345909" style="color:#1a1a2e !important;font-weight:600;font-size:14px;text-decoration:none;">+1 100 234 5909</a>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
                    <div style="width:44px;height:44px;border-radius:12px;background:rgba(108,60,224,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                      <i class="fa-light fa-envelope" style="color:#6c3ce0;font-size:18px;"></i>
                    </div>
                    <div>
                      <div style="font-size:12px;color:#6a6a8a;font-weight:600;">Email</div>
                      <a href="mailto:privacy@gmail.com" style="color:#1a1a2e !important;font-weight:600;font-size:14px;text-decoration:none;">privacy@gmail.com</a>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;gap:14px;">
                    <div style="width:44px;height:44px;border-radius:12px;background:rgba(108,60,224,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                      <i class="fa-light fa-messages" style="color:#6c3ce0;font-size:18px;"></i>
                    </div>
                    <div>
                      <div style="font-size:12px;color:#6a6a8a;font-weight:600;">Live Chat</div>
                      <span style="color:#1a1a2e;font-weight:600;font-size:14px;">Available Mon-Fri, 8AM-5PM</span>
                    </div>
                  </div>
                </div>
                <!-- Social Links -->
                <div style="margin-top:36px;padding-top:24px;border-top:1px solid rgba(26,26,46,0.06);">
                  <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:14px;">Follow Us</div>
                  <div style="display:flex;gap:10px;">
                    <a href="https://www.facebook.com/" target="_blank" style="width:40px;height:40px;border-radius:10px;background:rgba(108,60,224,0.06);display:flex;align-items:center;justify-content:center;color:#6c3ce0 !important;text-decoration:none;transition:background 0.2s;">
                      <i class="fa-brands fa-facebook-f" style="font-size:16px;"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" style="width:40px;height:40px;border-radius:10px;background:rgba(108,60,224,0.06);display:flex;align-items:center;justify-content:center;color:#6c3ce0 !important;text-decoration:none;transition:background 0.2s;">
                      <i class="fa-brands fa-instagram" style="font-size:16px;"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" style="width:40px;height:40px;border-radius:10px;background:rgba(108,60,224,0.06);display:flex;align-items:center;justify-content:center;color:#6c3ce0 !important;text-decoration:none;transition:background 0.2s;">
                      <i class="fa-brands fa-linkedin-in" style="font-size:16px;"></i>
                    </a>
                    <a href="#" target="_blank" style="width:40px;height:40px;border-radius:10px;background:rgba(108,60,224,0.06);display:flex;align-items:center;justify-content:center;color:#6c3ce0 !important;text-decoration:none;transition:background 0.2s;">
                      <i class="fa-brands fa-youtube" style="font-size:16px;"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="contact-form-wrap">
                  <form id="contactForm" onsubmit="handleContactSubmit(event)">
                    <div class="contact-form-row">
                      <div class="contact-form-group">
                        <label for="contactName">Full Name *</label>
                        <input type="text" id="contactName" name="name" placeholder="John Doe" required />
                      </div>
                      <div class="contact-form-group">
                        <label for="contactEmail">Email Address *</label>
                        <input type="email" id="contactEmail" name="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div class="contact-form-row">
                      <div class="contact-form-group">
                        <label for="contactCompany">Company</label>
                        <input type="text" id="contactCompany" name="company" placeholder="Your Company" />
                      </div>
                      <div class="contact-form-group">
                        <label for="contactSubject">Subject *</label>
                        <select id="contactSubject" name="subject" required>
                          <option value="" disabled selected>Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales / Enterprise</option>
                          <option value="billing">Billing Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div class="contact-form-group">
                      <label for="contactWebsite">Website URL</label>
                      <input type="url" id="contactWebsite" name="website" placeholder="https://yourwebsite.com" />
                    </div>
                    <div class="contact-form-group">
                      <label for="contactMessage">Message *</label>
                      <textarea id="contactMessage" name="message" placeholder="Tell us how we can help you..." required></textarea>
                    </div>
                    <button type="submit" class="contact-submit-btn">
                      Send Message <i class="fa-light fa-paper-plane-top"></i>
                    </button>
                  </form>
                  <div id="contactSuccess" style="display:none;margin-top:24px;padding:20px;background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15);border-radius:12px;text-align:center;">
                    <div style="font-size:24px;margin-bottom:8px;">✅</div>
                    <div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">Message Sent!</div>
                    <div style="font-size:14px;color:#4a4a6a;">Thank you for reaching out. We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script>
            function handleContactSubmit(e) {
              e.preventDefault();
              document.getElementById('contactForm').style.display = 'none';
              document.getElementById('contactSuccess').style.display = 'block';
            }
          </script>
        </section>
        <!--================= Contact Form section end =================-->

        <!--================= FAQ section start =================-->
        <section class="section section-padding-top-bottom">
          <style>
            .contact-faq-item {
              background: #fff;
              border: 1px solid rgba(26,26,46,0.06);
              border-radius: 14px;
              margin-bottom: 12px;
              overflow: hidden;
            }
            .contact-faq-q {
              padding: 20px 24px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
              gap: 16px;
              transition: background 0.2s;
            }
            .contact-faq-q:hover {
              background: rgba(108,60,224,0.02);
            }
            .contact-faq-q h5 {
              font-size: 15px;
              font-weight: 700;
              color: #1a1a2e;
              margin: 0;
            }
            .contact-faq-q i {
              color: #6c3ce0;
              font-size: 16px;
              flex-shrink: 0;
              transition: transform 0.3s;
            }
            .contact-faq-item.open .contact-faq-q i {
              transform: rotate(180deg);
            }
            .contact-faq-a {
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.35s ease, padding 0.35s ease;
              padding: 0 24px;
            }
            .contact-faq-item.open .contact-faq-a {
              max-height: 200px;
              padding: 0 24px 20px;
            }
            .contact-faq-a p {
              font-size: 14px;
              color: #4a4a6a;
              line-height: 1.65;
              margin: 0;
            }
          </style>
          <div class="container">
            <div class="row justify-content-center" style="margin-bottom:48px;">
              <div class="col-lg-7 text-center">
                <div class="section-header-3">
                  <span class="section-sub-title" style="color:#6c3ce0;">FAQ</span>
                  <h2 class="section-title text-anime" style="color:#1a1a2e;">Common Questions</h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="contact-faq-item open">
                  <div class="contact-faq-q" onclick="toggleFaq(this)">
                    <h5>How quickly will I receive a response?</h5>
                    <i class="fa-light fa-chevron-down"></i>
                  </div>
                  <div class="contact-faq-a">
                    <p>We typically respond within 4 hours during business hours (Mon-Fri, 8AM-5PM PHT). Enterprise and Pro plan customers receive priority support with faster response times.</p>
                  </div>
                </div>
                <div class="contact-faq-item">
                  <div class="contact-faq-q" onclick="toggleFaq(this)">
                    <h5>Do you offer live chat support?</h5>
                    <i class="fa-light fa-chevron-down"></i>
                  </div>
                  <div class="contact-faq-a">
                    <p>Yes! Live chat is available Monday through Friday during business hours. You can access it from the chat widget in the bottom-right corner of your PrivacyCrumb dashboard.</p>
                  </div>
                </div>
                <div class="contact-faq-item">
                  <div class="contact-faq-q" onclick="toggleFaq(this)">
                    <h5>Can I schedule a demo of PrivacyCrumb?</h5>
                    <i class="fa-light fa-chevron-down"></i>
                  </div>
                  <div class="contact-faq-a">
                    <p>Absolutely! Select "Sales / Enterprise" as the subject in the contact form above and mention you'd like a demo. Our team will schedule a personalized walkthrough at your convenience.</p>
                  </div>
                </div>
                <div class="contact-faq-item">
                  <div class="contact-faq-q" onclick="toggleFaq(this)">
                    <h5>I need help with setup. Where should I start?</h5>
                    <i class="fa-light fa-chevron-down"></i>
                  </div>
                  <div class="contact-faq-a">
                    <p>Check out our <a href="./knowledge-base.html" style="color:#6c3ce0 !important;font-weight:600;">Knowledge Base</a> for step-by-step guides. If you still need assistance, reach out through this form and we'll help you get set up.</p>
                  </div>
                </div>
                <div class="contact-faq-item">
                  <div class="contact-faq-q" onclick="toggleFaq(this)">
                    <h5>Do you offer custom enterprise solutions?</h5>
                    <i class="fa-light fa-chevron-down"></i>
                  </div>
                  <div class="contact-faq-a">
                    <p>Yes! For businesses with specific compliance needs, multiple domains, or custom integration requirements, we offer tailored enterprise plans. Contact our sales team through the form above.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script>
            function toggleFaq(el) {
              var item = el.parentElement;
              var wasOpen = item.classList.contains('open');
              document.querySelectorAll('.contact-faq-item').forEach(function(i) { i.classList.remove('open'); });
              if (!wasOpen) item.classList.add('open');
            }
          </script>
        </section>
        <!--================= FAQ section end =================-->

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
                <h2 class="content-title text-anime">Ready to Get Started<br>With PrivacyCrumb?</h2>
                <div class="buttons">
                  <a href="./sign-up.html" class="saaslyn-4-btn v2">Start Free Trial <i class="fa-light fa-arrow-right-long"></i></a>
                  <a href="./pricing.html" class="saaslyn-4-btn">View Pricing <i class="fa-light fa-arrow-right-long"></i></a>
                </div>
                <div class="features-list">
                  <ul>
                    <li><i class="fa-light fa-badge-check"></i>No credit card required</li>
                    <li><i class="fa-light fa-badge-check"></i>Full features in free trial</li>
                    <li><i class="fa-light fa-badge-check"></i>Setup in under 2 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--================= CTA section end =================-->'''

# Replace content between <main> and </main>
pattern = r'(<main>)\s*.*?\s*(</main>)'
replacement = r'\1\n' + contact_content + r'\n      \2'
new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Update the title
new_content = new_content.replace('<title>PrivacyCrumb</title>', '<title>PrivacyCrumb - Contact Us</title>')

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! contact.html updated with Contact page content.")
