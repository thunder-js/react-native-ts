import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NewComponent } from './index';

storiesOf('NewComponent stories', module)
  .add('default', () => (
    <NewComponent age={12} />
  ))
  .add('old', () => (
    <NewComponent age={12} />
  ))