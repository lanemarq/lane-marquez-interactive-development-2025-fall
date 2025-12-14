const rectangles = document.querySelectorAll('.rectangle');
const title = document.getElementById('title');

rectangles.forEach(rect => {
  rect.addEventListener('mouseenter', showTitle);
  rect.addEventListener('focus', showTitle);

  rect.addEventListener('mouseleave', hideTitle);
  rect.addEventListener('blur', hideTitle);

  rect.addEventListener('click', () => {
    const link = rect.getAttribute('data-link');
    if (link) window.location.href = link;
  });

  function showTitle() {
    title.textContent = rect.dataset.title;
    title.style.opacity = '1';
  }

  function hideTitle() {
    title.style.opacity = '0';
  }
});

