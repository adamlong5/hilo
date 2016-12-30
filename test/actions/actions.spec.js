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

  const testFetching = guess => {
    const stub = {
      then() {
        return {
          then() {
            return 'foo'
          }
        }
      }
    }
    const fetch = sinon.stub().returns(stub)
    expect(drawCard('7', fetch, guess)).to.deep.equal({
      type: 'DRAW_CARD',
      payload: 'foo',
      guess
    })
  }

  it('drawCard', function () {
    testFetching(0)
  });

  it('guessHigh', function () {
    testFetching(1)
  });

  it('guessLow', function () {
    testFetching(-1)
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
