import { PlayControlComponent } from '../../src/components/PlayControl'

describe('<PlayControl />', function () {
  const findButton = (wrapper, buttonText) => wrapper
    .find('button')
    .findWhere(n => n.text() === buttonText)
    .at(0)

  it('Creates a Presentation Component', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        cardsRemainingInDeck={34}
        deckId={'7'}
        drawCard={drawCard}
        drawPileLength={4}
        guessHigh={guessHigh}
        guessLow={guessLow}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
        winner={false}
      />
    )
    expect(wrapper.text()).to.contain('Current Player: Player 2')

    const testButton = (wrapper, text, spy) => {
      const button = findButton(wrapper, text)
      button.simulate('click')
      expect(spy).to.have.property('callCount', 1)
      expect(button).to.not.have.attr('disabled')
    }

    testButton(wrapper, 'Guess High', guessHigh)
    expect(guessHigh.calledWith('7')).to.be.true
    testButton(wrapper, 'Guess Low', guessLow)
    expect(guessLow.calledWith('7')).to.be.true
    testButton(wrapper, 'Swap Players', swapPlayers)
    testButton(wrapper, 'Reset Game', resetGame)
    expect(resetGame.calledWith('7')).to.be.true
  });

  it('Draws a card when no draw pile', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        cardsRemainingInDeck={34}
        deckId={'7'}
        drawCard={drawCard}
        drawPileLength={0}
        guessHigh={guessHigh}
        guessLow={guessLow}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
        winner={false}
      />
    )
    expect(drawCard).to.have.property('callCount', 1)
    expect(drawCard.calledWith('7')).to.be.true
  });

  it('Disables the guess buttons when there are no cards left', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        cardsRemainingInDeck={0}
        deckId={'7'}
        drawCard={drawCard}
        drawPileLength={3}
        guessHigh={guessHigh}
        guessLow={guessLow}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
        winner={false}
      />
    )
    expect(wrapper.text()).to.contain('Current Player: Player 2')

    const buttonShouldBeDisabled = (wrapper, buttonText) => {
      const thisButton = findButton(wrapper, buttonText)
      expect(thisButton).to.have.attr('disabled')
    }

    buttonShouldBeDisabled(wrapper, 'Guess High')
    buttonShouldBeDisabled(wrapper, 'Guess Low')
    buttonShouldBeDisabled(wrapper, 'Swap Players')
  });

  it('Disables the Swap Players button if the draw pile is too short', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        cardsRemainingInDeck={9}
        deckId={'7'}
        drawCard={drawCard}
        drawPileLength={3}
        guessHigh={guessHigh}
        guessLow={guessLow}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
        winner={false}
      />
    )

    const swapButton = findButton(wrapper, 'Swap Players')
    expect(swapButton).to.have.attr('disabled')
  });

  it('Displays a winner message', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = shallow(
      <PlayControlComponent
        cardsRemainingInDeck={9}
        deckId={'7'}
        drawCard={drawCard}
        drawPileLength={3}
        guessHigh={guessHigh}
        guessLow={guessLow}
        playingId={1}
        resetGame={resetGame}
        swapPlayers={swapPlayers}
        winner={1}
      />
    )
    expect(wrapper.text()).to.equal('Player 2 Wins!')
  });
});
