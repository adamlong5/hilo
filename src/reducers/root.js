const drawCard = (state, action) => {
  const newState = Object.assign({}, state)
  const newCard = action.payload
  newState.drawPile = [...newState.drawPile, newCard]
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

const addToScore = (state, action) => {
  const newState = Object.assign({}, state)
  const { playerId, amount } = action
  newState.scores = Object.assign({}, newState.scores)
  newState.scores[playerId] += amount
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
    case 'DISCARD':
      return discard(state)
    case 'SWAP_PLAYERS':
      return swapPlayers(state)
    case 'RESET':
      return defaultState
    case 'ADD_TO_SCORE':
      return addToScore(state, action)
    default:
      return state
  }
}
