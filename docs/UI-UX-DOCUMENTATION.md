# ShopSpot UI/UX Documentation

## 1. Design Concept
ShopSpot is an original e-commerce concept based on **“Discover. Shop. Enjoy.”** It intentionally avoids copying the layout, branding or visual identity of Amazon, Flipkart, Meesho, Myntra or another existing marketplace.

## 2. Target Users
College evaluators, young shoppers and mobile-first users who prefer simple product discovery.

## 3. Design Goals
- Clear navigation.
- Low visual clutter.
- Strong product hierarchy.
- Consistent reusable components.
- Responsive behavior across desktop, tablet and mobile.
- Basic accessible interactions.

## 4. Color Palette
`--primary-color` is the deep green brand color; `--primary-dark` is used for hover states; `--secondary-color` provides soft green surfaces; `--accent-color` highlights discounts; warm neutral variables define the page and card backgrounds; muted text and border variables maintain hierarchy.

## 5. Typography
DM Sans is used for UI/body text. Playfair Display is used selectively for editorial emphasis. Major headings use responsive `clamp()` sizing.

## 6. Spacing
The interface uses compact control spacing, medium card padding and larger section spacing to create clear grouping without clutter.

## 7. Navigation
Desktop shows brand, links, search, wishlist, cart and profile. On mobile the main navigation becomes a hamburger menu with a smooth transition and closes after selection.

## 8. Component Breakdown
Global: `Navbar`, `Footer`. Common: `EmptyState`, `Notification`. Home: `CategoryCard`. Products: `ProductCard`, `SearchBar`. Cart: `CartItem`. Auth: `LoginForm`, `RegisterForm`. Dashboard: `DashboardSidebar`, `OrderCard`.

## 9. Homepage
A two-column hero establishes the brand promise, followed by category discovery, featured products and a concise brand statement.

## 10. Product Design
The Products page combines search, category, price and sorting controls. Product cards contain image, discount, wishlist, category, name, rating, pricing and cart action.

## 11. Cart
Desktop uses item list + summary. Mobile becomes a single-column flow. Quantity controls are large enough for touch interaction.

## 12. Authentication
Login and registration are centered, labelled and validated. The UI clearly states that authentication is only a frontend academic demonstration.

## 13. Dashboard
A reusable sidebar, welcome area, statistics and recent orders create a consistent account experience. The sidebar changes to a compact layout on smaller screens.

## 14. Responsive Strategy
CSS Grid is used for products/categories and page-level layouts. Flexbox is used for navigation and action rows. Media queries adapt columns, spacing, navigation, dashboard and cart behavior. Fixed page widths are avoided.

## 15. Accessibility
Semantic HTML, alt text, visible labels, accessible icon buttons, keyboard-friendly native controls, focus states, status/error messages and reduced-motion support are included.

## 16. UX Decisions
- Toast feedback confirms important actions.
- Empty states explain what the user can do next.
- Filters and sorting reduce search effort.
- Consistent button/card styling improves predictability.
- Product route parameters allow direct product detail navigation.
- Demo limitations are stated honestly rather than presenting fake backend security or payment processing.
