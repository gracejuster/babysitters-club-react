const INITIAL_STATE = {jwt: "", currentUser: {}, account: {}, type: "", authentication: false}

const CurrentUser = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
      	jwt: action.payload.jwt,
      	currentUser: action.payload.current_user,
      	account: action.payload.account,
      	type: action.payload.type,
      	authentication: true
      })
    case 'RETRIEVE_USER':
      return Object.assign({}, state, {
        jwt: state.jwt,
        currentUser: action.payload.current_user,
        account: action.payload.account,
        type: state.type,
        authentication: true
      })
    case 'LOG_OUT':
      return INITIAL_STATE
    default:
      return state
  }
}

export default CurrentUser
