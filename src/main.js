import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import 'isomorphic-fetch'
import Root from './components/Root'

/* eslint-disable no-undef */
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(response => response.deck_id)
  .then(deckId => render(
    <Root deckId={deckId} />,
    document.getElementById('root'),
  ))
  .catch(err => console.log(err))
  /* eslint-enable */
