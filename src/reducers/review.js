
const Review = (state = {reviews: {}}, action) => {
  switch(action.type){
    case 'CREATE_REVIEW':
      return Object.assign({}, state, {
        reviews: action.payload.data.attributes,
        // currentUser: action.payload.current_user
      })
    default:
      return state
  }
}

export default Review
