import React from 'react'
import { connect } from 'react-redux'
import { drawCard, resetGame, swapPlayers } from '../actions/actions'

export const PlayControlComponent = props => (
  <div>
    <strong>Current Player</strong>: { `Player ${props.playingId + 1 || 1}` }
    <button onClick={() => props.drawCard('AS')}>Draw Card</button>
    <button onClick={props.swapPlayers}>Swap Players</button>
    <button onClick={props.resetGame}>Reset Game</button>
  </div>
)

PlayControlComponent.propTypes = {
  playingId: React.PropTypes.number.isRequired,
  drawCard: React.PropTypes.func.isRequired,
  swapPlayers: React.PropTypes.func.isRequired,
  resetGame: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ playingId }) => ({
  playingId,
})
const PlayControl = connect(
  mapStateToProps,
  { drawCard, resetGame, swapPlayers },
)(PlayControlComponent)
export default PlayControl
