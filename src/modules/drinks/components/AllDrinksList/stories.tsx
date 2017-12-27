import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllDrinksList from './'

const mockFetchActions = {
  refetch: () => null,
  fetchMore: () => null,
}
const mockFetchState = {
  activelyRefetching: false,
}

const allDrinks = [{
  id: '1',
}, {
  id: '2',
}]

storiesOf('AllDrinksList Component', module)
  .add('default', () => (
    <AllDrinksList
      allDrinks={allDrinks}
      onPressItem={() => {}}
      fetchActions={mockFetchActions}
      fetchState={mockFetchState}
    />
  ))
