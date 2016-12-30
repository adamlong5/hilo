export const addToScore = (playerId, amount) => ({
  type: 'ADD_TO_SCORE',
  playerId,
  amount,
})

/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Allow passing in a fetch for testing
export const drawCard = (deckId, fetch = fetch) => ({
  type: 'DRAW_CARD',
  payload: fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json()),
})
/* eslint-enable */

export const resetGame = () => ({
  type: 'RESET',
})

export const swapPlayers = () => ({
  type: 'SWAP_PLAYERS',
})
