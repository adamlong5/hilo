export const addToScore = (playerId, amount) => ({
  type: 'ADD_TO_SCORE',
  playerId,
  amount,
})

const fetchCard = (deckId, fetch = fetch) =>
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(json => json.cards[0].code)

/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Allow passing in a fetch for testing
export const drawCard = (deckId, fetch = fetch, guess = 0) => ({
  type: 'DRAW_CARD',
  payload: fetchCard(deckId, fetch),
  guess,
})


export const guessHigh = (deckId, fetch = fetch) =>
  drawCard(deckId, fetch, 1)

export const guessLow = (deckId, fetch = fetch) =>
  drawCard(deckId, fetch, -1)
/* eslint-enable */
export const resetGame = () => ({
  type: 'RESET',
})

export const swapPlayers = () => ({
  type: 'SWAP_PLAYERS',
})
