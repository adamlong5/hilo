import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Hilo from './Hilo'

const store = configureStore()

export default () =>
  <Provider store={store}>
    <Hilo />
  </Provider>
