import React from 'react';
import { storiesOf } from '@storybook/react-native';
import AllEventsList from './'

const mockFetchActions = {
  refetch: () => null,
  fetchMore: () => null,
}
const mockFetchState = {
  activelyRefetching: false,
}

const allEvents = [
  {
    "id": "NjQ0MzcxNjM1Nw==",
    "name": "string",
    "location": "string"
  },
  {
    "id": "OTkxMDUzNDE0Mg==",
    "name": "string",
    "location": "string"
  },
  {
    "id": "NzA3NDU5OTQ3NQ==",
    "name": "string",
    "location": "string"
  }
]

storiesOf('AllEventsList Component', module)
  .add('default', () => (
    <AllEventsList
      allEvents={allEvents}
      onPressItem={() => {}}
      fetchActions={mockFetchActions}
      fetchState={mockFetchState}
    />
  ))
