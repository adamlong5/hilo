import React from 'react'
import { connect } from 'react-redux'

export const DeckComponent = props => (
  <div>
    <strong>Left in deck</strong>: {(52 - props.drawPile.length - props.discardPile.length)}
    <br />
    <strong>Drawn cards</strong>: {props.drawPile.join(', ') || ''}
    <br />
    <strong>Points on the line</strong>: {props.drawPile.length || 0}
  </div>
)

DeckComponent.propTypes = {
  drawPile: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  discardPile: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

const mapStateToProps =
  ({ drawPile, discardPile }) => ({
    drawPile,
    discardPile,
  })

const Deck = connect(
  mapStateToProps,
)(DeckComponent)
export default Deck
