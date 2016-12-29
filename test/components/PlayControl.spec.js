import { PlayControlComponent } from '../../src/components/PlayControl'

describe('<PlayControl />', function () {
  it('Creates a Presentation Component', function () {
    const drawCard = sinon.stub().returns('10S')
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        drawCard={drawCard}
        drawPileLength={3}
        playingId={1}
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
    const swapButton = wrapper
      .find('button')
      .findWhere(n => n.text() === 'Swap Players')
      .at(0)
    expect(swapButton).to.not.have.attr('disabled')

    testButton('Reset Game', resetGame)
  });

  it('Disables the swap button for small draw piles', function () {
    const drawCard = sinon.stub().returns('10S')
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        drawCard={drawCard}
        drawPileLength={2}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
      />
    )
    const swapButton = wrapper
      .find('button')
      .findWhere(n => n.text() === 'Swap Players')
      .at(0)
    expect(swapButton).to.have.attr('disabled')
  });
});
