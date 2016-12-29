export const addToScore = (playerId, amount) => ({
  type: 'ADD_TO_SCORE',
  playerId,
  amount
})

export const drawCard = card => ({
  type: 'DRAW_CARD',
  card,
})

export const resetGame = () => ({
  type: 'RESET',
})

export const swapPlayers = () => ({
  type: 'SWAP_PLAYERS',
})
