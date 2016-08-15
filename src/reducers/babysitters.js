var babysittersCounter = 0

const Babysitters = (state = [], action) => {
  switch(action.type) {
    case 'ADD_AUTHOR':
      var newState = [].concat(state)
      newState.push({id: ++authorCounter, name: action.name})
      return newState
    default:
      return state
  }
}

export default Babysitters
