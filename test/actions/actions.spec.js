import {
  addToScore,
  drawCard,
  resetGame,
  swapPlayers
} from '../../src/actions/actions'

describe('Action Creators', function () {
  it('addToScore', function () {
    expect(addToScore(0)).to.deep.equal({
      type: 'ADD_TO_SCORE',
      playerId: 0
    })
    expect(addToScore(1)).to.deep.equal({
      type: 'ADD_TO_SCORE',
      playerId: 1
    })
  });

  it('drawCard', function () {
    expect(drawCard('AS')).to.deep.equal({
      type: 'DRAW_CARD',
      card: 'AS'
    })
  });

  it('resetGame', function () {
    expect(resetGame()).to.deep.equal({
      type: 'RESET',
    })
  });

  it('swapPlayers', function () {
    expect(swapPlayers()).to.deep.equal({
      type: 'SWAP_PLAYERS',
    })
  });
});
