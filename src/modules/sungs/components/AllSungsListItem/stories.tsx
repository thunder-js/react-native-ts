import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllSungsListItem from './'
import { View } from 'react-native'

storiesOf('AllSungsListItem Component', module)
  .add('default', () => (
    <AllSungsListItem
      id='1'
      onPress={() => {}}
    />
  ))
