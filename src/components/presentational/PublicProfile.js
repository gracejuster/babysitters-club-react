import React, { Component } from 'react';
import ProfilePic from './ProfilePic'
import BasicInfo from './BasicInfo'
import Network from './Network'
import Stars from './Stars'
import Reviews from './Reviews'


const PublicProfile = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <ProfilePic image="image.."/>  
        <BasicInfo name="Sarah" numKids="3" location="Manhattan, NY" bio="for bs" skills="forbs" />
        <Stars /> 
        <Network />
        <Reviews />
        <RequestButton />

      </div>
      );
    }
  }

export default PublicProfile
