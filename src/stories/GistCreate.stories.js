import React from 'react';

import GistForm from '../components/forms/GistForm';

export default {
  title: 'Components/GistCreate',
  component: GistForm,
};

const TECHNIQUES = [
  {
    id: 1,
    name: 'Wash',
  },
  {
    id: 2,
    name: 'Paint',
  },
  {
    id: 3,
    name: 'Highlight',
  },
  {
    id: 4,
    name: 'Edge highlight',
  },
];

const PAINTS = [
  { id: 1, label: 'Lead Belcher' },
  { id: 2, label: 'Volupus Pink' },
  { id: 3, label: 'Abaddon Black' },
];

const Template = (args) => <GistForm {...args} />;

export const Create = Template.bind({});
Create.args = {
  paints: PAINTS,
  techniques: TECHNIQUES,
};
