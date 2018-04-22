import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from 'components/Dropdown';

const actions = {
  onClick: action('clicked')
};

storiesOf('Dropdown', module)
  .add('type', () => (
    <Dropdown />
  ));
