import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';

import PainterSvg from '../svg/painter.svg';
import './Hero.scss';
import './Home.scss';

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
      <div className="col-sm-12 mt-5 pt-5 text-center">
        <h1 style={{ fontSize: '3.5em' }}>
          <FontAwesomeIcon icon={faPaintBrush} />
          {' '}
          Paint Gist
        </h1>
        <p className="text-muted mb-5">Coming Soon</p>
        {/* <Hero /> */}
      </div>
    </div>
  </div>

);

export default Home;
