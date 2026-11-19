(() => {
  const carousel = document.querySelector('.profile-carousel');
  if (!carousel) return;

  const viewport = carousel.querySelector('.profile-slides');
  const slides = Array.from(carousel.querySelectorAll('.profile-figure'));
  const previous = carousel.querySelector('.profile-prev');
  const next = carousel.querySelector('.profile-next');
  const dots = Array.from(carousel.querySelectorAll('.profile-dot'));
  const status = carousel.querySelector('.profile-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let frame = null;
  let width = viewport.clientWidth;

  function update(index) {
    current = index;
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    slides.forEach((slide, position) => {
      slide.setAttribute('aria-hidden', String(position !== index));
    });
    dots.forEach((dot, position) => {
      dot.setAttribute('aria-pressed', String(position === index));
    });
    status.textContent = `Photo ${slides[index].getAttribute('aria-label')}`;
  }

  function goTo(index) {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    viewport.scrollTo({
      left: target * viewport.clientWidth,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  }

  previous.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.slide)));
  });

  viewport.addEventListener('keydown', (event) => {
    const targets = {
      ArrowLeft: current - 1,
      ArrowRight: current + 1,
      Home: 0,
      End: slides.length - 1
    };
    if (!(event.key in targets) || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    goTo(targets[event.key]);
  });

  // Native scrolling handles touch swipes; keep controls and captions in sync.
  viewport.addEventListener('scroll', () => {
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {
      frame = null;
      if (!viewport.clientWidth) return;
      const index = Math.max(0, Math.min(slides.length - 1,
        Math.round(viewport.scrollLeft / viewport.clientWidth)));
      if (index !== current) update(index);
    });
  }, { passive: true });

  if ('ResizeObserver' in window) {
    new ResizeObserver(() => {
      if (viewport.clientWidth && viewport.clientWidth !== width) {
        width = viewport.clientWidth;
        viewport.scrollTo({ left: current * width, behavior: 'instant' });
      }
    }).observe(viewport);
  }

  viewport.scrollLeft = 0;
  update(0);
  carousel.querySelector('.profile-controls').hidden = false;
})();
