document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar a');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 150;

    links.forEach(link => {
      const section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop - 120; // Adjust the offset value
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

