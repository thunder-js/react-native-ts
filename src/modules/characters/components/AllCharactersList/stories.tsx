import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllCharactersList from './'

const mockFetchActions = {
  refetch: () => null,
  fetchMore: () => null,
}
const mockFetchState = {
  activelyRefetching: false,
}

const allCharacters = [{
  id: '1',
}, {
  id: '2',
}]

storiesOf('AllCharactersList Component', module)
  .add('default', () => (
    <AllCharactersList
      allCharacters={allCharacters}
      onPressItem={() => {}}
      fetchActions={mockFetchActions}
      fetchState={mockFetchState}
    />
  ))
