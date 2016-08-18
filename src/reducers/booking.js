// var bookingCounter = 0

const Bookings = (state = {bookings: {}, currentUser: {}}, action) => {
  switch(action.type){
    case 'CREATE_BOOKING':
      return Object.assign({}, state, {
        bookings: action.payload.data,
        currentUser: action.payload.current_user
      }
    )
    default:
      return state
  }


}

export default Bookings
