import { useState } from 'react'

import './App.css'

import Square from './Components/Square'

function App() {
	const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
	const [player, setPlayer] = useState(true)
	const [winner, setWinner] = useState('')

	function chkWin(squaresArr) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (
				squaresArr[a] &&
				squaresArr[a] === squaresArr[b] &&
				squaresArr[a] === squaresArr[c]
			) {
				setWinner(squaresArr[a])
			}
		}
		if (winner === '' && !squaresArr.includes('')) {
			setWinner('draw')
		}
	}

	function hdlClick() {
		setSquares(['', '', '', '', '', '', '', '', ''])
		setPlayer(true)
		setWinner('')
	}

	return (
		<div className="App">
			<span>
				{winner === ''
					? 'Who will win?'
					: winner === 'draw'
					? `It's a draw!`
					: winner + ' has won!'}
			</span>
			<div className="container">
				{squares.map((val, idx) => {
					return (
						<Square
							squares={squares}
							setSquares={setSquares}
							player={player}
							setPlayer={setPlayer}
							squareValue={val}
							chkWin={chkWin}
							winner={winner}
							index={idx}
						/>
					)
				})}
			</div>
			<button onClick={hdlClick}>Reset</button>
		</div>
	)
}

export default App

//012

//036
//148

//if i, i + 1, i + 2 match
//if i, i + 3, i + 6 match
//if i, i + 2, i + 4
//if i, i + 4, i + 8
