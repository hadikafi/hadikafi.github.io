/**
 * Mohammadhadi Kafi (Hadi Kafi) - Personal Website
 * Senior DevOps & Infrastructure Engineer
 */

(function () {
  'use strict';

  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const toast = document.getElementById('toastNotice');

  /* ==========================================================================
     THEME MANAGEMENT (Dark / Light Mode)
     ========================================================================== */
  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem('hk-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {
      // localStorage may fail in restricted iframes
    }
    // Default to dark theme for high-tech aesthetic
    return 'dark';
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    try {
      localStorage.setItem('hk-theme', theme);
    } catch (e) {}
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // Initialize Theme
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.dataset.theme === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      showToast(`Switched to ${next} theme`);
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  if (menuToggle && nav) {
    function closeNav() {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }

    function toggleNav() {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        closeNav();
      }
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeNav();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        menuToggle.focus();
      }
    });
  }

  /* ==========================================================================
     SCROLLSPY / ACTIVE NAVIGATION LINK
     ========================================================================== */
  const navLinks = Array.from(document.querySelectorAll('.nav > a[href^="#"]'));
  const sectionIds = navLinks.map(link => link.getAttribute('href').substring(1));
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.setAttribute('aria-current', 'location');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach(sec => observer.observe(sec));
  }

  /* ==========================================================================
     TOAST NOTIFICATION
     ========================================================================== */
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    const msgElem = toast.querySelector('.toast-msg');
    if (msgElem) msgElem.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  /* ==========================================================================
     COPY TO CLIPBOARD ACTIONS
     ========================================================================== */
  window.copyText = function (text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast(message || 'Copied to clipboard!'),
        () => fallbackCopy(text, message)
      );
    } else {
      fallbackCopy(text, message);
    }
  };

  function fallbackCopy(text, message) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(message || 'Copied to clipboard!');
    } catch (err) {
      showToast('Could not copy automatically');
    }
  }

  /* ==========================================================================
     BACK TO TOP
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     CONSOLE EASTER EGG FOR DEVOPS RECRUITERS / ENGINEERS
     ========================================================================== */
  console.log(
    '%c[Hadi Kafi - DevOps & Infrastructure]%c Air-Gapped K8s • Bare-Metal AI (8x H200) • Zero Downtime Banking',
    'color: #10b981; font-weight: bold; font-size: 13px;',
    'color: #94a3b8; font-size: 12px;'
  );
  console.log('Reach out: mohammadhadikafi@gmail.com | LinkedIn: /in/hadikafi');
})();
