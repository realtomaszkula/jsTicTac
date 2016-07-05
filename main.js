function playIntro(){
  // show
  let duration = 1000;
  let distance = 250;
  let showAnimation =  'bounce';

  // hide
  let hideAnimation = 'clip';
  let hideDuration = 2000;

  $('#dt-intro').show(showAnimation, { distance: distance }, duration, function(){
      $('#vs').show(showAnimation, duration, function(){
          $('#hc-intro').show(showAnimation, { distance: distance }, duration, function(){
            $('#intro-container').hide(hideAnimation, hideDuration, function(){
              $('#intro-container').remove();
            });
          });
      });
  });

  // $('#intro-container').remove();
}

$(document).ready(function(){
  playIntro();
});
