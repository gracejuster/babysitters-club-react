import $ from 'jquery'


export default function editUser(props) {
   const URL = 'http://localhost:3000/api/v1/users/edit/12'
  // console.log('we are creating a user!')

  debugger
  const request = $.ajax({
     url:URL,
     type:"POST",
     data: JSON.stringify({user: props, type: 'parent', user_id: 12}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'EDIT_USER',
     payload: request
   }
}
