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

var ticTac = {
  gameOver : false,
  currentSign : 'X',

  // player1 : "x",
  // player2 : { sign : 'y' },
  //   // board : [[1,2,3],[4,5,6],[7,8,9]],

  board : [['','',''],['','',''],['','','']],

  // changeSign : function (){
  //   this.currentSign = (currentSign == this.player1.sign) ? this.player2.sign : this.player1.sign;
  // },

  // drawBoard : function() {
  //   // flatten arr
  //   let board = [].concat(...this.board);

  //   //fill with current content
  //   board.forEach(function(content, index){
  //     $('#' + (index + 1)).text(content);
  //   });
  // },
  //

  isGameOver : function() {
    let board = this.board;
    return  board.some(function(row){
        return row.every(function (sign) {
          return sign == ticTac.currentSign;
      });
    });
  }
};


function updateBoard(){

}

function fadeInBoard(){
  $('.board-container').fadeIn('slow');
}

$(document).ready(function(){
  // playIntro();
  fadeInBoard();
  updateBoard();


  $('.board-container').on('click', 'p', function(event){
    $(this).text(ticTac.currentSign);
    let id = event.target.id;
    let x = id[0];
    let y = id[1];
    ticTac.board[x][y] = ticTac.currentSign;
  });
});
