import React from 'react'
import { connect } from 'react-redux'

export const ScoreComponent = props => (
  <div>
    <div>
      <strong>Player 1</strong>: {props.player1 || 0}
    </div>
    <div>
      <strong>Player 2</strong>: {props.player2 || 0}
    </div>
  </div>
)

ScoreComponent.propTypes = {
  player1: React.PropTypes.number,
  player2: React.PropTypes.number,
}

const mapStateToProps = ({ scores }) => ({
  player1: scores[0],
  player2: scores[1],
})
const Score = connect(
  mapStateToProps,
)(ScoreComponent)

export default Score
