import { applyMiddleware, createStore, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers/root'

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultState = {
  deckId: '',
  playingId: 0,
  drawPile: [],
  discardPile: [],
  scores: {
    0: 0,
    1: 0,
  },
}
export default function configureStore(deckId) {
  const preloadedState = defaultState
  preloadedState.deckId = deckId
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(promiseMiddleware())),
  )
}
/* eslint-enable */
