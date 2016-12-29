import { addToScore } from '../../src/actions/actions'

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
});
