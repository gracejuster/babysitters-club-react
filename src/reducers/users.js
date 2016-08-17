var usersCounter = 0

const Users = (state = {users: []}, action) => {
  switch(action.type){
    case 'CREATE_USER':
    debugger
      return Object.assign({}, state, {
        users: [...state.users, {users: action.payload.data}]
      })
    default:
      return state
  }


}

export default Users
   
