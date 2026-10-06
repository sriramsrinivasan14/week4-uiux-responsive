# ShopSpot Testing Documentation

## Important note
This document is a testing plan. The generated project must not claim manual browser testing that has not actually been performed. A successful production build is build verification, not a substitute for manual testing.

## Feature Matrix

| Feature | Desktop | Tablet | Mobile | Result |
|---|---|---|---|---|
| Navbar | Pass* | Pass* | Pass* | Pass* |
| Hero | Pass* | Pass* | Pass* | Pass* |
| Products | Pass* | Pass* | Pass* | Pass* |
| Product Details | Pass* | Pass* | Pass* | Pass* |
| Cart | Pass* | Pass* | Pass* | Pass* |
| Wishlist | Pass* | Pass* | Pass* | Pass* |
| Login | Pass* | Pass* | Pass* | Pass* |
| Register | Pass* | Pass* | Pass* | Pass* |
| Dashboard | Pass* | Pass* | Pass* | Pass* |
| Contact | Pass* | Pass* | Pass* | Pass* |

`*` Expected from implementation; replace with actual verified results before submission.

## Manual Tests
### Navigation
Open every route, use back/forward, open the mobile menu, select a link and confirm the menu closes.

### Products
Test search, category filter, maximum-price slider, reset and all five sorting options.

### Product Details
Open valid and invalid IDs, change size/color, change quantity, add to cart and toggle wishlist.

### Cart
Add one item, add it again, increase/decrease quantity, remove, clear, check totals and refresh to confirm persistence.

### Wishlist
Add/remove products, refresh for persistence, and use “Move all to cart.”

### Login/Register
Test empty fields, invalid email, short password and password mismatch. Test valid demo input and confirm dashboard navigation.

### Dashboard/Orders
Check statistics, recent orders, order statuses and sidebar navigation.

### Contact
Test empty fields, invalid email, short message and valid submission.

## Responsive Testing
Recommended viewport widths:
- 1440px
- 1200px
- 992px
- 768px
- 576px
- 430px
- 375px

Check no horizontal overflow, readable text, usable buttons, responsive grids, mobile navigation, dashboard and cart transformations.

## Browser Testing
Recommended:
- Chrome
- Edge
- Firefox
- Mobile Chrome

Check the console for obvious errors during each main flow.

## Build Verification
Run:
```bash
npm install
npm run build
```
Expected: Vite completes without compilation/module errors.

## Accessibility Checks
Use keyboard Tab navigation, confirm visible focus, check icon labels and image alt text, test browser zoom around 200%, and test reduced-motion preferences.

## Final Test Record
Date:
Node/npm versions:
Build result:
Browsers:
Desktop:
Tablet:
Mobile:
Accessibility:
Console errors:
Fixes made:
