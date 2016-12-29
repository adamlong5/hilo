import { ScoreComponent } from '../../src/components/Score'

describe('<Score />', function () {
  it('Creates a Presentation Component', function () {
    const wrapper = shallow(<ScoreComponent player1={3} player2={2} />)
    expect(wrapper.text()).to.contain('Player 1: 3')
    expect(wrapper.text()).to.contain('Player 2: 2')
  });
});
