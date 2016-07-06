function playIntro(){
  // show
  let duration = 2000;
  let distance = 250;
  let showAnimation =  'bounce';

  // hide
  let hideDuration = 2000;

  $('body').append('<section id="intro-container">' +
      '<div class="img-helper"><img src="images/dt-intro.jpg" id="dt-intro"></div>' +
      '<div class="img-helper"><p id="vs">VS</p></div>' +
      '<div class="img-helper"><img src="images/hc-intro.png" id="hc-intro"></div>' +
      '</section>)');

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
function Player(name, sign) {
  this.name = name;
  this.sign = sign;
}

var donaldTrump = new Player('Donald Trump', '<img src="images/trump-sign.jpg">');
var hillaryClinton = new Player('Hillary Clinton', '<img src="images/hc-sign.jpg">');

var ticTac = {
  playerOne : donaldTrump,
  playerTwo : hillaryClinton,
  currentPlayer : donaldTrump,

  board : [['','',''],['','',''],['','','']],

  changeTurn : function (){
    this.currentPlayer = (this.currentPlayer == this.playerOne) ? this.playerTwo : this.playerOne;
  },

  isTheSameAsCurrentSign : function(sign) {
    return ticTac.currentPlayer.sign == sign;
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
  alert("Game over! " + ticTac.currentPlayer.name + ' wins.');
}

function updateBoard(event) {
  let id = event.target.id;
  let x = id[0];
  let y = id[1];
  ticTac.board[x][y] = ticTac.currentPlayer.sign;
}

function fadeInBoard(){
  $('.board-container').fadeIn('slow');
}

$(document).ready(function(){
  // playIntro();
  fadeInBoard();

  $('.board-container').on('click', '.grid', function(event){
    $(this).append(ticTac.currentPlayer.sign);
    updateBoard(event);
    if (ticTac.isGameOver()) gameOver();
    ticTac.changeTurn();
  });
});
