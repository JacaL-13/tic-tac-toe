function Square(props) {
	function hdlClick() {
		if (!props.squareValue && props.winner === '') {
			if (props.player) {
				props.squares.splice(props.index, 1, 'X')
				props.setSquares(props.squares)
				props.setPlayer(!props.player)
			} else {
				props.squares.splice(props.index, 1, 'O')
				props.setSquares(props.squares)
				props.setPlayer(!props.player)
			}
		}
		props.chkWin(props.squares)
	}

	return <div onClick={hdlClick} className={`square ${props.winner === '' ? '' : 'gm-over'}`}>{
		props.squareValue === 'O' ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="Square, Oh"/> : props.squareValue
	}</div>
}

export default Square