const displayContent = document.getElementById("displayContent");
const h1 = document.createElement("h1");
const cells = document.querySelectorAll(".cell")
const GameBoard = (() => {

	let board = [];

	const getBoard = () => board
	const placeMarks = (index, symbols) => {

		if(board !== null)
		{
			if(board[index] == null)
		{
			board[index] = symbols
			console.log("Added ", board )
			return true
		}
		return(console.log("You Played Already ", board))
	}else if (board.length >= 9){
		console.log("Game Over")
	}

	}
	return {
		placeMarks,
		getBoard
	};
})()

console.log(GameBoard.getBoard())


cells.forEach((cell, index) => {
	cell.addEventListener('click', (e) => {
		GameBoard.placeMarks(index, "X")
	})
})



const Players = () => {

} 