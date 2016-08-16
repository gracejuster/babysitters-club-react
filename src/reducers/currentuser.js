const CurrentUser = (state = {}, action) => {
  switch(action.type){
    case 'LOG_IN':
      return {action.payload.data}
    case 'LOG_OUT':
      return {}
    default:
      return state
  }
}

export default CurrentUser
