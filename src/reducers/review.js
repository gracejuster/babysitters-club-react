
const Reviews = (state = {reviews: []}, action) => {
  switch(action.type){
    case 'CREATE_REVIEW':
    debugger
      return Object.assign({}, state, {
        reviews: [...state.users, {reviews: action.payload.data}]
      })
    default:
      return state
  }
}

export default Reviews
