import React from 'react'
import Score from './score/Score'

const Hilo = () =>
  <div>
    <h1>Hilo</h1>
    <Score
      player1={3}
      player2={2}
    />
  </div>

export default Hilo
