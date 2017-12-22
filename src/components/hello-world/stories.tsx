import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { HelloWorld } from './index';

storiesOf('HelloWorld Component', module)
  .add('default', () => (
    <HelloWorld message='Teste' />
  ))
  .add('english', () => (
    <HelloWorld message='Hello' />
  ))
