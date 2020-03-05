import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {
  return (
    <nav>
    <div className="nav-wrapper indigo darken-2">
      <LinkWrapper to="/" className="brand-logo activeStyle={{}}">Exercise One</LinkWrapper>
      <ul className="right">
        <li><LinkWrapper to="/author">Author</LinkWrapper></li>
        <li><LinkWrapper to="/books">Books</LinkWrapper></li>
        <li><LinkWrapper to="/about">About</LinkWrapper></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;
