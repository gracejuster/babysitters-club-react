// var babysittersCounter = 0

const Babysitters = (state = {babysitters: []}, action) => {
  switch(action.type){
    case 'EDIT_BABYSITTER':
      return Object.assign({}, state, {
        babysitters: [...state.babysitters, {babysitters: action.payload.data}]
      })
    default:
      return state
  }

}

export default Babysitters
