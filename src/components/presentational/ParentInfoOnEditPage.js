import React from 'react'
import { Panel } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'

const ParentInfoOnEditPage = ({currentUser}) => {
  let parent
  if (currentUser.account.attributes) {
    parent = (
      <div>
        <p>KID COUNT: {currentUser.account.attributes['kid-count']}</p>
        <p>ADDRESS: {currentUser.account.attributes.address}</p>
        <p>SPECIFIC NEEDS: {currentUser.account.attributes['specific-needs']}</p>
        <p>EXTRA REQUESTS: {currentUser.account.attributes['extra_-equests']}</p>
      </div>
    )
  } else {
    parent = (
      <div>
        <p>KID COUNT: {currentUser.account.parent.kid_count}</p>
        <p>ADDRESS: {currentUser.account.parent.address}</p>
        <p>SPECIFIC NEEDS: {currentUser.account.parent.specific_needs}</p>
        <p>EXTRA REQUESTS: {currentUser.account.parent.extra_requests}</p>
      </div>
    )
  }

  return (
    <Panel className="ProfileCard card">
      <ProfilePicture src={currentUser.currentUser.profile_pic} alt="Parent"/>
      {parent}
    </Panel>
  )
}

export default ParentInfoOnEditPage
