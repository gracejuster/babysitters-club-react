import $ from 'jquery'


export default function createUser(props) {
   const URL = 'http://localhost:3000/api/v1/users'
  // console.log('we are creating a user!')


  const request = $.ajax({
     url:URL,
     type:"POST",
     data: JSON.stringify({user: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json"
   })

   return {
     type: 'CREATE_USER',
     payload: request
   }
}
