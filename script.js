/* =========================================================
   Barber Concept Nantes — script.js
   Menu mobile + smooth scroll + compare slider
   ========================================================= */
(function () {
  'use strict';

  /* ----- 1. MENU MOBILE (burger ↔ overlay) ----- */
  function initMobileMenu() {
    const burger = document.querySelector('[data-burger]');
    const menu   = document.querySelector('[data-mobile-menu]');
    if (!burger || !menu) return;

    function setMenu(open) {
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('is-menu-open', open);
    }

    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
    });

    // Fermer en cliquant sur un lien
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    // Fermer avec Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        burger.focus();
      }
    });
  }

  /* ----- 2. SMOOTH SCROLL pour les ancres internes ----- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      link.addEventListener('click', (e) => {
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Donner le focus à la cible pour les lecteurs d'écran
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ----- 3. COMPARE SLIDER (Pointer Events + clavier) ----- */
  function initCompareSlider() {
    const compares = document.querySelectorAll('[data-compare]');
    if (!compares.length) return;

    compares.forEach((frame) => {
      const handle = frame.querySelector('[data-compare-handle]');
      if (!handle) return;

      let isDragging = false;
      let rafId = null;
      let pendingPct = 50;

      function setSplit(pct) {
        const clamped = Math.max(0, Math.min(100, pct));
        pendingPct = clamped;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = null;
          frame.style.setProperty('--split', pendingPct + '%');
          handle.setAttribute('aria-valuenow', String(Math.round(pendingPct)));
          if (pendingPct <= 1)        frame.setAttribute('data-split-edge', 'left');
          else if (pendingPct >= 99)  frame.setAttribute('data-split-edge', 'right');
          else                        frame.removeAttribute('data-split-edge');
        });
      }

      function pctFromClientX(clientX) {
        const rect = frame.getBoundingClientRect();
        if (rect.width === 0) return 50;
        return ((clientX - rect.left) / rect.width) * 100;
      }

      function onPointerDown(e) {
        if (e.pointerType !== 'touch') e.preventDefault();
        isDragging = true;
        frame.classList.add('is-dragging');
        try { frame.setPointerCapture(e.pointerId); } catch (_) {}
        setSplit(pctFromClientX(e.clientX));
      }
      function onPointerMove(e) {
        if (!isDragging) return;
        setSplit(pctFromClientX(e.clientX));
      }
      function onPointerUp(e) {
        if (!isDragging) return;
        isDragging = false;
        frame.classList.remove('is-dragging');
        try { frame.releasePointerCapture(e.pointerId); } catch (_) {}
      }

      frame.addEventListener('pointerdown', onPointerDown);
      frame.addEventListener('pointermove', onPointerMove);
      frame.addEventListener('pointerup', onPointerUp);
      frame.addEventListener('pointercancel', onPointerUp);

      handle.addEventListener('keydown', (e) => {
        const step = e.shiftKey ? 10 : 2;
        const current = parseFloat(frame.style.getPropertyValue('--split')) || 50;
        if      (e.key === 'ArrowLeft')  { setSplit(current - step); e.preventDefault(); }
        else if (e.key === 'ArrowRight') { setSplit(current + step); e.preventDefault(); }
        else if (e.key === 'Home')       { setSplit(0);              e.preventDefault(); }
        else if (e.key === 'End')        { setSplit(100);            e.preventDefault(); }
      });

      setSplit(50);
    });
  }

  /* ----- 4. INIT ----- */
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initCompareSlider();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
