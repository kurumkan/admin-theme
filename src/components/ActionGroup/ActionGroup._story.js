import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionGroup from 'components/ActionGroup';
import PropTypes, {bool, func, string} from "prop-types";

const actions = {
  onClick: action('clicked')
};

storiesOf('ActionGroup', module)
  .add('buttons without labels', () => (
    <ActionGroup
      items={[
        {
          icon: 'target',
          onClick: actions.onClick
        }
      ]}
    />
  ))
  // .add('buttons with label', () => (
  //   <ActionGroup>
  //     xyz
  //   </ActionGroup>
  // ));
