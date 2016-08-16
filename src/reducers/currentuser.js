const INITIAL_STATE = {jwt: "", currentUser: {}}

const CurrentUser = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOG_IN':
    debugger
      return Object.assign({}, state, {jwt: action.payload.jwt, currentUser: action.payload.current_user})
    case 'LOG_OUT':
      return INITIAL_STATE
    default:
      return state
  }
}

export default CurrentUser
