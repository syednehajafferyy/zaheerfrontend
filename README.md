# Zaheer Seed Corporation — Frontend

The official, responsive frontend web application for **Zaheer Seed Corporation**, an agricultural seed breeding, processing, and distribution company based in Kasur, Pakistan.

---

## 🌾 Highlights & Features

- **Heritage & Brand Identity**:
  - Palette inspired by natural agriculture: Forest Green (`#1F3D2B`), Deep Earth (`#16301F`), Olive Accent (`#6B7340`), Warm Paper (`#FAF7F0`), and Sand (`#EAE2D0`).
  - Typography using **Fraunces** serif and **Source Sans 3**.
- **Interactive Hero Canvas**:
  - Animated sunrise sequence and dynamic SVG field furrows drawing across the screen on page load.
- **Seeds Catalogue & Filtering**:
  - Filter crops instantly by category (**All**, **Cereals**, **Fibre Crops**).
  - Custom SVG botanical illustrations for wheat, rice, maize, and cotton.
  - One-click *Add to Cart* with tactile button feedback.
- **Interactive Shopping Cart Drawer**:
  - Slide-out cart drawer with live item count pill in header.
  - Increment/decrement quantity controls and item removal.
  - Integrated order request form (Name, Phone, Delivery Address, Notes).
  - Direct WhatsApp link for bulk orders (`+92 300 6579784`).
- **4-Stage Process Timeline**:
  - Scroll-linked animated stem with progressive leaf node highlights for:
    1. **Seed Breeding**: Selecting crops tailored to local growing conditions.
    2. **Seed Processing**: Cleaning, sorting, and uniform preparation.
    3. **Quality Handling**: Moisture protection and controlled storage.
    4. **Distribution**: Reliable delivery to dealers and farmers.
- **Scroll-Reveal Statement**:
  - Word-by-word highlight animation as the user scrolls through the core mission quote.
- **FAQ Accordion**:
  - Accessible `<details>` / `<summary>` accordion answering common farmer and dealer questions.
- **Contact & Inquiry Form**:
  - Form capturing Name, Email, Phone, Subject, and Message.
  - Direct telephone (`+92 300 6579784`) and WhatsApp communication links.
- **Responsive Mobile Navigation**:
  - Accessible hamburger menu with smooth slide transitions and focus traps.

---

## 📁 Repository Structure

```text
zaheerfrontend/
├── index.html              # Main customer-facing website application
├── design-preview/
│   └── index.html          # Approved visual design reference
├── public/
│   └── images/
│       └── logo.png        # Official Zaheer Seed Corporation logo
├── vercel.json             # Vercel deployment configuration & API rewrites
├── .gitignore              # Standard git ignore rules
└── README.md               # Frontend documentation
```

---

## 🚀 Running Locally

This is a standalone, dependency-free frontend that can be served using any local web server or opened directly in a modern web browser:

### Option 1: Node.js `npx serve`
```bash
npx serve .
```

### Option 2: Python HTTP Server
```bash
python -m http.server 3000
```

### Option 3: Direct Browser
Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

---

## 🌐 Deployment

### Vercel Deployment
1. Import this repository into [Vercel](https://vercel.com).
2. Framework Preset: **Other** / **Static Site** (no build command required).
3. Root Directory: `./`
4. Deploy!

### GitHub Pages
1. Go to repository **Settings** > **Pages**.
2. Under **Branch**, select `main` and root (`/`).
3. Save to publish instantly.

---

## 🔗 Connecting to the Backend Service

When deployed alongside the Zaheer Corporation Backend API, API calls (`/api/*`) and uploaded media (`/uploads/*`) are automatically proxied via [vercel.json](file:///C:/Users/syedn/AppData/Local/Temp/zaheerfrontend_check/vercel.json) to `https://zaheerbackend.vercel.app`.

---

## 🏢 Company Information

- **Company**: Zaheer Seed Corporation
- **Location**: Office No. 12, Shareef Plaza, Steel Bagh Chowk, Kasur, Pakistan
- **Phone / WhatsApp**: +92 300 6579784
