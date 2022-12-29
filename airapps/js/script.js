const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("show");
});

menu.addEventListener("click", function(event) {
  if (event.target.classList.contains("close-btn")) {
    menu.classList.remove("show");
  }
});

//

jQuery(window).on('scroll', function() {
  if(jQuery(window).scrollTop() > 50) {
      jQuery('#header').css('background-color', '#000');
  } else {
     jQuery('#header').css('background-color', '#00000069');
  }
});

