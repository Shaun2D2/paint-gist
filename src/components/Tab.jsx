import React, { useState } from 'react';
import classnames from 'classnames';

import './Tab.scss';

export const Tabs = ({ defaultIndex, children }) => {
  const [selected, setSelected] = useState(defaultIndex);

  const panels = Array.isArray(children) ? children : [children];

  const handleClick = (index) => setSelected(index);

  return (
    <>
      <div className="tab-menu">
        { panels.map((((panel, index) => <div onClick={() => handleClick(index)} className={classnames('tab-menu__item', { 'tab-menu__item--selected': index === selected })}>{panel.props.name}</div>))) }
      </div>
      <div className="tab-content">
        { panels[selected] }
      </div>

    </>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
};

export const TabPanel = ({ children }) => (
  <div className="tab-paenl">
    {children}
  </div>

);
