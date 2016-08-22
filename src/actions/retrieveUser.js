import $ from 'jquery'

export default function retrieveUser(currentUser) {
  const URL = `http://localhost:3000/api/v1/sessions/show`
  const request = $.ajax({
     url:URL,
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"GET",
     data: {auth: {id: currentUser.currentUser.id}},
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'RETRIEVE_USER',
     payload: request
   }
}
