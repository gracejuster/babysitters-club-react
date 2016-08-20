import $ from 'jquery'

export default function getPublicUser(userId, currentUser) {
   const URL = `http://localhost:3000/api/v1/users/${userId}`
debugger
  const request = $.ajax({
     url:URL,
     type:"GET",
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     data: ({user: {id: userId}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'GET_VIEWABLE_USER',
     payload: request
   }
}
