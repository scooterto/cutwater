/* ===================================================
   CUTWATER LANDING PAGE - JAVASCRIPT
   ===================================================

   This file contains interactive functionality.
   Currently minimal - add features as needed.

   =================================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Theme Toggle (placeholder for dark mode) =====
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle dark mode class on body
            document.body.classList.toggle('dark-mode');

            // Save preference to localStorage
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // ===== Mobile Menu Toggle (add if needed) =====
    // const hamburger = document.querySelector('.hamburger');
    // const mobileMenu = document.querySelector('.mobile-menu');
    // if (hamburger && mobileMenu) {
    //     hamburger.addEventListener('click', function() {
    //         mobileMenu.classList.toggle('active');
    //     });
    // }

    // ===== Scroll Animations (optional) =====
    // Uncomment to add fade-in animations on scroll
    /*
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .feature-card, .stat-card, .process-step, .risk-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    */

});

/* ===================================================
   CUSTOMIZATION GUIDE
   ===================================================

   To add dark mode support:
   1. Add dark mode color variables in styles.css:

      body.dark-mode {
          --dark-navy: #0a1128;
          --primary-navy: #f8f9fa;
          --body-gray: #b0b8c4;
          --white: #0f1a3d;
          --light-bg: #1a2b5f;
          --border-gray: #2c4a8c;
      }

   To add mobile menu:
   1. Add hamburger HTML in nav section
   2. Add mobile menu HTML
   3. Uncomment mobile menu JS above
   4. Add CSS for .hamburger and .mobile-menu

   =================================================== */
