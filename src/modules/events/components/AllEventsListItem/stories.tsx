import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllEventsListItem from './'
import { View } from 'react-native'

const data = {
  id: 'NjQ0MzcxNjM1Nw==',
  name: 'string',
  location: 'string',
}

storiesOf('AllEventsListItem Component', module)
  .add('default', () => (
    <AllEventsListItem
      {...data}
      onPress={() => {}}
    />
  ))
