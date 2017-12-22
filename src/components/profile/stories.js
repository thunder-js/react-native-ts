import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Profile } from './index';

storiesOf('Profile Component', module)
  .add('placehold', () => (
    <Profile avatarUrl='https://api.adorable.io/avatars/285/abott@adorable.png' name='Rafael' />
  ));
