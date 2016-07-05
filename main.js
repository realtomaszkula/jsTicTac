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


  columnGameOver : function() {
    let board = [].concat(...ticTac.board);
    for (var i = 0; i < 3; i++){
      if (board[i] && board[i+3] && board[i+6]) return true;
    }
    return false;
  },

  rowsGameOver : function() {
    let board = this.board;
    return board.some(function(row){
        return row.every(function (sign) {
          return sign == ticTac.currentSign;
      });
    });
  },

  diagonalGameOver : function() {
    let board = this.board;
    return ( board[0][0] == board[1][1] == board[2][2]) || (board[2][0] == board[1][1] == board[0][2]);

  },

  isGameOver : function() {
    return (this.columnGameOver() || this.rowsGameOver() || this.diagonalGameOver());
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

   $('.board-container').on('click', function(event) {
      console.log(event.target.id);
   });

  $('.board-container').on('click', 'p', function(event){
    $(this).text(ticTac.currentSign);
    let id = event.target.id;
    let x = id[0];
    let y = id[1];
    ticTac.board[x][y] = ticTac.currentSign;
  });
});
