import React from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush, faHeart, faShare,
} from '@fortawesome/free-solid-svg-icons';

import Page from '../components/Page';
import useGist from '../hooks/useGists';

import './Gist.scss';

const Step = ({ technique, description, paints }) => (
  <div className="gist-step">
    <div className="gist-step__header">
      <div className="gist-step__header-title">{technique.name}</div>
    </div>
    <div className="gist-step__body">
      <p>{description}</p>
      {
        paints.length > 0 && (
        <Table size="sm">
          {/* <thead>
            <tr>
              <th>Color</th>
              <th>Ratio</th>
            </tr>
          </thead> */}
          <tbody>
            { paints.map((paint) => (
              <tr>
                <td>{paint.paint.name}</td>
                {
                    paints.length > 1 && (
                    <td>
                      {paint.ratio}
                      {' '}
                      part
                    </td>

                    )
                }
              </tr>
            )) }
          </tbody>
        </Table>
        )
    }

    </div>
  </div>
);

const Gist = () => {
  const params = useParams();

  const { data, isLoading } = useGist(params.id);

  if (isLoading) return null;

  return (
    <Page>
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <div className="gist">
            <div className="gist__left-panel">
              <div className="gist__topic-image">
                <FontAwesomeIcon icon={faPaintBrush} size="3x" color="#3459e6" />
              </div>
              <div className="gist__title">
                {data.title}
              </div>
              <div className="gist__actions">
                <FontAwesomeIcon icon={faHeart} color="#FFF" size="lg" />
                <FontAwesomeIcon icon={faShare} color="#FFF" size="lg" />
              </div>
            </div>
            <div className="gist__right-panel">
              {data.steps.map((step) => <Step {...step} />)}
            </div>

          </div>

        </div>
      </div>

    </Page>
  );
};

export default Gist;
