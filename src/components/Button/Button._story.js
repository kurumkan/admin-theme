import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from 'components/Button';

const actions = {
  onClick: action('clicked')
};

storiesOf('Button', module)
  .add('Button type', () => (
    <div style={{ display: 'flex' }}>
      <div>
        <Button {...actions} type="primary">Primary</Button>
      </div>
      <div>
        <Button {...actions} type="warning">Warning</Button>
      </div>
      <div>
        <Button {...actions} type="success">Success</Button>
      </div>
      <div>
        <Button {...actions} type="info">Info</Button>
      </div>
      <div>
        <Button {...actions} type="danger">Danger</Button>
      </div>
      <div>
        <Button {...actions} type="ghost">Ghost</Button>
      </div>
    </div>
  ));
