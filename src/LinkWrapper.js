import React from 'react';
import { NavLink } from 'react-router-dom'; // Is allowed to style the element.

const LinkWrapper = props => {
  return (
    <NavLink activeStyle={{fontWeight: 'bold'}} {...props}/>
  );
}

export default LinkWrapper;
