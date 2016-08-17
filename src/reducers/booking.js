// var bookingCounter = 0

const Bookings = (state = {bookings: []}, action) => {
  switch(action.type){
    case 'CREATE_BOOKING':
    debugger
      return Object.assign({}, state, {
        booking: [...state.bookings, {bookings: action.payload.data}]
      })
    default:
      return state
  }


}

export default Bookings
