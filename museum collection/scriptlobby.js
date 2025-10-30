const rectangles = document.querySelectorAll('.rectangle');
const title = document.getElementById('title');

rectangles.forEach(rect => {
  rect.addEventListener('mouseenter', () => {
    title.textContent = rect.getAttribute('data-title');
    title.style.opacity = '1';
  });

  rect.addEventListener('mouseleave', () => {
    title.style.opacity = '0';
  });

  rect.addEventListener('click', () => {
    const link = rect.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});

