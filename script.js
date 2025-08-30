// Smooth Scroll for navigation links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Cursor hover effect
document.body.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});
