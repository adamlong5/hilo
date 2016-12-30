/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Allow passing in a fetch for testing
const globalFetch = window.fetch || {}
const fetchCard = (deckId, fetch = globalFetch, guess) =>
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(json => json.cards[0].code)
    .then(card => ({ card, guess }))

const shuffleDeck = (deckId, fetch = globalFetch) =>
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
    .then(response => response.json())
    .then(json => json.deck_id)

export const drawCard = (deckId, fetch = globalFetch, guess = 0) => ({
  type: 'DRAW_CARD',
  payload: fetchCard(deckId, fetch, guess),
})


export const guessHigh = (deckId, fetch = globalFetch) =>
  drawCard(deckId, fetch, 1)

export const guessLow = (deckId, fetch = globalFetch) =>
  drawCard(deckId, fetch, -1)

export const resetGame = (deckId, fetch = globalFetch) => ({
  type: 'RESET',
  payload: shuffleDeck(deckId, fetch),
})
/* eslint-enable */

export const swapPlayers = () => ({
  type: 'SWAP_PLAYERS',
})
