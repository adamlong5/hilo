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
            return {
              then() {
                return {
                  card: 'foo',
                  guess
                }
              }
            }
          }
        }
      }
    }
    const fetch = sinon.stub().returns(stub)
    const deckId = '7'
    expect(drawCard(deckId, fetch, guess)).to.deep.equal({
      type: 'DRAW_CARD',
      payload: { card: 'foo', guess }
    })
    expect(
      fetch.calledWith(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      )
    ).to.be.true
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
    const deckId = '7'
    expect(resetGame(deckId, fetch)).to.deep.equal({
      type: 'RESET',
      payload: 'foo'
    })
    expect(
      fetch.calledWith(
        `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
      )
    ).to.be.true
  });

  it('swapPlayers', function () {
    expect(swapPlayers()).to.deep.equal({
      type: 'SWAP_PLAYERS',
    })
  });
});
