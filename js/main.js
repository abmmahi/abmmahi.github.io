    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        // ========== FALLBACK SCRIPTS (If main.js fails to load) ==========
        
        // Rotating Text Animation
        (function initRotatingText() {
            const phrases = ['C · C++ · Python', 'Web Development', 'HTML · CSS', 'Data Entry', 'Social Media Management', 'Social Media Marketing'];
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
        
        // GLightbox
        (function initGLightbox() {
            if (typeof GLightbox !== 'undefined' && !window._glightboxInitialized) {
                window._glightboxInitialized = true;
                GLightbox({ selector: '.glightbox' });
            }
        })();
        
        // Loader
        (function initLoader() {
            window.addEventListener('load', () => {
                const loader = document.getElementById('page-loader');
                if (loader && !window._loaderInitialized) {
                    window._loaderInitialized = true;
                    setTimeout(() => {
                        loader.classList.add('loader-hide');
                        setTimeout(() => loader.style.display = 'none', 500);
                    }, 1500);
                }
            });
        })();
        
        // Mobile Navigation Toggle
        (function initMobileNav() {
            const navBtn = document.querySelector('.nav-btn');
            const mobNav = document.querySelector('.mob-nav');
            if (navBtn && mobNav && !window._mobileNavInitialized) {
                window._mobileNavInitialized = true;
                navBtn.addEventListener('click', () => {
                    mobNav.classList.toggle('hidden');
                });
                
                // Close mobile nav after clicking a link
                document.querySelectorAll('.mob-nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        mobNav.classList.add('hidden');
                    });
                });
            }
        })();
        
        // Back to Top Button
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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        })();
        
        // Active Link Highlight
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
        
        // Console Welcome
        console.log("%c🚀 ABM MAHI Portfolio Loaded Successfully!", "color: #a855f7; font-size: 16px; font-weight: bold;");
        console.log("%c✨ Code · Creativity · Vision", "color: #22d3ee; font-size: 14px;");
    </script>
</body>
</html>
