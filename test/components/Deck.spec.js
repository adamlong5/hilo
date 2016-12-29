import { DeckComponent } from '../../src/components/Deck'

describe('<Deck />', function () {
  it('Creates a Presentation Component', function () {
    const drawPile = ['AS', '10D']
    const discardPile = ['10H', '10C']
    const wrapper = shallow(
      <DeckComponent
        drawPile={drawPile}
        discardPile={discardPile}
      />
    )
    expect(wrapper.text()).to.contain('Left in deck: 48')
    expect(wrapper.text()).to.contain('Drawn cards: AS, 10D')
    expect(wrapper.text()).to.contain('Points on the line: 2')
  });
});
