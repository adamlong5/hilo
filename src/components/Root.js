import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Hilo from './Hilo'

const Root = (props) => {
  const store = configureStore(props.deckId)
  return (
    <Provider store={store}>
      <Hilo />
    </Provider>
  )
}

Root.propTypes = {
  deckId: React.PropTypes.string.isRequired,
}

export default Root
