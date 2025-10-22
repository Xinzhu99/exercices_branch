import "./App.css"
import { Square } from "./components/Square"
import { useState } from "react"

//*immutability : 
//*keep previous versions of data intact and so able to be reused
//*facile de vérifier si les éléments enfants ont été modifiés ou pas 

 function Board() {
  const [xIsNext, setXIsNext] = useState(true)

  const [squares, setSquares] = useState(Array(9).fill(null))  //array(9).fill(): create an array with 9 elements of null
  
  const handleClick =(i)=>{
    if (squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquares = squares.slice()                        //créer une copie du tableau squares
    if (xIsNext){
      nextSquares[i] = "X"                                       //changer l'élément du tableau en X
    } else{
      nextSquares[i]= "O"
    }
    setSquares(nextSquares)                                    //changer le tableau square
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'winner :' + winner
  } else{
    status = 'next player : ' + (xIsNext ? 'X' : 'O')
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>  {/*arrow function assure que la function lance seulement après un click */}
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>

      </div>
      <div className="board-row">
        <Square value={squares[3]}onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]}onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]}onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]}onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]}onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  )
}

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="game-info">
        <ol>{/*TODO*/ }</ol>
      </div>

    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
