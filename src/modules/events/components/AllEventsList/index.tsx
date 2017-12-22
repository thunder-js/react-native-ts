import * as React from 'react'
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'
import AllEventsListItem from '../AllEventsListItem'

export interface IAllEventsListProps {
  allEvents: Array<{
    id: string,
    name: string,
    location: string,
  }>
}

const keyExtractor = ({ id }) => id
const renderItem = ({item}) => <AllEventsListItem {...item} />

const AllEventsList: React.SFC<IFetchActions & IFetchState & IAllEventsListProps> = ({
  fetchState,
  fetchActions,
  allEvents
})	=> (
  <View style={styles.container}>
    <FlatList
      data={allEvents}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onRefresh={fetchActions.refetch}
      refreshing={fetchState.activelyRefetching}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  } as ViewStyle
})

export default AllEventsList