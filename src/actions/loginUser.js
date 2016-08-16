import $ from 'jquery'

export default function loginUser(props) {
  const URL = 'http://localhost:3000/api/v1/login'

 const request = $.ajax({
    url:URL,
    type:"POST",
    data: JSON.stringify({auth: props}),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    context: this
  })

  return {
    type: 'LOG_IN',
    payload: request
  }
}
