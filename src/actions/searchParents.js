import $ from 'jquery'

export default function searchParents(props, currentUser) {
  const URL = `http://localhost:3000/api/v1/parents/`
  const request = $.ajax({
    url:URL,
    headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
    type:"GET",
    data: {parents: props},
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    context: this
   })

   return {
     type: 'SEARCH_PARENTS',
     payload: request
   }
}
