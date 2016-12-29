import { Score } from '../../../src/components/score/Score'

describe('<Score />', function () {
  it('Creates a Presentation Component', function () {
    const wrapper = shallow(<Score player1={3} player2={2} />)
    expect(wrapper.text()).to.contain('Player 1: 3')
    expect(wrapper.text()).to.contain('Player 2: 2')
  });
});
