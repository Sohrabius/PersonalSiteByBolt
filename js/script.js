// ===== DATA =====
const projects = [
  {
    name: 'Dynamics 365 CRM Customization Suite',
    category: 'Enterprise CRM',
    description: 'Architected a suite of high-performance Dynamics 365 plugins and custom extensions powering complex business logic for sales and finance modules.',
    highlights: [
      'Custom plugin development for N:N relationship sync',
      'Real-time data sync between CRM and external financial systems',
      'Custom workflows automating multi-step business processes',
    ],
    tech: ['C#', 'Dynamics 365', 'Web API', 'SQL Server'],
    status: 'Internal',
    statusClass: 'status-Internal',
  },
  {
    name: 'CRM ↔ ERP Integration Pipeline',
    category: 'System Integration',
    description: 'Owned the integration pipeline ensuring secure, real-time synchronization between Dynamics 365 CRM and external corporate and financial platforms.',
    highlights: [
      'Windows Services for background data sync',
      'REST + SOAP/WSDL integration with legacy ERPs',
      'Reliability hardening across sales & finance modules',
    ],
    tech: ['.NET Core', 'Windows Services', 'REST', 'SOAP/WSDL'],
    status: 'Internal',
    statusClass: 'status-Internal',
  },
  {
    name: 'Financial Management Platform',
    category: 'Full-Stack Web App',
    description: 'Designed and delivered a full-stack financial management web application for a freelance client, from data model to responsive UI.',
    highlights: [
      'End-to-end full-stack delivery',
      'Refactored SQL Server data-access layer',
      'Responsive, interactive UI with jQuery + Bootstrap',
    ],
    tech: ['ASP.NET MVC', 'SQL Server', 'jQuery', 'Bootstrap'],
    status: 'Case Study',
    statusClass: 'status-CaseStudy',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'E-Commerce & Corporate Portals',
    category: 'Web Development',
    description: 'Built and modernized multiple e-commerce sites and corporate portals, migrating legacy ASP.NET WebForms to current web standards.',
    highlights: [
      'Legacy WebForms → modern MVC modernization',
      'Responsive, interactive frontends',
      'Integrated corporate websites with CRM portals',
    ],
    tech: ['ASP.NET', 'JavaScript', 'Kendo UI', 'Bootstrap'],
    status: 'Case Study',
    statusClass: 'status-CaseStudy',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'Interactive Digital Magazine',
    category: 'Web Development',
    description: 'Delivered an interactive digital magazine platform with rich media experiences and a modernized backend.',
    highlights: [
      'Interactive, media-rich UI',
      'Full-stack delivery for freelance client',
      'Modernized legacy application',
    ],
    tech: ['ASP.NET MVC', 'JavaScript', 'Bootstrap'],
    status: 'Case Study',
    statusClass: 'status-CaseStudy',
    link: 'https://linkedin.com/in/sohrabius',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'AI Coding Agent R&D',
    category: 'R&D / Emerging Tech',
    description: 'Prototyped and deployed multiple demo applications to explore new architectures and business models, with active research into AI agents and LLM-driven pipelines.',
    highlights: [
      'LLM-assisted development workflows',
      'CLI-based coding tool exploration (Claude Code)',
      'Prompt engineering for repetitive task automation',
    ],
    tech: ['Claude Code', 'LLM workflows', 'Python', 'Prompt Engineering'],
    status: 'Demo',
    statusClass: 'status-Demo',
  },
];

const SUPABASE_URL = 'https://bgbtjeawkdheaymacncc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnYnRqZWF3a2RoZWF5bWFjbmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3Mjc5NTQsImV4cCI6MjA5OTMwMzk1NH0.Nt8dKJjF6J3w0DEAlhNJMM2blmJXTVKBFuaZ_UkNVh0';

// ===== ICONS =====
const folderIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v8a2 2 0 0 1-2 2Z"/></svg>';
const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
const linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

// ===== PORTFOLIO RENDERING =====
function renderProjects(filter) {
  const grid = document.getElementById('portfolio-grid');
  const filtered = filter === 'All' ? projects : projects.filter(function (p) { return p.category === filter; });

  grid.innerHTML = filtered.map(function (p, i) {
    var techTags = p.tech.map(function (t) { return '<li>' + t + '</li>'; }).join('');
    var highlights = p.highlights.map(function (h) {
      return '<li>' + checkIcon + '<span>' + h + '</span></li>';
    }).join('');
    var linkHtml = p.link
      ? '<a href="' + p.link + '" target="_blank" rel="noreferrer" class="project-link">' +
        (p.linkLabel || 'View project') + ' ' + linkIcon + '</a>'
      : '';

    return (
      '<article class="project-card reveal is-visible" style="transition-delay:' + (0.06 * i + 0.15) + 's">' +
        '<div class="project-top">' +
          '<div>' +
            '<span class="project-status ' + p.statusClass + '">' + p.status + '</span>' +
            '<h3>' + p.name + '</h3>' +
            '<p class="project-category">' + p.category + '</p>' +
          '</div>' +
          '<span class="project-icon">' + folderIcon + '</span>' +
        '</div>' +
        '<p class="project-desc">' + p.description + '</p>' +
        '<ul class="project-highlights">' + highlights + '</ul>' +
        '<ul class="project-tech">' + techTags + '</ul>' +
        linkHtml +
      '</article>'
    );
  }).join('');
}

// ===== PORTFOLIO FILTERS =====
function initFilters() {
  var filters = document.getElementById('portfolio-filters');
  filters.addEventListener('click', function (e) {
    if (!e.target.matches('.filter-btn')) return;
    filters.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    renderProjects(e.target.dataset.filter);
  });
}

// ===== SCROLL SPY =====
function initScrollSpy() {
  var navIds = ['home', 'about', 'skills', 'experience', 'portfolio', 'beyond', 'contact'];
  var navLinks = document.querySelectorAll('[data-nav]');

  function update() {
    var scrollPos = window.scrollY + 120;
    var current = navIds[0];
    for (var i = 0; i < navIds.length; i++) {
      var el = document.getElementById(navIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        current = navIds[i];
      }
    }
    navLinks.forEach(function (link) {
      if (link.dataset.nav === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ===== NAV SCROLLED STATE =====
function initNavScroll() {
  var header = document.getElementById('nav-header');
  function update() {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('form-submit');
  var labelEl = submitBtn.querySelector('.submit-label');
  var loadingEl = submitBtn.querySelector('.submit-loading');
  var errorBox = document.getElementById('form-error');
  var errorMsg = document.getElementById('form-error-msg');
  var successBox = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    labelEl.style.display = 'none';
    loadingEl.style.display = 'inline-flex';
    errorBox.style.display = 'none';
    successBox.style.display = 'none';

    var data = new FormData(form);
    var name = (data.get('name') || '').trim();
    var email = (data.get('email') || '').trim();
    var subject = (data.get('subject') || '').trim();
    var message = (data.get('message') || '').trim();

    if (!name || !email || !message) {
      showError('Please fill in your name, email, and message.');
      return;
    }

    try {
      var res = await fetch(SUPABASE_URL + '/rest/v1/contact_messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject || null,
          message: message,
        }),
      });

      if (!res.ok) {
        throw new Error('Request failed (' + res.status + ')');
      }

      successBox.style.display = 'flex';
      form.reset();
    } catch (err) {
      showError('Something went wrong sending your message. Please try again or email me directly.');
    } finally {
      submitBtn.disabled = false;
      labelEl.style.display = 'inline-flex';
      loadingEl.style.display = 'none';
    }
  });

  function showError(msg) {
    errorMsg.textContent = msg;
    errorBox.style.display = 'flex';
    submitBtn.disabled = false;
    labelEl.style.display = 'inline-flex';
    loadingEl.style.display = 'none';
  }
}

// ===== FOOTER YEAR =====
function initFooterYear() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
  renderProjects('All');
  initFilters();
  initScrollSpy();
  initNavScroll();
  initMobileMenu();
  initReveal();
  initContactForm();
  initFooterYear();
});
