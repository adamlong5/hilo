import React from 'react'
import { connect } from 'react-redux'
import {
  drawCard,
  guessHigh,
  guessLow,
  resetGame,
  swapPlayers,
} from '../actions/actions'

export const PlayControlComponent = (props) => {
  if (!props.drawPileLength && props.cardsRemainingInDeck) {
    props.drawCard(props.deckId)
    return null // Hide the controls
  }

  return (
    <div>
      <strong>Current Player</strong>: { `Player ${props.playingId + 1 || 1}` }
      <button
        onClick={props.guessHigh}
        disabled={props.cardsRemainingInDeck <= 0}
      >Guess High</button>
      <button
        onClick={props.guessLow}
        disabled={props.cardsRemainingInDeck <= 0}
      >Guess Low</button>
      <button
        onClick={props.swapPlayers}
        disabled={props.drawPileLength < 4 || !props.cardsRemainingInDeck}
      >Swap Players</button>
      <button onClick={props.resetGame}>Reset Game</button>
    </div>
  )
}

PlayControlComponent.propTypes = {
  cardsRemainingInDeck: React.PropTypes.number.isRequired,
  deckId: React.PropTypes.string.isRequired,
  drawCard: React.PropTypes.func.isRequired,
  drawPileLength: React.PropTypes.number.isRequired,
  guessHigh: React.PropTypes.func.isRequired,
  guessLow: React.PropTypes.func.isRequired,
  playingId: React.PropTypes.number.isRequired,
  resetGame: React.PropTypes.func.isRequired,
  swapPlayers: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ deckId, discardPile, drawPile, playingId }) => ({
  deckId,
  playingId,
  drawPileLength: drawPile.length || 0,
  cardsRemainingInDeck: (52 - drawPile.length - discardPile.length) || 52,
})
const PlayControl = connect(
  mapStateToProps,
  { drawCard, guessHigh, guessLow, resetGame, swapPlayers },
)(PlayControlComponent)
export default PlayControl
