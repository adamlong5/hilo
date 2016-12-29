import score from '../../src/reducers/score'

describe('Score Reducer', function () {
  it('adds to score', function () {
    const state = {
      0: 4,
      1: 2
    }

    const addTo0 = {
      type: 'ADD_TO_SCORE',
      playerId: 0
    }
    expect(score(state, addTo0)).to.deep.equal({
      0: 5,
      1: 2
    })

    const addTo1 = {
      type: 'ADD_TO_SCORE',
      playerId: 1
    }
    expect(score(state, addTo1)).to.deep.equal({
      0: 4,
      1: 3
    })
  });
});
