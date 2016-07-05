$(document).ready(function(){
  $('#dt-intro').show('bounce', { distance: 250 }, 2000, function(){
      $('#vs').show('bounce', 2000, function(){
        $('#hc-intro').show('bounce', { distance: 250 }, 2000);
      });
    });
  // $('#dt-intro').show(
  //   'slide', { direction: 'down' }, 2000, function(){
  //     $('#hc-intro').show(
  //   'slide', { direction: 'up' }, 2000);
  //   }
  // );


});
