import $ from 'jquery'


export default function editParent(props, currentUser) {
  debugger
   const URL = `http://localhost:3000/api/v1/parents/${currentUser.account.id}`
  // console.log('we are creating a user!')
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
     type: 'EDIT_PARENT',
     payload: request
   }
}
