import React from 'react';
import Button from 'components/Button';
import './style.scss';

const Home = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

export default Home;
