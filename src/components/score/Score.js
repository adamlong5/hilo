import React from 'react'
import { connect } from 'react-redux'

export const Score = props => (
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

const mapStateToProps = ({ score }) => ({
  player1: score[0],
  player2: score[1],
})
const ScoreContainer = connect(
  mapStateToProps,
)(Score)

export default ScoreContainer
