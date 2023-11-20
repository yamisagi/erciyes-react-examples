import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Example 1</Link>
        </li>
        <li>
          <Link to='/example2'>Example 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
