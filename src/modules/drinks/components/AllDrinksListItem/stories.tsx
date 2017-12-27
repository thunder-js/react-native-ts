import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllDrinksListItem from './'
import { View } from 'react-native'

storiesOf('AllDrinksListItem Component', module)
  .add('default', () => (
    <AllDrinksListItem
      id='1'
      onPress={() => {}}
    />
  ))
