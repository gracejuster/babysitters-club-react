// var parentsCounter = 0

const Parents = (state = {parents: []}, action) => {
  switch(action.type){
    case 'EDIT_PARENT':

      return Object.assign({}, state, {
        parents: [...state.parents, {parents: action.payload.data}]
      })
    default:
      return state
  }

}

export default Parents
