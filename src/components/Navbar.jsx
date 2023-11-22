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
        <li>
          <Link to='/example3'>Example 3</Link>
        </li>
        <li>
          <Link to='/example4'>Example 4</Link>
        </li>
        <li>
          <Link to='/example5'>Example 5</Link>
        </li>
        <li>
          <Link to='/example6'>Example 6</Link>
        </li>
        <li>
          <Link to='/example7'>Example 7</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
