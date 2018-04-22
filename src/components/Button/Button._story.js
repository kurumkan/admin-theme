import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from 'components/Button';

const actions = {
  onClick: action('clicked')
};

storiesOf('Button', module)
  .add('type', () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '90vw' }}>
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
      <div style={{ backgroundColor: 'purple', padding: '10px' }}>
        <Button {...actions} type="ghost">Ghost</Button>
      </div>
    </div>
  ))
  .add('shapes', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '30px' }}>
        <Button {...actions} type="success" shape="rectangle">Rectangle</Button>
      </div>
      <div style={{ marginRight: '30px' }}>
        <Button {...actions} type="success" shape="semi-round">Semi-round</Button>
      </div>
      <div>
        <Button {...actions} type="success" shape="round">Round</Button>
      </div>
    </div>
  ));
