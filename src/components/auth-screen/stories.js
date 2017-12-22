import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EnhancedComponent } from './index';

storiesOf('NewComponent stories', module)
  .add('default', () => (
    <EnhancedComponent age={12} />
  ))
  .add('old', () => (
    <EnhancedComponent age={12} />
  ));
