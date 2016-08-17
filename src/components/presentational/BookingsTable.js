import React, { Component } from 'react';
import {Link} from 'react-router'

const BookingsTable = ({title}) => {
  return(
    <div id="form" className="BookingsTable">
      <h6>{title}</h6>
      <table className="BookingsTable">
        <thead>
          <tr>
            <th>When:</th>
            <th>Who:</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Date/Time</td>
            <td>Babysitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BookingsTable
