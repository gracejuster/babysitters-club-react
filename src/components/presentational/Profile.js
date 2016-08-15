import React, { Component } from 'react';
import {Link} from 'react-router'
import Bookings from './Bookings'
import SearchBar from './SearchBar'

const Profile = ({params}) => {
  console.log(params)
  return(
    <div className='profile'>
      <h1>{params.username}</h1>
      <SearchBar/>
      <Bookings/>
      {/* <NetWorkContainer/> */}
    </div>

  )}

export default Profile
