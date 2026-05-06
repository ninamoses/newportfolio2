const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  // Toggle navigation menu
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const expanded = siteNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded);
  });

  // Close nav when clicking a link
  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav with Escape key for better accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
