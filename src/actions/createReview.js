import $ from 'jquery'


export default function createReview(props) {
   const URL = 'http://localhost:3000/api/v1/reviews'
  const request = $.ajax({
     url:URL,
     type:"POST",
     data: JSON.stringify({review: props}),
     contentType:"application/json; charset=utf-8",
     dataType:"json",
     context: this
   })

   return {
     type: 'CREATE_REVIEW',
     payload: request
   }
}
