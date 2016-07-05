
var ticTac = {

  board : [[1,2,3],[4,5,6],[7,8,9]],

  // player1 : "x",
  // player2 : { sign : 'y' },
  // // board : [['','',''],['','',''],['','','']],
  // currentSign : this.player2['sign'],

  // changeSign : function (){
  //   this.currentSign = (currentSign == this.player1.sign) ? this.player2.sign : this.player1.sign;
  // },

  updateBoard : function() {
    // flatten arr
    let board = [].concat(...this.board);

    //fill with current content
    board.forEach(function(content, index){
      $('#' + (index + 1)).text(content);
    });
  }
};


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
  // playIntro();
  drawBoard();
  ticTac.updateBoard();


  $('.board-container').on('click', 'p', function(){
    console.log('test');
  });
});
