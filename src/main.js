// Get the current path after the /
const path = window.location.pathname
alert(path);
// Set the nav items with that href to active (a elements inside the nav element)
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === path) {
    a.classList.add('active');
  }
});
