import React from 'react';

import './Page.scss';

const Page = ({ children, title }) => (
  <div className="page">
    <div className="container">
      {title && <h2 className="page__title">{title}</h2>}
      <div className="page__body">
        {children}
      </div>
    </div>
  </div>
);

export default Page;
