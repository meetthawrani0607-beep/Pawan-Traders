// ============================================
// PAWAN TRADERS - UI/UX ENHANCEMENT SCRIPT
// Scroll Animations & Micro-Interactions
// ============================================

(function () {
    'use strict';

    // ============================================
    // SCROLL ANIMATIONS - Intersection Observer
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, .slide-up, .stagger-item').forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // HEADER SCROLL BEHAVIOR
    // ============================================
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ============================================
    // SMOOTH SCROLL TO SECTION
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
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
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Also handle regular lazy loading attribute
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.addEventListener('load', function () {
                this.classList.add('loaded');
            });
        });
    }

    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    function initButtonRipples() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ============================================
    // PARALLAX SCROLL EFFECT (Subtle)
    // ============================================
    function initSubtleParallax() {
        const parallaxElements = document.querySelectorAll('.hero-image');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(el => {
                const speed = 0.3;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ============================================
    // PRODUCT CARD TILT EFFECT
    // ============================================
    function initCardTilt() {
        const cards = document.querySelectorAll('.product-card, .trust-badge');

        cards.forEach(card => {
            card.addEventListener('mousemove', handleTilt);
            card.addEventListener('mouseleave', resetTilt);
        });

        function handleTilt(e) {
            const card = e.currentTarget;
            card.style.transform = 'translateY(-8px)';
        }

        function resetTilt(e) {
            const card = e.currentTarget;
            card.style.transform = '';
        }
    }

    // ============================================
    // WHATSAPP BUTTON VISIBILITY
    // ============================================
    function initWhatsAppButtonVisibility() {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (!whatsappBtn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                whatsappBtn.style.opacity = '1';
                whatsappBtn.style.pointerEvents = 'all';
            } else {
                whatsappBtn.style.opacity = '0';
                whatsappBtn.style.pointerEvents = 'none';
            }
        });

        // Initial state
        if (window.pageYOffset < 300) {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.pointerEvents = 'none';
        }
    }

    // ============================================
    // FORM INPUT ANIMATIONS
    // ============================================
    function initFormAnimations() {
        const inputs = document.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.parentElement.classList.add('input-focused');
            });

            input.addEventListener('blur', function () {
                if (!this.value) {
                    this.parentElement.classList.remove('input-focused');
                }
            });

            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('input-focused');
            }
        });
    }

    // ============================================
    // COUNTER ANIMATION (for stats/numbers)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.counter);
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ============================================
    // ADD CSS CLASSES FOR ANIMATION
    // ============================================
    function addAnimationClasses() {
        // Add fade-in to sections
        document.querySelectorAll('section').forEach(section => {
            if (!section.classList.contains('hero')) {
                section.classList.add('fade-in');
            }
        });

        // Add stagger to product cards
        document.querySelectorAll('.product-card, .trust-badge').forEach(card => {
            card.classList.add('stagger-item');
        });

        // Add slide-up to headings
        document.querySelectorAll('h2, h3').forEach(heading => {
            if (!heading.closest('.hero')) {
                heading.classList.add('slide-up');
            }
        });
    }

    // ============================================
    // AUTO-OPEN CHATBOT WITH WELCOME MESSAGE
    // Only on index.html and only once per user
    // ============================================
    function initChatbotAutoOpen() {
        const chatbotWindow = document.querySelector('.chatbot-window');
        const chatbotMessages = document.querySelector('.chatbot-messages');

        if (!chatbotWindow || !chatbotMessages) return;

        // Check if we're on the index page
        const isIndexPage = window.location.pathname.endsWith('index.html') ||
            window.location.pathname.endsWith('/') ||
            window.location.pathname === '/';


        // Only auto-open on index page (every time)
        if (!isIndexPage) {
            return;
        }

        // Auto-open after 2 seconds
        setTimeout(() => {
            // Open the chatbot
            chatbotWindow.classList.add('active');

            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chatbot-message bot typing-indicator';
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            chatbotMessages.appendChild(typingDiv);

            // After 1.5 seconds, remove typing and show welcome message
            setTimeout(() => {
                typingDiv.remove();

                // Welcome message already exists, just scroll to it
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 1500);

            // Auto-close after 8 seconds (total)
            setTimeout(() => {
                chatbotWindow.classList.remove('active');
            }, 8000);

            // Mark as shown in localStorage
            localStorage.setItem('chatbotWelcomeShown', 'true');

        }, 2000);
    }

    // ============================================
    // CHAT INPUT HANDLER
    // ============================================
    function initChatInput() {
        const chatInput = document.querySelector('.chatbot-text-input');
        const sendBtn = document.querySelector('.chatbot-send-btn');
        const chatMessages = document.querySelector('.chatbot-messages');

        if (!chatInput || !sendBtn || !chatMessages) return;

        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'chatbot-message user';
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);

            // Clear input
            chatInput.value = '';

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Show typing indicator
            setTimeout(() => {
                const typingDiv = document.createElement('div');
                typingDiv.className = 'chatbot-message bot typing-indicator';
                typingDiv.innerHTML = '<span></span><span></span><span></span>';
                chatMessages.appendChild(typingDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Bot response after 1.5 seconds
                setTimeout(() => {
                    typingDiv.remove();

                    const botMsg = document.createElement('div');
                    botMsg.className = 'chatbot-message bot';
                    botMsg.innerHTML = 'Thanks for your message! For immediate assistance, please <strong><a href="#" data-whatsapp style="color: var(--color-primary); text-decoration: underline;">chat with us on WhatsApp</a></strong> or call us directly.';
                    chatMessages.appendChild(botMsg);

                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1500);
            }, 500);
        }

        // Send on button click
        sendBtn.addEventListener('click', sendMessage);

        // Send on Enter key
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMain = document.querySelector('.nav-main');
        const navLinks = document.querySelectorAll('.nav-link');
        const backdrop = document.querySelector('.mobile-menu-backdrop');

        console.log('🍔 Mobile menu init:', { btn: !!mobileMenuBtn, nav: !!navMain, backdrop: !!backdrop });

        if (!mobileMenuBtn || !navMain) return;

        // Prevent double initialization
        if (mobileMenuBtn.dataset.initialized === 'true') {
            console.log('⚠️ Mobile menu already initialized, skipping');
            return;
        }

        mobileMenuBtn.dataset.initialized = 'true';
        console.log('✅ Mobile menu initializing...');

        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMain.classList.toggle('active');
            if (backdrop) backdrop.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMain.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMain.classList.remove('active');
                if (backdrop) backdrop.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking on backdrop
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMain.classList.remove('active');
                backdrop.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close menu on window resize to desktop size
        window.addEventListener('resize', () => {
            if (window.innerWidth > 968) {
                mobileMenuBtn.classList.remove('active');
                navMain.classList.remove('active');
                if (backdrop) backdrop.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // INITIALIZE ALL ENHANCEMENTS
    // ============================================
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runEnhancements);
        } else {
            runEnhancements();
        }
    }

    function runEnhancements() {
        // Add animation classes first
        addAnimationClasses();

        // Initialize features
        initScrollAnimations();
        initHeaderScroll();
        initSmoothScroll();
        initLazyLoading();
        initButtonRipples();
        initCardTilt();
        initWhatsAppButtonVisibility();
        initFormAnimations();
        initCounters();

        // Auto-open chatbot with welcome message
        initChatbotAutoOpen();

        // Initialize chat input functionality
        initChatInput();

        // Initialize mobile menu
        initMobileMenu();

        // Optional: Subtle parallax (comment out if you don't want it)
        // initSubtleParallax();

        console.log('✨ UI/UX Enhancements Loaded Successfully');
    }

    // Start initialization
    init();

})();
