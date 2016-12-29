import { PlayControlComponent } from '../../src/components/PlayControl'

describe('<PlayControl />', function () {
  it('Creates a Presentation Component', function () {
    const drawCard = sinon.stub().returns('10S')
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        playingId={1}
        drawCard={drawCard}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
      />
    )
    expect(wrapper.text()).to.contain('Current Player: Player 2')
    const testButton = (text, spy) => {
      wrapper
        .find('button')
        .findWhere(n => n.text() === text)
        .at(0)
        .simulate('click')
      expect(spy).to.have.property('callCount', 1)
    }

    testButton('Draw Card', drawCard)
    expect(drawCard.calledWith('AS')).to.be.true

    testButton('Swap Players', swapPlayers)
    testButton('Reset Game', resetGame)
  });
});
