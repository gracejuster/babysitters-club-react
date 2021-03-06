import $ from 'jquery'

export default function createUser(props) {
  const URL = 'http://localhost:3000/api/v1/users'
  
  const request = $.ajax({
     url:URL,
     type:"POST",
     data: JSON.stringify({user: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'CREATE_USER',
     payload: request
   }
}
