import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllSungsList from './'

const mockFetchActions = {
  refetch: () => null,
  fetchMore: () => null,
}
const mockFetchState = {
  activelyRefetching: false,
}

const allSungs = [{
  id: '1',
}, {
  id: '2',
}]

storiesOf('AllSungsList Component', module)
  .add('default', () => (
    <AllSungsList
      allSungs={allSungs}
      onPressItem={() => {}}
      fetchActions={mockFetchActions}
      fetchState={mockFetchState}
    />
  ))
