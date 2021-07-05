import React from 'react';

import './Hero.scss';

const Hero = () => (
  <div className="app-hero">
    <div className="app-hero__content">
      <h1 className="app-hero__title">Welcome to Paint Gist!</h1>
      <div className="row">
        <div className="col-sm-6 offset-md-4">
          <button className="btn btn-primary btn-lg">Login</button>
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </div>

    </div>
  </div>
);

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <Hero />
      </div>
    </div>
  </div>

);

export default Home;
