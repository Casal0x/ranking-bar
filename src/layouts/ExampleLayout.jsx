import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ExampleLayout = () => {
  return (
    <div>
      <header>
        <div>Este es un header de ejemplo</div>
        <div>
          <ul>
            <li>
              <NavLink to="/exampleLayout">Home Example</NavLink>
            </li>
            <li>
              <NavLink to="/exampleLayout/about">About Example</NavLink>
            </li>
          </ul>
        </div>
      </header>

      <div className="routes-example">
        <Outlet />
      </div>

      <footer>footer de ejemplito</footer>
    </div>
  );
};

export default ExampleLayout;
