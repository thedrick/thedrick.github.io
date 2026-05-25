// Scroll animations
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = '<button class="lb-close" aria-label="Close">&#x2715;</button><img class="lb-img" />';
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('.lb-img');

document.querySelectorAll('.photo-item').forEach(item => {
  item.addEventListener('click', () => {
    lbImg.src = item.querySelector('img').src;
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== lbImg) lightbox.classList.remove('open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});
