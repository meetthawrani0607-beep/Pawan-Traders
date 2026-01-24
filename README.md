<<<<<<< HEAD
# 🏢 Pawan Traders - Business Website

A modern, responsive business website for **Pawan Traders** - a premium supplier of plywood, MDF, laminates, and interior materials.

![Website Preview](images/hero-plywood.jpg)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional user interface
- Mobile-first responsive design
- Smooth animations and micro-interactions
- Premium color scheme and typography

### 💬 **WhatsApp Integration**
- Direct WhatsApp chat buttons throughout the site
- Floating WhatsApp button for easy contact
- Product-specific enquiry messages
- Chatbot with WhatsApp integration

### 🌐 **Multi-Language Support**
- English
- Hindi (हिंदी)
- Gujarati (ગુજરાતી)
- Easy language switcher

### 🤖 **Interactive Chatbot**
- Auto-opens on homepage
- Quick answers to common questions
- Multiple pre-defined options:
  - View Products
  - Get Price Quote
  - Business Hours
  - Location Info
  - Delivery Details
  - Quality Assurance
  - Bulk Orders
  - Direct WhatsApp Chat

### 📱 **Fully Responsive**
- Works perfectly on all devices
- Mobile-optimized navigation
- Touch-friendly interface

### 🚀 **Performance Optimized**
- Fast loading times
- Lazy loading images
- Optimized assets
- Clean, minimal code

## 📄 Pages

1. **Home** (`index.html`) - Landing page with hero section, trust badges, and product overview
2. **Products** (`products.html`) - Complete product catalog with categories
3. **About Us** (`about.html`) - Company information and mission
4. **Contact** (`contact.html`) - Contact form, map, and business details

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript** - Interactive features and functionality
- **Google Fonts** - Inter font family
- **WhatsApp API** - Direct messaging integration

## 📦 Project Structure

```
Pawan Traders/
├── index.html              # Homepage
├── products.html           # Products page
├── about.html             # About page
├── contact.html           # Contact page
├── styles.css             # Main stylesheet
├── script.js              # Core JavaScript
├── enhancements.js        # UI/UX enhancements
├── images/                # Image assets
│   ├── logo.png
│   ├── favicon.png
│   ├── hero-plywood.jpg
│   └── ... (product images)
└── README.md              # This file
```

## 🚀 Quick Start

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pawan-traders.git
   cd pawan-traders
   ```

2. **Start a local server**
   ```bash
   npx -y http-server -p 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deploy to Netlify

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the project folder
3. Get your live URL instantly!

## ⚙️ Configuration

Before deploying, update the following in `script.js`:

```javascript
const CONFIG = {
    whatsapp: {
        number: '919876543210', // ⚠️ Update with your WhatsApp number
        defaultMessage: 'Hello, I would like to enquire about your products.'
    },
    business: {
        phone: '+91 98765 43210',        // ⚠️ Update with your phone
        email: 'info@pawantraders.com',   // ⚠️ Update with your email
        address: 'Shop No. 123, Market Area, City, State - 123456' // ⚠️ Update address
    }
};
```

## 📝 Customization Guide

### Update Business Information
Edit `script.js` lines 10-18 with your business details

### Change Colors
Edit CSS variables in `styles.css` lines 12-18

### Add Product Images
Place images in the `images/` folder and update references in HTML

### Modify Translations
Edit the `translations` object in `script.js` (lines 24-217)

## 📱 Testing Checklist

- [ ] WhatsApp buttons work correctly
- [ ] Mobile menu functions properly
- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Language switcher works
- [ ] Chatbot opens and responds
- [ ] Contact form redirects to WhatsApp
- [ ] Links work on all pages

## 🐛 Bug Fixes

### WhatsApp Integration Fix
The WhatsApp functionality has been fixed using event delegation to handle both static and dynamic buttons. See [WHATSAPP_BUG_FIX.md](WHATSAPP_BUG_FIX.md) for details.

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - How to deploy and share
- [WhatsApp Bug Fix](WHATSAPP_BUG_FIX.md) - Technical fix details
- [Quick Start Guide](QUICK_START.md) - Fast deployment steps

## 🤝 Support

For issues or questions:
- Create an issue in the GitHub repository
- Contact via WhatsApp using the site's chat feature

## 📄 License

This project is available for commercial use.

## 🎉 Credits

Built with modern web technologies and best practices.

---

**🚀 Ready for production deployment!**

Made with ❤️ for Pawan Traders
=======
# Pawan-Traders
>>>>>>> 313937d7d34376aa6df1c38fb8dfaa8764bb4b72
