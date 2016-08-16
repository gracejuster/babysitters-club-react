import $ from 'jquery'


export default function editBabysitter(props) {
   const URL = 'http://localhost:3000/api/v1/babysitters/21'
  // console.log('we are creating a user!')

  debugger
  const request = $.ajax({
     url:URL,
     type:"PATCH",
     data: JSON.stringify({user: props, user_id: 21}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'EDIT_BABYSITTER',
     payload: request
   }
}
