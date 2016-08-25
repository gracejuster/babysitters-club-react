import $ from 'jquery'

export default function editParent(props, currentUser) {
  const URL = `http://localhost:3000/api/v1/users/${currentUser.currentUser.id}`
  const request = $.ajax({
     url:URL,
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"PATCH",
     data: JSON.stringify({user: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'EDIT_ACCOUNT',
     payload: request
   }
}
