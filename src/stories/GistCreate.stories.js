import React from 'react';
import { IntlProvider } from 'react-intl';

import GistForm from '../components/forms/GistForm';
import translations from '../translations/en-US.json';

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
  {
    id: 1,
    name: 'Gauss Blaster Green',
    hex: '84C2A9 ',
    company: 'citadel',
    createdAt: '2021-07-11T22:36:22.000Z',
    updatedAt: '2021-07-11T22:36:22.000Z',
  },
  {
    id: 2,
    name: 'Baharroth Blue',
    hex: '78C4C7 ',
    company: 'citadel',
    createdAt: '2021-07-11T22:36:22.000Z',
    updatedAt: '2021-07-11T22:36:22.000Z',
  },
  {
    id: 3,
    name: 'Dorn Yellow',
    hex: 'E3D28C ',
    company: 'citadel',
    createdAt: '2021-07-11T22:36:22.000Z',
    updatedAt: '2021-07-11T22:36:22.000Z',
  },
  {
    id: 4,
    name: 'Fulgrim Pink',
    hex: 'F4AFCC',
    company: 'citadel',
    createdAt: '2021-07-11T22:36:22.000Z',
    updatedAt: '2021-07-11T22:36:22.000Z',
  },
  {
    id: 5,
    name: 'Flayed One Flesh',
    hex: 'CBB48B ',
    company: 'citadel',
    createdAt: '2021-07-11T22:36:22.000Z',
    updatedAt: '2021-07-11T22:36:22.000Z',
  }];

const Template = (args) => (
  <IntlProvider messages={translations} defaultLocale="en">
    <GistForm {...args} />
  </IntlProvider>
);

export const Create = Template.bind({});
Create.args = {
  paints: PAINTS,
  techniques: TECHNIQUES,
  handleSubmit: (values) => console.log(values),
  steps: [{}],
};
