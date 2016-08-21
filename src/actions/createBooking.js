import $ from 'jquery'



export default function createBooking(props, currentUser, viewableUser) {
   const URL = 'http://localhost:3000/api/v1/booking_requests/'

  const request = $.ajax({
     url:URL,
      headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"POST",
     data: JSON.stringify({bookings:
                          {parent_id: currentUser.account.parent.id,
                            babysitter_id: viewableUser.account.babysitter.id,
                            duration: props.duration,
                            desired_time: props.desired_time,
                            desired_date: props.desired_date
                          }}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'CREATE_BOOKING',
     payload: request
   }
}
