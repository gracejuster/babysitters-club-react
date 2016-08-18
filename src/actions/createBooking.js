import $ from 'jquery'


export default function createBooking(props, currentUser) {
  debugger
   const URL = `http://localhost:3000/api/v1/bookings/${currentUser.username}`

  const request = $.ajax({
     url:URL,
      headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"POST",
     data: JSON.stringify({bookings: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'CREATE_BOOKING',
     payload: request
   }
}
