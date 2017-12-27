import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllCharactersListItem from './'
import { View } from 'react-native'

storiesOf('AllCharactersListItem Component', module)
  .add('default', () => (
    <AllCharactersListItem
      id='1'
      onPress={() => {}}
    />
  ))
