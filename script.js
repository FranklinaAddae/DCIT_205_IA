document.addEventListener('DOMContentLoaded', function () {
    var page2Header = document.querySelector('.page2-header');
    var page2 = document.querySelector('.page2');
  
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
      var page2Position = page2.offsetTop;
  
      if (scrollPosition >= page2Position) {
        page2Header.classList.add('visible');
      } else {
        page2Header.classList.remove('visible');
      }
    });
  });
  
  
  window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 1000) { 
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  

  function scrollToDiv(className) {
    var element = document.querySelector('.' + className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 400) { 
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});
document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



document.getElementById('application').addEventListener('click', function (e) {
e.preventDefault();
const scrollDistance = 400;

window.scroll({
    top: scrollDistance,
    behavior: 'smooth'
});
});

document.getElementById('requirement').addEventListener('click', function (e) {
e.preventDefault();
const scrollDistance = 1400;

window.scroll({
    top: scrollDistance,
    behavior: 'smooth'
});
});
