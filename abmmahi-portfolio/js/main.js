// ============================================
// ABM MAHI Portfolio - Main JavaScript
// ============================================

// ========== 1. Mobile Menu Toggle ==========
const toggleButton = document.querySelector(".nav-btn");
const navbarContent = document.querySelector(".mob-nav");

if (toggleButton && navbarContent) {
    toggleButton.addEventListener("click", () => {
        if (navbarContent.classList.contains("hidden")) {
            navbarContent.classList.remove("hidden");
            navbarContent.classList.add("flex");
        } else {
            navbarContent.classList.remove("flex");
            navbarContent.classList.add("hidden");
        }
    });
}

// ========== 2. Search Modal Functions ==========
const searchBtn = document.querySelector(".searchBtn");
const searchBtn1 = document.querySelector(".searchBtn1");
const searchModal = document.querySelector(".searchModal");
const searchCloseBtn = document.querySelector(".searchCloseBtn");
const searchModalBackdrop = document.querySelector(".searchModalBackdrop");

function showSearchModal() {
    if (searchModal) {
        searchModal.style.display = "flex";
    }
}

function hideSearchModal() {
    if (searchModal) {
        searchModal.style.display = "none";
    }
}

if (searchBtn) searchBtn.addEventListener("click", showSearchModal);
if (searchBtn1) searchBtn1.addEventListener("click", showSearchModal);
if (searchCloseBtn) searchCloseBtn.addEventListener("click", hideSearchModal);
if (searchModalBackdrop) searchModalBackdrop.addEventListener("click", hideSearchModal);

// ESC key to close search modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchModal && searchModal.style.display === "flex") {
        hideSearchModal();
    }
});

// ========== 3. Back to Top Button ==========
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
        } else {
            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ========== 4. Smooth Scroll for Navigation Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

// ========== 5. Close Mobile Menu After Clicking a Link ==========
const mobLinks = document.querySelectorAll(".mob-nav-link");
if (mobLinks.length) {
    mobLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarContent) {
                navbarContent.classList.remove("flex");
                navbarContent.classList.add("hidden");
            }
        });
    });
}

// ========== 6. Active Link Highlight on Scroll ==========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    let current = "";
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// ========== 7. Skill Bars Animation on Scroll ==========
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkillBars() {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            // Width is already set inline in HTML
            // Just add a smooth transition class if needed
            bar.style.transition = "width 1s ease-in-out";
        }
    });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// ========== 8. Hide Loader on Page Load ==========
window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hide");
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 1000);
    }
});

// ========== 9. Rotating Text Animation (Already in HTML) ==========
// This is handled in the inline script in index.html

// ========== 10. Optional: Disable Right Click (Uncomment if needed) ==========
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

// ========== 11. Console Welcome Message ==========
console.log("%c🚀 ABM MAHI Portfolio Loaded Successfully!", "color: #a855f7; font-size: 16px; font-weight: bold;");
console.log("%c✨ Code · Creativity · Vision", "color: #22d3ee; font-size: 14px;");

// ========== 12. Add Year to Footer Automatically ==========
const yearSpan = document.querySelector("footer .copyright-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}