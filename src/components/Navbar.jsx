import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faPalette, faCog, faLock, faLockOpen, faPaintBrush, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const BODY_TAG = document.getElementsByTagName('body')[0];

const NavItem = ({ icon, path, title }) => {
  return (
    <NavLink to={path} className="nav-bar__item">
      <FontAwesomeIcon icon={icon} className="nav-bar__item-icon" />
      <div className="nav-bar__item-title">{title}</div>
    </NavLink>
  );

  // const FancyLink = () => (
  //   <div className="nav-bar__item" />
  // );

  // return <Link to={path} component={FancyLink} />;
};

const PrimaryNav = () => {
  const [locked, setLocked] = useState(false);

  const toggleLock = () => {
    setLocked(!locked);

    if (!locked) {
      BODY_TAG.classList.add('nav-bar-affixed');
    } else {
      BODY_TAG.classList.remove('nav-bar-affixed');
    }
  };

  return (
    <div className={classNames('nav-bar', { 'nav-bar__affixed': locked })}>
      <div className="nav-bar__brand">
        <div className="nav-bar__brand-icon-wrapper">
          <FontAwesomeIcon icon={faPaintBrush} className="nav-bar__brand-icon" />
        </div>
        <div className="nav-bar__brand-title">Gist Paint</div>
      </div>
      <div className="nav-bar__items">
        <NavItem path="/dashboard" icon={faHome} title="Dashboard" />
        <NavItem path="/create" icon={faPalette} title="Create Gists" />
        <NavItem path="/search" icon={faSearch} title="Search Gists" />
      </div>

      <div className="nav-bar__items-bottom">
        <div className="nav-bar__items">
          <div className="nav-bar__item">
            <FontAwesomeIcon icon={faCog} className="nav-bar__item-icon" />
            <div className="nav-bar__item-title">Settings</div>
          </div>
        </div>
      </div>
      <div className="nav-bar__lock" onClick={toggleLock} role="button">
        <FontAwesomeIcon icon={locked ? faLockOpen : faLock} className="nav-bar__item-icon" />
      </div>
    </div>
  );
};

export default PrimaryNav;
