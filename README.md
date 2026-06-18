🛒 ShopApp — E-Commerce Frontend
A fully functional multi-page e-commerce web app built with React + Vite, consuming real product data from the DummyJSON API. Built as an internship task at DevelopersHub Corporation

🔍 Quick Links to my Code
App Entry & Routing (App.jsx)
Homepage Products (Productsection.jsx)
Navbar (Navbar.jsx)
Search Results (searchresult.jsx)
Product Detail Page (Productinfo.jsx)
Smartphones Page (Smartphones.jsx)
Styles (App.css)

🚀 Features
Fetches live product data from DummyJSON API
Multi-page app with React Router — no full page reloads
Product detail page — click any product to see full info fetched by ID
Search functionality — search products by name with live API results
Brand filtering — filter smartphones by Oppo, Apple, Realme
Category sidebar — switch between Accessories, Electronics, Smartphones
Price range slider — filter products by min/max price
Star rating filter UI
Multiple product sections on homepage — furniture, kitchen, tech, clothing, decoration
Supplier inquiry form with category and quantity selector
Fully responsive layout..

🗂️ Project Structure
src/
├── components/
│   ├── App.jsx           # Root component, all data fetching, routing
│   ├── App.css           # Global styles
│   ├── Navbar.jsx        # Top navigation with search bar
│   ├── Hero.jsx          # Homepage hero section
│   └── Productsection.jsx # Homepage product grid sections
├── pages/
│   ├── Home.jsx
│   ├── searchresult.jsx  # Search results with sidebar filters
│   ├── Productinfo.jsx   # Single product detail page
│   ├── Accessories.jsx   # Mobile accessories category
│   ├── Electronics.jsx   # Electronics category
│   ├── Smartphones.jsx   # Smartphones category
│   ├── Oppo.jsx          # Oppo brand filter
│   ├── Apple.jsx         # Apple brand filter
│   └── Realme.jsx        # Realme brand filter
└── assets/
    └── (images & icons)
