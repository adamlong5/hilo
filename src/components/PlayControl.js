import React from 'react'
import { connect } from 'react-redux'
import { drawCard, resetGame, swapPlayers } from '../actions/actions'

export const PlayControlComponent = (props) => {
  if (!props.drawPileLength) {
    props.drawCard(props.deckId)
    return null // Hide the controls
  }
  return (
    <div>
      <strong>Current Player</strong>: { `Player ${props.playingId + 1 || 1}` }
      <button onClick={() => props.drawCard(props.deckId)}>Draw Card</button>
      <button onClick={props.swapPlayers} disabled={props.drawPileLength < 4}>Swap Players</button>
      <button onClick={props.resetGame}>Reset Game</button>
    </div>
  )
}

PlayControlComponent.propTypes = {
  deckId: React.PropTypes.string.isRequired,
  drawCard: React.PropTypes.func.isRequired,
  drawPileLength: React.PropTypes.number.isRequired,
  playingId: React.PropTypes.number.isRequired,
  resetGame: React.PropTypes.func.isRequired,
  swapPlayers: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ drawPile, playingId, deckId }) => ({
  deckId,
  playingId,
  drawPileLength: drawPile.length || 0,
})
const PlayControl = connect(
  mapStateToProps,
  { drawCard, resetGame, swapPlayers },
)(PlayControlComponent)
export default PlayControl
