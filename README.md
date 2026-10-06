# ShopSpot – Responsive E-Commerce Website

ShopSpot is an original Vue 3 e-commerce frontend for the Week 4 **UI/UX Integration & Responsive Design** college assignment.

> **Academic demo:** authentication, checkout and contact submission are frontend-only. No real credentials, payments or backend requests are processed.

## Features
- 12 required routes: Home, Products, Product Details, Categories, Wishlist, Cart, Login, Register, Dashboard, Orders, About and Contact.
- Vue 3 + Vite + JavaScript.
- Vue Router with lazy-loaded views.
- Pinia stores for cart, wishlist and authentication demo.
- localStorage persistence for cart and wishlist.
- Dynamic product search, category filter, price filter and sorting.
- Responsive desktop/tablet/mobile layouts.
- Reusable Navbar, Footer, ProductCard, CategoryCard, CartItem, OrderCard, forms, dashboard sidebar, empty state and notification components.
- Accessible labels, semantic HTML, focus states and reduced-motion support.
- Detailed UI/UX and testing documentation.

## Run
Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Structure
```text
week4-uiux-responsive/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── stores/
│   ├── data/
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── docs/
│   ├── UI-UX-DOCUMENTATION.md
│   └── TESTING.md
├── README.md
├── package.json
├── vite.config.js
└── .gitignore
```

## UI/UX
The original ShopSpot design uses a deep-green primary, warm neutral background, soft green surfaces, amber accents, rounded cards and restrained shadows. DM Sans is used for interface text and Playfair Display for selected editorial headings.

## Responsive Design
CSS Grid handles product/category layouts. Flexbox handles navigation, action rows and summaries. Media queries target approximately 1100px, 900px, 700px and 430px, with fluid `clamp()` typography and flexible containers.

## Pinia
- `cart.js`: items, quantities, totals and persistence.
- `wishlist.js`: saved products and persistence.
- `auth.js`: frontend-only login/register/logout state.

## Accessibility
Semantic elements, image alt text, form labels, icon-button `aria-label`s, visible focus states, status/error messaging and `prefers-reduced-motion` are included.

## Testing
See `docs/TESTING.md`. It is a test plan and checklist; do not claim manual browser tests were completed unless you actually run them.

## Final ZIP
Do **not** include `node_modules` in the submission. Install dependencies locally, verify the app, then zip the project source and documentation only.
