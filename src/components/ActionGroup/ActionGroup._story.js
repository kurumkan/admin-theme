import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionGroup from 'components/ActionGroup';

const actions = {
  onClick: action('clicked')
};

storiesOf('ActionGroup', module)
  .add('buttons without labels', () => (
    <ActionGroup
      items={[
        {
          icon: 'bars',
          onClick: actions.onClick
        },
        {
          icon: 'search',
          onClick: actions.onClick
        },
        {
          icon: 'envelope',
          onClick: actions.onClick
        },
        {
          icon: 'bell',
          onClick: actions.onClick
        },
        {
          icon: 'cog',
          onClick: actions.onClick
        }
      ]}
    />
  ))
  .add('buttons with labels', () => (
    <ActionGroup
      items={[
        {
          icon: 'pause',
          label: 'Pause',
          onClick: actions.onClick
        },
        {
          icon: 'list-ul',
          label: 'Logs',
          onClick: actions.onClick
        },
        {
          icon: 'search',
          label: 'Search',
          onClick: actions.onClick
        },
        {
          icon: 'cog',
          label: 'Setup',
          onClick: actions.onClick
        }
      ]}
    />
  ))
