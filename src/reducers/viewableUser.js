const INITIAL_STATE = {viewableUser: {}, account: {}, type: "" }

const ViewableUser = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case 'GET_VIEWABLE_USER':
      
      console.log(action.payload)
      return Object.assign({}, {
      	viewableUser: action.payload.viewable_user,
      	account: action.payload.account,
      	type: action.payload.type
      }
    )
    default:
      return state
  }
}

export default ViewableUser
