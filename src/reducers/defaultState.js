export default function getDefaultState() {
  return {
    deckId: '',
    discardPile: [],
    drawPile: [],
    justSwapped: false,
    playingId: 0,
    scores: {
      0: 0,
      1: 0,
    },
    winner: false,
  }
}
