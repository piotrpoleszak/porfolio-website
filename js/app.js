// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home');
  const aboutMenu = document.querySelector('#about');
  const contactMenu = document.querySelector('#contact');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 991 && scrollPos < 600) 
  {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }

  else if (window.innerWidth > 991 && scrollPos < 1500) 
  {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } 

  else if (window.innerWidth > 991) 
  {
    contactMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 992) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// smooth scroll 
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });