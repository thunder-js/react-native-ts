import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SingleDrink from './'
import { View } from 'react-native'

const data = {
  name: 'Awesome Cotton Pants',
  id: 'OTc5NTkyMTY0OQ==',
  points: 69098,
}

storiesOf('SingleDrink Component', module)
  .add('default', () => (
    <SingleDrink
      singleDrink={data}
    />
  ))
