import { PlayControlComponent } from '../../src/components/PlayControl'

describe('<PlayControl />', function () {
  const findButton = (wrapper, buttonText) => wrapper
    .find('button')
    .findWhere(n => n.text() === buttonText)
    .at(0)

  const getDefaultProps = () => ({
    cardsRemainingInDeck: 52,
    deckId: '',
    drawCard: sinon.spy(),
    drawPileLength: 0,
    guessHigh: sinon.spy(),
    guessLow: sinon.spy(),
    justSwapped: false,
    playingId: 0,
    resetGame: sinon.spy(),
    swapPlayers: sinon.spy(),
    winner: false,
  })

  const makeWrapper = (userProps) => {
    const updatedProps = Object.assign(getDefaultProps(), userProps)
    return shallow(
      <PlayControlComponent {...updatedProps}/>
    )
  }

  it('Creates a Presentation Component', function () {
    const drawCard = sinon.spy()
    const guessHigh = sinon.spy()
    const guessLow = sinon.spy()
    const resetGame = sinon.spy()
    const swapPlayers = sinon.spy()

    const wrapper = makeWrapper({
      cardsRemainingInDeck: 34,
      deckId: '7',
      drawPileLength: 4,
      drawCard,
      guessLow,
      guessHigh,
      playingId: 1,
      resetGame,
      swapPlayers,
    })
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
    const wrapper = makeWrapper({
      drawPileLength: 0,
      cardsRemainingInDeck: 7,
      drawCard,
      deckId: '7'
    })
    expect(drawCard).to.have.property('callCount', 1)
    expect(drawCard.calledWith('7')).to.be.true
  });

  it('Disables the guess buttons when there are no cards left', function () {
    const wrapper = makeWrapper({
      cardsRemainingInDeck: 0,
      playingId: 1,
      drawPileLength: 3
    })
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
    const wrapper = makeWrapper({
      cardsRemainingInDeck: 9,
      drawPileLength: 3
    })
    const swapButton = findButton(wrapper, 'Swap Players')
    expect(swapButton).to.have.attr('disabled')
  });

  it('Disables Swap Players button if just swapped', function () {
    const wrapper = makeWrapper({
      cardsRemainingInDeck: 5,
      drawPileLength: 5,
      justSwapped: true
    })
  });

  it('Displays a winner message', function () {
    const wrapper = makeWrapper({
      cardsRemainingInDeck: 9,
      drawPileLength: 3,
      winner: 1
    })
    expect(wrapper.text()).to.equal('Player 2 Wins!Reset Game')
  });
});
