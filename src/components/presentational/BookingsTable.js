import React, { Component } from 'react';
import {Link} from 'react-router'

const BookingsTable = ({title}) => {
  return(
    <div className="BookingsTable">
      <h1>{title}</h1>
      <table>
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
