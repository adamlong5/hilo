const convertCardToNumber = (card) => {
  const valueMarker = card.match(/^(\d+|[A-Z])/)[0]
  switch (valueMarker) {
    case 'A':
      return 14
    case 'K':
      return 13
    case 'Q':
      return 12
    case 'J':
      return 11
    default:
      // Digits
      return parseInt(valueMarker, 10)
  }
}

const addToScore = (state, amount) => {
  const newState = Object.assign({}, state)
  const { playingId } = newState
  newState.scores = Object.assign({}, newState.scores)
  newState.scores[playingId] += amount
  return newState
}

const discard = (state) => {
  const newState = Object.assign({}, state)
  newState.discardPile = [...newState.discardPile, ...newState.drawPile]
  newState.drawPile = []
  return newState
}

const swapPlayers = (state) => {
  const newState = Object.assign({}, state)
  newState.playingId = newState.playingId === 0 ? 1 : 0
  return newState
}

const getDrawPileLength = state => state.drawPile.length

const drawCard = (state, action) => {
  let newState = Object.assign({}, state)
  const newCard = action.payload.card
  newState.drawPile = [...newState.drawPile, newCard]
  if (action.payload.guess !== 0) {
    // Check their guess
    const drawPileLength = getDrawPileLength(newState)
    const lastCard = newState.drawPile[drawPileLength - 2]
    const newCardVal = convertCardToNumber(newCard)
    const lastCardVal = convertCardToNumber(lastCard)

    const correctGuess = action.payload.guess === 1 ?
      newCardVal >= lastCardVal : newCardVal <= lastCardVal

    if (!correctGuess) {
      // Add score to current player
      newState = addToScore(newState, drawPileLength)
      // discard()
      newState = discard(newState)
    }
  }

  return newState
}

export const defaultState = {
  deckId: '',
  playingId: 0,
  drawPile: [],
  discardPile: [],
  scores: {
    0: 0,
    1: 0,
  },
}
export default function game(state = defaultState, action) {
  switch (action.type) {
    case 'DRAW_CARD_FULFILLED':
      return drawCard(state, action)
    case 'SWAP_PLAYERS':
      return swapPlayers(state)
    case 'RESET':
      return defaultState
    default:
      return state
  }
}
