const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

mobileNav.style.display = 'none';

hamburger.onclick = () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
  } else {
    mobileNav.style.display = 'none';
  }
}

mobileNav.onclick = () => {
  mobileNav.style.display = 'none';
}
