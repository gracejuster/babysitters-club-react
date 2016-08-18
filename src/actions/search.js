import $ from 'jquery'

export default function search(props) {
  debugger
   const URL = `http://localhost:3000/api/v1/parents/`
  // console.log('we are creating a user!')
  const request = $.ajax({
     url:URL,
      // headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"GET",
     data: {parent: props},
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'SEARCH_PARENTS',
     payload: request
   }
}
