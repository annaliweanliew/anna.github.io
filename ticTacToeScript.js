
// Tic tac toe game

const cells = document.getElementsByClassName('cell')
let player = true
let symbol
let count = 0
let winflag = 0
let count1=0
let count2=0


for(let i=0; i<cells.length; i++){
	cells[i].addEventListener("click", myFunction)

	function myFunction() {

		if (cells[i].innerHTML == "" && winflag != 1){
			fillCell()
			cells[i].innerHTML = symbol
			count = count + 1
			checkWin()
			switchPlayer()
		} 
		else if(cells[i].innerHTML != ""){
			window.alert("Choose an empty box")
		}
	};

}

// Fill random box
	
	// let x = Math.floor(Math.random*cells.length)
	// cells[x].innerHTML = symbol

// Setup for 2 players
function fillCell (){

	if (player == true){
		symbol = "X"
	}

	else{symbol = "O"
	}
}

// Switch player, exclamation mark changes a boolean from true to false and vice versa
function switchPlayer(){
	player = !player
}

// winning combinations

function checkWin (event){
	if(
		// horizontal win
		(document.getElementById('0').textContent == document.getElementById('1').textContent) && (document.getElementById('0').textContent == document.getElementById('2').textContent && document.getElementById("2").textContent != "") ||
		(document.getElementById('3').textContent == document.getElementById('4').textContent) && (document.getElementById('3').textContent == document.getElementById('5').textContent && document.getElementById("5").textContent != "") ||
		(document.getElementById('6').textContent == document.getElementById('7').textContent) && (document.getElementById('6').textContent == document.getElementById('8').textContent && document.getElementById("8").textContent != "") ||
	
		// vertical win
		(document.getElementById('0').textContent == document.getElementById('3').textContent) && (document.getElementById('0').textContent == document.getElementById('6').textContent && document.getElementById("6").textContent != "") ||
		(document.getElementById('1').textContent == document.getElementById('4').textContent) && (document.getElementById('1').textContent == document.getElementById('7').textContent && document.getElementById("7").textContent != "") ||
		(document.getElementById('2').textContent == document.getElementById('5').textContent) && (document.getElementById('2').textContent == document.getElementById('8').textContent && document.getElementById("8").textContent != "") ||

		// diagonal win
		(document.getElementById('0').textContent == document.getElementById('4').textContent) && (document.getElementById('0').textContent == document.getElementById('8').textContent && document.getElementById("8").textContent != "") ||
		(document.getElementById('2').textContent == document.getElementById('4').textContent) && (document.getElementById('2').textContent == document.getElementById('6').textContent && document.getElementById("6").textContent != "")
	){

		if(player == true) {
			// player 1 win alert with delay when a win combination is met
			setTimeout(function(){ window.alert("Player 1 won!") }, 220)
			// to count number of wins and show in scoreboard
			count1 = count1 + 1
			const player1Win = document.getElementById('player1-win')
			player1Win.innerHTML = count1
		}
		else if(player == false) {
			// player 2 win alert with delay when a win combination is met
			setTimeout(function(){ window.alert("Player 2 won!") }, 220)
			// to count number of wins and show in scoreboard			
			count2 = count2 + 1
			const player2Win = document.getElementById('player2-win')
			player2Win.innerHTML = count2
		}
		// prevents player from continuing game after a win
		winflag = 1
	}

	// draw alert with delay when all cells are filled
	else if(count == 9){
		setTimeout(function(){ window.alert("Boo... draw!") }, 220)
	}

	else{
	}

}

// Play again for new game

const playButton = document.getElementById('play-button')

playButton.addEventListener("click", playAgain)

function playAgain () {
	for(let i=0; i<cells.length; i++){
	cells[i].innerHTML = "";
	count = 0;
	winflag = 0;
	}

}

// Alternative code for play again button
// playButton.onclick = function(){
// 		for(let i=0; i<cells.length; i++){
// 		cells[i].innerHTML = "";
// 		count = 0;
// 		winflag = 0;
// 		}
// }

// Game reset, clears players' score

const resetButton = document.getElementById('reset-button')

resetButton.addEventListener("click", resetGame)

function resetGame () {
	for(let i=0; i<cells.length; i++){
	cells[i].innerHTML = "";
	document.getElementById('player1-win').innerHTML = 0;
	document.getElementById('player2-win').innerHTML = 0;
	count = 0;
	winflag = 0;
	count1 = 0;
	count2 = 0;
	player = true;
	}

}


