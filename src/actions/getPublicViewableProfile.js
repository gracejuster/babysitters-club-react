import $ from 'jquery'

export default function getPublicUser(e, userId, currentUser) {
  debugger
   const URL = `http://localhost:3000/api/v1/users/${props.id}`
  // console.log('we are creating a user!')
  const request = $.ajax({
     url:URL,
     type:"GET",
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     data: JSON.stringify({user: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'GET_VIEWABLE_USER',
     payload: request
   }
}
