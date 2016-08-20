// var babysittersCounter = 0

const Parent = (state = {parents: []}, action) => {
  switch(action.type){
    case 'EDIT_PARENT':
      return Object.assign({}, state, {
        parents: [...state.parents, {parents: action.payload.data}]
      })
    default:
      return state
  }
}

export default Parent
