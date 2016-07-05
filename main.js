function playIntro(){
  // show
  let duration = 1000;
  let distance = 250;
  let showAnimation =  'bounce';

  // hide
  let hideDuration = 2000;

  $('#dt-intro').show(showAnimation, { distance: distance }, duration, function(){
      $('#vs').show(showAnimation, duration, function(){
          $('#hc-intro').show(showAnimation, { distance: distance }, duration, function(){
            $('#intro-container').fadeOut(hideDuration, function(){
              $('#intro-container').remove();
            });
          });
      });
  });

}


function drawBoard(){
  $('.board-container').fadeIn('slow');
}

$(document).ready(function(){
  playIntro();
  drawBoard();

});
