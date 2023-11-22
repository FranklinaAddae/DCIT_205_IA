window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    const headerContent = document.getElementById('headerContent');
    const scrollPos = window.scrollY;
    
    if (scrollPos > 20) {
      header.style.height = '100px';
      headerContent.style.height = '50px';
    } else {
      header.style.height = '150px';
      headerContent.style.height = '60px';
    }
  });

  const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOverlay = document.getElementById('menuOverlay');
const hamburgerContainer = document.getElementById('hamburgerContainer');
const menuText = document.getElementById('menu-text');

function toggleMenu() {
hamburgerMenu.classList.toggle('active');
menuOverlay.style.height = menuOverlay.style.height === '100vh' ? '0' : '100vh';
menuText.textContent = menuText.textContent === 'Menu' ? 'Close' : 'Menu';
}

// Click event for hamburgerMenu
hamburgerMenu.addEventListener('click', function(event) {
event.stopPropagation();
toggleMenu();
});

hamburgerContainer.addEventListener('click', function() {
toggleMenu();
});

document.addEventListener('click', function(event) {
if (!menuOverlay.contains(event.target) && event.target !== hamburgerContainer) {
  hamburgerMenu.classList.remove('active');
  menuOverlay.style.height = '0';
  menuText.textContent = 'Menu';
}
});

  // Function to scroll to the top smoothly
  function scrollToTop() {
    const scrollStep = -window.scrollY / (800 / 15); 

    // Function to scroll the page smoothly
    function scrollStepFunction() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollStepFunction);
      }
    }

    requestAnimationFrame(scrollStepFunction);
  }

  const scrollToTopDiv = document.querySelector('.top-arrow-section');
  scrollToTopDiv.addEventListener('click', scrollToTop);
const scrollToTopButtonDuplicate = document.getElementById('scrollToTopButtonDuplicate');
scrollToTopButtonDuplicate.addEventListener('click', scrollToTop);

document.getElementById('contactLink').addEventListener('click', function (e) {
  e.preventDefault();
  const scrollDistance = 2900;

  window.scroll({
      top: scrollDistance,
      behavior: 'smooth'
  });
});


document.getElementById('shortCoursesLink').addEventListener('click', function (e) {
  e.preventDefault();
  const scrollDistance = 1170;

  window.scroll({
      top: scrollDistance,
      behavior: 'smooth'
  });
});