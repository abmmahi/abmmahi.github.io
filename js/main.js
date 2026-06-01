// ============================================
// ABM MAHI Portfolio - Main JavaScript
// ============================================

// ========== 1. Mobile Menu Toggle (3 Dots Menu) ==========
(function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    if (mobileMenuBtn && mobileNavOverlay) {
        // Open menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close menu function
        function closeMobileMenu() {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close on close button click
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', closeMobileMenu);
        }

        // Close on overlay click
        mobileNavOverlay.addEventListener('click', (e) => {
            if (e.target === mobileNavOverlay) {
                closeMobileMenu();
            }
        });

        // Close on link click
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
})();

// ========== 2. Rotating Text Animation ==========
(function initRotatingText() {
    const phrases = ['Content Writing · Blogging', 'Video Editing · Photography', 'Social Media Management', 'Visual Storytelling', 'Creative Content Creation'];
    let idx = 0;
    const rotEl = document.getElementById('rotating-text');
    if (rotEl && !window._rotatingTextInitialized) {
        window._rotatingTextInitialized = true;
        setInterval(() => {
            rotEl.style.opacity = '0';
            setTimeout(() => {
                idx = (idx + 1) % phrases.length;
                rotEl.textContent = phrases[idx];
                rotEl.style.opacity = '1';
            }, 400);
        }, 3000);
    }
})();

// ========== 3. GLightbox ==========
(function initGLightbox() {
    if (typeof GLightbox !== 'undefined' && !window._glightboxInitialized) {
        window._glightboxInitialized = true;
        GLightbox({ selector: '.glightbox' });
    }
})();

// ========== 4. Loader ==========
(function initLoader() {
    window.addEventListener('load', () => {
        const loader = document.getElementById('page-loader');
        if (loader && !window._loaderInitialized) {
            window._loaderInitialized = true;
            setTimeout(() => {
                loader.classList.add('loader-hide');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1500);
        }
    });
})();

// ========== 5. Back to Top Button ==========
(function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop && !window._backToTopInitialized) {
        window._backToTopInitialized = true;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})();

// ========== 6. Active Link Highlight on Scroll ==========
(function initActiveLink() {
    if (!window._activeLinkInitialized) {
        window._activeLinkInitialized = true;
        
        function updateActiveLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            let current = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveLink);
        window.addEventListener('load', updateActiveLink);
    }
})();

// ========== 7. Skill Bars Animation on Scroll ==========
(function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                bar.style.transition = "width 1s ease-in-out";
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);
})();

// ========== 8. Smooth Scroll for Navigation Links ==========
(function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href && href !== "#") {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
})();

// ========== 9. Console Welcome Message ==========
console.log("%c🚀 ABM MAHI Portfolio Loaded Successfully!", "color: #a855f7; font-size: 16px; font-weight: bold;");
console.log("%c✨ Creativity · Consistency · Purpose", "color: #22d3ee; font-size: 14px;");
// ============================================
// Page Transition Loader - No Scroll Effect
// ============================================

(function initPageTransition() {
    const transitionLoader = document.getElementById('pageTransitionLoader');
    if (!transitionLoader) return;
    
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Function to show loader and go to section without scroll
    function showLoaderAndGoToSection(targetId) {
        // Show loader
        transitionLoader.classList.add('active');
        
        // After loader duration, jump to section (no scroll animation)
        setTimeout(() => {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Direct jump without smooth scroll
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for navbar height
                    behavior: 'auto' // 'auto' means instant jump, no scroll animation
                });
            }
            
            // Hide loader after a short delay
            setTimeout(() => {
                transitionLoader.classList.remove('active');
            }, 200);
        }, 800); // Loader shows for 0.8 seconds
    }
    
    // Add click event to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Ignore search button and empty links
            if (href && href !== '#' && href !== '/' && !this.classList.contains('searchBtn1')) {
                e.preventDefault();
                const targetId = href.replace('#', '');
                showLoaderAndGoToSection(targetId);
            }
        });
    });
})();

// Update active link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
