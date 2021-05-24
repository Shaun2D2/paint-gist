import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

import Card from './Card';

import './GistCard.scss';

const GistCard = ({ title, model, stepCount }) => (
  <Card>
    <div className="gist-card">
      <div className="gist-card__summary">
        <div className="gist-card__summary-icon">
          <FontAwesomeIcon icon={faScroll} className="gist-card__icon-svg" />
        </div>
        <div className="gist-card__summary-body">
          <div className="gist-card__summary-body-title">{title}</div>
          <div className="gist-card__summary-body-model">{model}</div>
        </div>
      </div>
      <div className="gist-card__snapshot">
        <div className="gist-card__snapshot-panel">
          <div className="gist-card__snapshot-panel-title">Steps</div>
          <div className="gist-card__snapshot-panel-value">{stepCount}</div>
        </div>
        <div className="gist-card__snapshot-panel">
          <div className="gist-card__snapshot-panel-title">Upvotes</div>
          <div className="gist-card__snapshot-panel-value">20</div>
        </div>
      </div>
    </div>
  </Card>
);

export default GistCard;
