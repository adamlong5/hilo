import React from 'react'

const Score = props => (
  <div>
    <div>
      <strong>Player 1</strong>: {props.player1 || 0}
    </div>
    <div>
      <strong>Player 2</strong>: {props.player2 || 0}
    </div>
  </div>
)

Score.propTypes = {
  player1: React.PropTypes.number,
  player2: React.PropTypes.number,
}

export default Score
