$('.part').hover(
  function () {
    $('.description').html($(this).attr('data-description'));
    $('.description').fadeIn();
  },
  function () {
    $('.description').fadeOut(50);
  }
)