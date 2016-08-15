import React, { Component } from 'react';
import {Link} from 'react-router'
import Bookings from './Bookings'

const Profile = ({params}) => {
  console.log(params)
  return(
    <div className='profile'>
      {/* <SearchBarContainer/> */}
      <Bookings/>
      {/* <NetWorkContainer/> */}
    </div>

  )}

export default Profile
