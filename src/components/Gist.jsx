import React, { useMemo } from 'react';

import Card from './Card';

import './Gist.scss';

const GistTitle = ({ title, model }) => (
  <div>
    <h1>{title}</h1>
    <h3>{model}</h3>
  </div>
);

const GistPaint = ({ name, hex, ratio }) => (
  <div className="gist-paint">
    <div className="gist-paint__example" style={{ backgroundColor: `#${hex}` }} />
    <div className="gist-paint__title">{ name }</div>
    <div className="gist-paint__ratio">{`${ratio} part`}</div>
  </div>
);

const GistStep = ({
  imageUrl, body, paints, ratios, order,
}) => {
  const ratiosMap = useMemo(() => {
    const cacheMap = {};
    ratios.forEach((ratio) => cacheMap[ratio.paintId] = ratio.ratio);
    return cacheMap;
  }, [ratios]);

  return (
    <div className="gist-step">
      <p>
        (
        {order}
        )
        {body}
      </p>
      <div className="gist-step__paints">
        { paints.map((paint) => (<GistPaint name={paint.name} hex={paint.hex} ratio={ratiosMap[paint.id]} />))}
      </div>
    </div>
  );
};

const Gist = ({ title, modelName, steps }) => (
  <Card>
    <GistTitle title={title} model={modelName} />
    {steps.map((step, index) => <GistStep order={index + 1} {...step} />)}
  </Card>
);

export default Gist;
