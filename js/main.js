$(document).ready(function() {
  /* Responsive Menu */
  $('.menu-icon').on('click', function() {
    $('.navbar ul').toggleClass('show');
  });

  var scrollLink = $('.navbar a');

  /* Smooth Scrolling */
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  /* Active Link */
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 30;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass('active');
        $(this)
          .parent()
          .siblings()
          .removeClass('active');
      }
    });
  });
});
