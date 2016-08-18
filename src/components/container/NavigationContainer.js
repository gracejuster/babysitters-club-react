import React, { Component } from 'react';
import Navigation from '../presentational/Navigation.js'
const NavigationContainer = (props) => 
<div>
  <Navigation />
  {props.children}
</div>