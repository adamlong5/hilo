import { createStore } from 'redux'
import rootReducer from './reducers/root'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
  )
}
