const Request = (state = {requests: {}}, action) => {
  switch(action.type){
    case 'CREATE_REQUEST':
      return Object.assign({}, state, {
        request: action.payload.data.attributes,
        // currentUser: action.payload.current_user
      })
    default:
      return state
  }
}

export default Request
