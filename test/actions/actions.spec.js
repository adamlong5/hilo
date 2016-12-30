import {
  addToScore,
  drawCard,
  resetGame,
  swapPlayers
} from '../../src/actions/actions'

describe('Action Creators', function () {
  it('addToScore', function () {
    expect(addToScore(0, 2)).to.deep.equal({
      type: 'ADD_TO_SCORE',
      playerId: 0,
      amount: 2
    })
    expect(addToScore(1, 1)).to.deep.equal({
      type: 'ADD_TO_SCORE',
      playerId: 1,
      amount: 1
    })
  });

  it('drawCard', function () {
    const stub = {
      then() {
        return 'foo'
      }
    }
    const fetch = sinon.stub().returns(stub)
    expect(drawCard('7', fetch)).to.deep.equal({
      type: 'DRAW_CARD',
      payload: 'foo'
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
