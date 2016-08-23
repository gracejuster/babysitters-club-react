import $ from 'jquery'

export default function createReview(props, currentUser, viewableUser) {
  //basically, don't forget to get the currentUser's parentbabysitterid
  //so that we can set the relationships and make those dang reviews!
   const URL = 'http://localhost:3000/api/v1/reviews/'
  const request = $.ajax({
     url:URL,
     headers: {'AUTHORIZATION': "Bearer" + currentUser.jwt},
     type:"POST",
     data: JSON.stringify({review: {parent_id: currentUser.account.parent.id,
                                    babysitter_id: viewableUser.account.babysitter.id,
                                    title: props.title,
                                    description: props.description,
                                    rating: props.rating}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })
   return {
     type: 'CREATE_REVIEW',
     payload: request
   }
}
