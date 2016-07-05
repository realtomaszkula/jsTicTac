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
              fadeInBoard();
            });
          });
      });
  });

}

var ticTac = {
  gameOver : false,
  currentSign : 'X',
  player1 : { sign : '<' },
  player2 : { sign : 'O' },
  board : [['','',''],['','',''],['','','']],

  changeSign : function (){
    this.currentSign = (this.currentSign == this.player1.sign) ? this.player2.sign : this.player1.sign;
  },

  isTheSameAsCurrentSign : function(sign) {
    return ticTac.currentSign == sign;
  },

  columnGameOver : function() {
    let board = [].concat(...ticTac.board);
    for (var i = 0; i < 3; i++){
      if ([board[i], board[i+3], board[i+6]].every(ticTac.isTheSameAsCurrentSign)) return true;
    }
    return false;
  },

  rowsGameOver : function() {
    let board = this.board;
    return board.some(function(row){
        return row.every(ticTac.isTheSameAsCurrentSign);
    });
  },

  diagonalGameOver : function() {
    let board = this.board;
    let diagonalRight = Array.from([board[0][0], board[1][1], board[2][2]]);
    let diagonalLeft = Array.from([board[2][0], board[1][1], board[0][2]]);

    let right = diagonalRight.every(ticTac.isTheSameAsCurrentSign);
    let left = diagonalLeft.every(ticTac.isTheSameAsCurrentSign);
    return left || right;
  },

  isGameOver : function() {
    return (this.columnGameOver() || this.rowsGameOver() || this.diagonalGameOver());
  }
};


function gameOver() {
  alert("Game over!");
}

function updateBoard(event) {
  let id = event.target.id;
  let x = id[0];
  let y = id[1];
  ticTac.board[x][y] = ticTac.currentSign;
}

function fadeInBoard(){
  $('.board-container').fadeIn('slow');
}

$(document).ready(function(){
  // playIntro();
  fadeInBoard();

  $('.board-container').on('click', 'div', function(event){
    $(this).text(ticTac.currentSign);
    updateBoard(event);
    if (ticTac.isGameOver()) gameOver();
    ticTac.changeSign();

  });
});
