// ============================================
// PAWAN TRADERS - PRODUCTION JAVASCRIPT
// Clean, Minimal, Performance-Optimized
// ============================================

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    whatsapp: {
        number: '919876543210', // Replace with actual owner's number
        defaultMessage: 'Hello, I would like to enquire about your products.'
    },
    business: {
        phone: '+91 98765 43210',
        email: 'info@pawantraders.com',
        address: 'Shop No. 123, Market Area, City, State - 123456'
    }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================
const translations = {
    en: {
        // Header
        nav_home: 'Home',
        nav_products: 'Products',
        nav_about: 'About Us',
        nav_contact: 'Contact',

        // Hero
        hero_title: 'Premium Plywood & Interior Materials',
        hero_subtitle: 'Your Trusted Partner for Quality Building Materials',
        hero_cta_whatsapp: 'Chat on WhatsApp',
        hero_cta_call: 'Call Now',
        hero_cta_enquire: 'Send Enquiry',

        // Trust Badges
        trust_quality_title: 'Premium Quality',
        trust_quality_desc: 'Sourced from top manufacturers',
        trust_range_title: 'Wide Range',
        trust_range_desc: 'Comprehensive product selection',
        trust_reliable_title: 'Reliable Supply',
        trust_reliable_desc: 'Consistent availability & delivery',

        // Products
        products_title: 'Our Products',
        products_subtitle: 'High-quality materials for your interior needs',
        category_plywood: 'Plywood',
        category_mdf: 'MDF Boards',
        category_laminates: 'Laminates',
        category_interior: 'Interior Materials',
        btn_enquire: 'Enquire on WhatsApp',

        // About
        about_title: 'About Pawan Traders',
        about_mission: 'Our Mission',
        about_why_choose: 'Why Choose Us',

        // Contact
        contact_title: 'Contact Us',
        contact_subtitle: 'Get in touch for your requirements',
        contact_form_name: 'Your Name',
        contact_form_email: 'Email Address',
        contact_form_phone: 'Phone Number',
        contact_form_message: 'Your Message',
        contact_form_submit: 'Send Message',
        contact_phone: 'Phone',
        contact_email: 'Email',
        contact_address: 'Address',
        contact_hours: 'Business Hours',
        contact_hours_value: 'Mon-Sat: 9:00 AM - 7:00 PM',

        // Footer
        footer_tagline: 'Your trusted partner for quality building materials',
        footer_quick_links: 'Quick Links',
        footer_contact_us: 'Contact Us',
        footer_copyright: '© 2026 Pawan Traders. All rights reserved.',

        // Chatbot
        chatbot_title: 'Ask Us',
        chatbot_welcome: 'Hello! How can I help you today?',
        chatbot_option_products: 'View Products',
        chatbot_option_hours: 'Business Hours',
        chatbot_option_location: 'Our Location',
        chatbot_option_whatsapp: 'Chat on WhatsApp'
    },
    hi: {
        // Header
        nav_home: 'होम',
        nav_products: 'उत्पाद',
        nav_about: 'हमारे बारे में',
        nav_contact: 'संपर्क करें',

        // Hero
        hero_title: 'प्रीमियम प्लाईवुड और इंटीरियर सामग्री',
        hero_subtitle: 'गुणवत्ता निर्माण सामग्री के लिए आपका विश्वसनीय साझेदार',
        hero_cta_whatsapp: 'WhatsApp पर चैट करें',
        hero_cta_call: 'अभी कॉल करें',
        hero_cta_enquire: 'पूछताछ भेजें',

        // Trust Badges
        trust_quality_title: 'प्रीमियम गुणवत्ता',
        trust_quality_desc: 'शीर्ष निर्माताओं से प्राप्त',
        trust_range_title: 'विस्तृत श्रृंखला',
        trust_range_desc: 'व्यापक उत्पाद चयन',
        trust_reliable_title: 'विश्वसनीय आपूर्ति',
        trust_reliable_desc: 'निरंतर उपलब्धता और डिलीवरी',

        // Products
        products_title: 'हमारे उत्पाद',
        products_subtitle: 'आपकी इंटीरियर जरूरतों के लिए उच्च गुणवत्ता सामग्री',
        category_plywood: 'प्लाईवुड',
        category_mdf: 'MDF बोर्ड',
        category_laminates: 'लैमिनेट',
        category_interior: 'इंटीरियर सामग्री',
        btn_enquire: 'WhatsApp पर पूछताछ करें',

        // About
        about_title: 'पवन ट्रेडर्स के बारे में',
        about_mission: 'हमारा मिशन',
        about_why_choose: 'हमें क्यों चुनें',

        // Contact
        contact_title: 'संपर्क करें',
        contact_subtitle: 'अपनी आवश्यकताओं के लिए संपर्क करें',
        contact_form_name: 'आपका नाम',
        contact_form_email: 'ईमेल पता',
        contact_form_phone: 'फोन नंबर',
        contact_form_message: 'आपका संदेश',
        contact_form_submit: 'संदेश भेजें',
        contact_phone: 'फोन',
        contact_email: 'ईमेल',
        contact_address: 'पता',
        contact_hours: 'व्यापार समय',
        contact_hours_value: 'सोम-शनि: सुबह 9:00 - शाम 7:00',

        // Footer
        footer_tagline: 'गुणवत्ता निर्माण सामग्री के लिए आपका विश्वसनीय साझेदार',
        footer_quick_links: 'त्वरित लिंक',
        footer_contact_us: 'संपर्क करें',
        footer_copyright: '© 2026 पवन ट्रेडर्स। सर्वाधिकार सुरक्षित।',

        // Chatbot
        chatbot_title: 'हमसे पूछें',
        chatbot_welcome: 'नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूं?',
        chatbot_option_products: 'उत्पाद देखें',
        chatbot_option_hours: 'व्यापार समय',
        chatbot_option_location: 'हमारा स्थान',
        chatbot_option_whatsapp: 'WhatsApp पर चैट करें'
    },
    gu: {
        // Header
        nav_home: 'હોમ',
        nav_products: 'ઉત્પાદનો',
        nav_about: 'અમારા વિશે',
        nav_contact: 'સંપર્ક',

        // Hero
        hero_title: 'પ્રીમિયમ પ્લાયવુડ અને ઇન્ટિરિયર સામગ્રી',
        hero_subtitle: 'ગુણવત્તા બિલ્ડિંગ સામગ્રી માટે તમારા વિશ્વાસુ ભાગીદાર',
        hero_cta_whatsapp: 'WhatsApp પર ચેટ કરો',
        hero_cta_call: 'હમણાં કૉલ કરો',
        hero_cta_enquire: 'પૂછપરછ મોકલો',

        // Trust Badges
        trust_quality_title: 'પ્રીમિયમ ગુણવત્તા',
        trust_quality_desc: 'ટોચના ઉત્પાદકો પાસેથી મેળવેલ',
        trust_range_title: 'વિશાળ શ્રેણી',
        trust_range_desc: 'વ્યાપક ઉત્પાદન પસંદગી',
        trust_reliable_title: 'વિશ્વસનીય સપ્લાય',
        trust_reliable_desc: 'સતત ઉપલબ્ધતા અને ડિલિવરી',

        // Products
        products_title: 'અમારા ઉત્પાદનો',
        products_subtitle: 'તમારી ઇન્ટિરિયર જરૂરિયાતો માટે ઉચ્ચ ગુણવત્તાની સામગ્રી',
        category_plywood: 'પ્લાયવુડ',
        category_mdf: 'MDF બોર્ડ',
        category_laminates: 'લેમિનેટ',
        category_interior: 'ઇન્ટિરિયર સામગ્રી',
        btn_enquire: 'WhatsApp પર પૂછપરછ કરો',

        // About
        about_title: 'પવન ટ્રેડર્સ વિશે',
        about_mission: 'અમારું મિશન',
        about_why_choose: 'અમને કેમ પસંદ કરો',

        // Contact
        contact_title: 'સંપર્ક કરો',
        contact_subtitle: 'તમારી જરૂરિયાતો માટે સંપર્કમાં રહો',
        contact_form_name: 'તમારું નામ',
        contact_form_email: 'ઇમેઇલ સરનામું',
        contact_form_phone: 'ફોન નંબર',
        contact_form_message: 'તમારો સંદેશ',
        contact_form_submit: 'સંદેશ મોકલો',
        contact_phone: 'ફોન',
        contact_email: 'ઇમેઇલ',
        contact_address: 'સરનામું',
        contact_hours: 'વ્યવસાય સમય',
        contact_hours_value: 'સોમ-શનિ: સવારે 9:00 - સાંજે 7:00',

        // Footer
        footer_tagline: 'ગુણવત્તા બિલ્ડિંગ સામગ્રી માટે તમારા વિશ્વાસુ ભાગીદાર',
        footer_quick_links: 'ઝડપી લિંક્સ',
        footer_contact_us: 'સંપર્ક કરો',
        footer_copyright: '© 2026 પવન ટ્રેડર્સ. બધા અધિકારો અનામત.',

        // Chatbot
        chatbot_title: 'અમને પૂછો',
        chatbot_welcome: 'નમસ્તે! આજે હું તમારી કેવી રીતે મદદ કરી શકું?',
        chatbot_option_products: 'ઉત્પાદનો જુઓ',
        chatbot_option_hours: 'વ્યવસાય સમય',
        chatbot_option_location: 'અમારું સ્થાન',
        chatbot_option_whatsapp: 'WhatsApp પર ચેટ કરો'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_language', lang);

    // Update active state in language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;

        // Try to get translation in selected language, fallback to English if not found
        let translatedText = null;

        if (translations[lang] && translations[lang][key]) {
            translatedText = translations[lang][key];
        } else if (translations['en'] && translations['en'][key]) {
            // Fallback to English if translation not found
            translatedText = translations['en'][key];
            console.warn(`Translation missing for key "${key}" in language "${lang}", using English fallback`);
        }

        if (translatedText) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    });
}


// ============================================
// MOBILE MENU TOGGLE - REMOVED
// (Handled by enhancements.js to avoid conflicts)
// ============================================

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// WHATSAPP FUNCTIONS
// ============================================
function openWhatsApp(message = null) {
    const msg = message || CONFIG.whatsapp.defaultMessage;
    const url = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

function initWhatsAppButtons() {
    // Use event delegation to handle both static and dynamic WhatsApp buttons
    document.addEventListener('click', (e) => {
        const whatsappBtn = e.target.closest('[data-whatsapp]');
        if (whatsappBtn) {
            e.preventDefault();
            const customMessage = whatsappBtn.dataset.whatsappMessage || null;
            openWhatsApp(customMessage);
        }
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const phone = form.querySelector('[name="phone"]').value;
            const message = form.querySelector('[name="message"]').value;

            // Create WhatsApp message with form data
            const whatsappMessage = `
New Enquiry from Website:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message: ${message}
      `.trim();

            // Open WhatsApp with pre-filled message
            openWhatsApp(whatsappMessage);

            // Reset form
            form.reset();

            // Show success message
            alert('Redirecting to WhatsApp. Your enquiry will be sent to our team.');
        });
    }
}

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }

    createChatbotHTML() {
        const container = document.querySelector('.chatbot-container');
        if (!container) return;

        // Chatbot is already in HTML, just initialize
    }

    attachEventListeners() {
        const toggle = document.querySelector('.chatbot-toggle');
        const close = document.querySelector('.chatbot-close');
        const options = document.querySelectorAll('.chatbot-option');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }

        if (close) {
            close.addEventListener('click', () => this.close());
        }

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.handleOption(e.target.dataset.option);
            });
        });
    }

    toggle() {
        const window = document.querySelector('.chatbot-window');
        if (window) {
            this.isOpen = !this.isOpen;
            window.classList.toggle('active');
        }
    }

    close() {
        const window = document.querySelector('.chatbot-window');
        if (window) {
            this.isOpen = false;
            window.classList.remove('active');
        }
    }

    showWelcomeMessage() {
        // Welcome message is already in HTML
    }

    addMessage(text, isBot = true) {
        const messagesContainer = document.querySelector('.chatbot-messages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isBot ? 'bot' : 'user'}`;
        messageDiv.textContent = text;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    handleOption(option) {
        switch (option) {
            case 'products':
                this.addMessage('You selected: View Products', false);
                this.addMessage('We offer Plywood, MDF, Laminates, and Interior Materials. Visit our Products page for details, or chat with our owner on WhatsApp for specific requirements.');
                break;

            case 'price':
                this.addMessage('You selected: Get Price Quote', false);
                this.addMessage('For the best prices and customized quotes, please contact us on WhatsApp with your requirements. We offer competitive rates for bulk orders!');
                setTimeout(() => {
                    openWhatsApp('Hi! I would like to get a price quote for your products.');
                }, 2000);
                break;

            case 'hours':
                this.addMessage('You selected: Business Hours', false);
                this.addMessage(`We are open Monday to Saturday, 9:00 AM - 7:00 PM. For urgent inquiries, please contact us on WhatsApp.`);
                break;

            case 'location':
                this.addMessage('You selected: Our Location', false);
                this.addMessage(`${CONFIG.business.address}. Visit our Contact page for the map and directions.`);
                break;

            case 'delivery':
                this.addMessage('You selected: Delivery Info', false);
                this.addMessage('We provide reliable delivery services across the region. Delivery charges vary based on location and order size. Chat with us on WhatsApp for specific delivery details!');
                break;

            case 'quality':
                this.addMessage('You selected: Quality Assurance', false);
                this.addMessage('We source all our products from top manufacturers and maintain strict quality standards. All products come with manufacturer warranties. Contact us on WhatsApp for quality certificates!');
                break;

            case 'bulk':
                this.addMessage('You selected: Bulk Orders', false);
                this.addMessage('We specialize in bulk orders with special pricing for contractors and businesses. Contact us on WhatsApp with your requirements for the best deals!');
                setTimeout(() => {
                    openWhatsApp('Hi! I am interested in placing a bulk order.');
                }, 2000);
                break;

            case 'whatsapp':
                this.addMessage('You selected: Chat on WhatsApp', false);
                this.addMessage('Connecting you to our owner on WhatsApp...');
                setTimeout(() => {
                    openWhatsApp('Hello! I have a question from the website chatbot.');
                    this.close();
                }, 1000);
                break;

            default:
                this.addMessage('Thanks for your interest! Please select an option above or contact us directly on WhatsApp.');
                break;
        }
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Set language from localStorage or default to English
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    setLanguage(savedLang);

    // Initialize all features
    // Note: initMobileMenu() is handled by enhancements.js
    highlightActiveNav();
    initWhatsAppButtons();
    initContactForm();
    initSmoothScroll();
    initLazyLoading();

    // Initialize chatbot
    const chatbot = new Chatbot();

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Add click-to-call functionality
    document.querySelectorAll('[href^="tel:"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Let the default behavior work (initiates call on mobile)
            console.log('Call initiated');
        });
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Defer non-critical scripts
window.addEventListener('load', () => {
    // Any non-critical initialization can go here
    console.log('Pawan Traders website loaded successfully');
});
