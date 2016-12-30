import { applyMiddleware, createStore, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers/root'
import getDefaultState from './reducers/defaultState'

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(deckId) {
  const preloadedState = getDefaultState()
  preloadedState.deckId = deckId
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(promiseMiddleware())),
  )
}
/* eslint-enable */
