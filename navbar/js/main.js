// Sticky Header
// $(window).scroll(function() {
//     if ($(window).scrollTop() > 100) {
//         $('#header').addClass('sticky-header');
//         $('#header .mo-row').removeClass('sticky-border');
//     } else {
//         $('#header').removeClass('sticky-header');
//         $('#header .mo-row').addClass('sticky-border');
//     }
// });

// var sidebarBox = document.querySelector('#box');
// var sidebarBtn = document.querySelector('#btn');
// var pageWrapper = document.querySelector('#main-content');

// sidebarBtn.addEventListener('click', function(event) {

//   if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       sidebarBox.classList.remove('active');
//   } else {
//       this.classList.add('active');
//       sidebarBox.classList.add('active');
//   }
// });

// accordion js

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active2');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active2')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active2');

            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
});