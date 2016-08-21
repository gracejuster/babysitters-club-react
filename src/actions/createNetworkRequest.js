import $ from 'jquery'

export default function createNetworkRequest(props, currentUser) {
  //basically, don't forget to get the currentUser's parentbabysitterid
  //so that we can set the relationships and make those dang reviews!
   const URL = 'http://localhost:3000/api/v1/requests/'
  const request = $.ajax({
     url:URL,
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"POST",
     data: JSON.stringify({request: {babysitter_id: props, parent_id: currentUser.account.parent.id}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })
   return {
     type: 'CREATE_REQUEST',
     payload: request
   }
}
