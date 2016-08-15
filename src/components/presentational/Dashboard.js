import React, { Component } from 'react';
import {Link} from 'react-router'
import Bookings from './Bookings'
import SearchBar from './SearchBar'

const Dashboard = ({params}) => {
  console.log(params)
  return(
    <div className='profile'>
      <h1>{params.username}</h1>
      <SearchBar/>
      <Bookings/>
      <Link to='/user/edit/:username'>Edit Profile Page</Link>
      {/* <NetWorkContainer/> */}
    </div>

  )}

export default Dashboard
