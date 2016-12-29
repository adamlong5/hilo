
const addToScore = (state, action) => {
  const newState = Object.assign({}, state)
  const { playerId } = action
  newState[playerId] += 1
  return newState
}

const defaultState = {
  0: 0,
  1: 0,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_SCORE':
      return addToScore(state, action)
    default:
      return state
  }
}
