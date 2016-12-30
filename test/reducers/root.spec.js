import game, { defaultState } from '../../src/reducers/root'

describe('Reducer', function () {
  it('adds to score', function () {
    const state = {
      scores: {
        0: 4,
        1: 2
      }
    }

    const addTo0 = {
      type: 'ADD_TO_SCORE',
      playerId: 0,
      amount: 1
    }
    expect(game(state, addTo0).scores).to.deep.equal({
      0: 5,
      1: 2
    })

    const addTo1 = {
      type: 'ADD_TO_SCORE',
      playerId: 1,
      amount: 3
    }
    expect(game(state, addTo1).scores).to.deep.equal({
      0: 4,
      1: 5
    })
  });

  it('Draws a card', function () {
    const state = {
      drawPile: ['AS', 'KS']
    }
    const action = {
      type: 'DRAW_CARD_FULFILLED',
      payload: {
        cards: [{ code: '10S' }]
      }
    }
    expect(game(state, action)).to.deep.equal({
      drawPile: ['AS', 'KS', '10S']
    })
  });

  it('Discards the draw pile', function () {
    const state = {
      drawPile: ['AS', 'KS'],
      discardPile: ['10D']
    }
    const action = {
      type: 'DISCARD'
    }
    expect(game(state, action)).to.deep.equal({
      drawPile: [],
      discardPile: ['10D', 'AS', 'KS']
    })
  });

  it('Swaps players', function () {
    const state = {
      playingId: 0
    }
    const action = {
      type: 'SWAP_PLAYERS'
    }
    const result1 = game(state, action)
    const result2 = game(result1, action)
    expect(result1.playingId).to.equal(1)
    expect(result2).to.deep.equal(state)
  });

  it('Resets the game', function () {
    const state = {
      deckId: 'lksjssjl',
      playingId: 1,
      drawPile: ['AS'],
      discardPile: ['KD'],
      scores: {
        0: 3,
        1: 7,
      },
    }
    const action = {
      type: 'RESET'
    }
    expect(game(state, action)).to.deep.equal(defaultState)
  });

  it('Deals with unexpected events', function () {
    const state = 'foo'
    const action = {
      type: 'Blarg'
    }
    expect(game(state, action)).to.equal(state)
  });
});
