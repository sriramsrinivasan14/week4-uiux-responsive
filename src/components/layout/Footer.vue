<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="brand footer-logo"><span class="brand-mark">S</span><span><strong>SHOPSPOT</strong><small>Discover. Shop. Enjoy.</small></span></div>
        <p>A thoughtfully designed shopping space for everyday products, fresh ideas and easy discovery.</p>
        <div class="socials" aria-label="Social links">
          <a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
      <div><h3>Quick Links</h3><router-link to="/">Home</router-link><router-link to="/products">Products</router-link><router-link to="/categories">Categories</router-link><router-link to="/about">About</router-link><router-link to="/contact">Contact</router-link></div>
      <div><h3>Customer Service</h3><a href="#">FAQ</a><a href="#">Shipping</a><a href="#">Returns</a><a href="#">Privacy</a></div>
      <div><h3>Stay in the loop</h3><p>New drops, useful finds and simple shopping inspiration.</p><div class="footer-newsletter"><input aria-label="Email address" placeholder="Your email" type="email"><button aria-label="Subscribe">→</button></div></div>
    </div>
    <div class="container footer-bottom"><span>© 2026 ShopSpot. All rights reserved.</span><span>Built as a Vue UI/UX academic project.</span></div>
  </footer>
</template>
