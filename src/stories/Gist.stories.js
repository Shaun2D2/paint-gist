import React from 'react';

import Gist from '../components/Gist';

export default {
  title: 'Components/Gist',
  component: Gist,
};

const Template = (args) => <Gist {...args} />;

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  title: 'Example Gist',
  modelName: 'Necron Warrior',
  steps: [
    {
      body: 'Undercoat the figure with Lead Blecher',
      ratios: [
        {
          id: 3333,
          paintId: 9999,
          ratio: 1,
        },
        {
          id: 4444,
          paintId: 777,
          ratio: 1,
        },
      ],
      paints: [
        {
          id: 9999,
          name: 'Lead Belcher',
          hex: '000',
        },
      ],
    },
    {
      body: 'Wash the necro with Contrast Medium and Basilicanum Grey',
      ratios: [
        {
          id: 3333,
          paintId: 6666,
          ratio: 1,
        },
        {
          id: 4444,
          paintId: 5555,
          ratio: 1,
        },
      ],
      paints: [
        {
          id: 6666,
          name: 'Contrat Medium',
          hex: 'CCC',
        },
        {
          id: 5555,
          name: 'Basilicanum Grey',
          hex: '000',
        },
      ],
    },
  ],
};
