import $ from 'jquery'


export default function createUser(props) {
   const URL = 'http://localhost:3000/api/v1/users'
  // console.log('we are creating a user!')

  debugger
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


// export default function createUser(event) {
//
//   type: CREATE_USER,
//
//   action: axios.post('/users', {
//     username: event.username,
//     name: event.name,
//     email: event.email,
//     password_digest: event.password_digest
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
