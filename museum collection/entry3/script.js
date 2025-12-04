$(function () {

  $('.card').each(function () {
    var $card = $(this);
    var color = $card.find('.card-title').css('background-color');
    $card.find('.card-mask').css('background', color);
  });

  $('.card').on('click', function () {
    var $card = $(this);

    $card.toggleClass('open');

    if ($card.hasClass('open')) {
      var $content = $card.find('.card-content');

      $content.css('display', 'block');

      setTimeout(function () {
        $content.css('opacity', 1);
      }, 30);

    } else {
      var $content = $card.find('.card-content');
      $content.css('opacity', 0);

      setTimeout(function () {
        $content.css('display', 'none');
      }, 7000);
    }
  });

});


