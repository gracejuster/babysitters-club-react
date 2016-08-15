import React, { Component } from 'react';

const NetworkThumbnail = ({params}) => {
  render(){
    return (
      <div>
        <Link to= {`/user/${params.username}`}> <img src={props.image}/> </Link>
      </div>
    )
  }
}
