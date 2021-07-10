import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from 'react-router-dom';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import Card from './Card';

import './GistCard.scss';

const { Item, Toggle, Menu } = Dropdown;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="gist-card-custom-toggle"
  >
    <FontAwesomeIcon icon={faEllipsisV} />
    {children}
  </a>
));

const GistCard = ({
  title, model, stepCount, colors, id,
}) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    history.push(`/gist/${id}`);
  };

  return (
    <Card>
      <div className="gist-card">
        <div className="gist-card__header">
          <p className="gist-card__title"><a href="#" onClick={handleClick}>{title}</a></p>
          <Dropdown className="gist-card__options">
            <Toggle as={CustomToggle} />
            <Menu>
              <Item>Edit</Item>
              <Item>Share</Item>
            </Menu>
          </Dropdown>
        </div>
        <div className="gist-card__color-list">
          {colors.map(({ name, hex }) => (
            <OverlayTrigger
              key={hex}
              placement="bottom"
              overlay={(
                <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>
        )}
            >
              <div className="gist-card__color" style={{ backgroundColor: `#${hex}` }} />
            </OverlayTrigger>
          ))}
        </div>
        <ul className="gist-card__action-list">
          <li className="gist-card__action gist-card__action--clickable"><FontAwesomeIcon icon={faHeart} className="gist-card__icon-svg" /></li>
          <li className="gist-card__action"><Badge pill bg="dark">Easy</Badge></li>
        </ul>
      </div>
    </Card>
  );
};

export default GistCard;
