export const addToScore = (playerId, amount) => ({
  type: 'ADD_TO_SCORE',
  playerId,
  amount,
})

/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Allow passing in a fetch for testing
const globalFetch = window.fetch || {}
const fetchCard = (deckId, fetch = globalFetch) =>
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(json => json.cards[0].code)

export const drawCard = (deckId, fetch = globalFetch, guess = 0) => ({
  type: 'DRAW_CARD',
  payload: fetchCard(deckId, fetch),
  guess,
})


export const guessHigh = (deckId, fetch = globalFetch) =>
  drawCard(deckId, fetch, 1)

export const guessLow = (deckId, fetch = globalFetch) =>
  drawCard(deckId, fetch, -1)
/* eslint-enable */
export const resetGame = () => ({
  type: 'RESET',
})

export const swapPlayers = () => ({
  type: 'SWAP_PLAYERS',
})
