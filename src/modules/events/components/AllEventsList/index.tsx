import * as React from 'react'
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'
import AllEventsListItem from '../AllEventsListItem'

export interface IEvent {
  id: string;
  name: string;
  location: string;
}
export interface IAllEventsListProps {
  allEvents: IEvent[];
  onPressItem: (item: IEvent) => void;
}

class AllEventsList extends React.Component<IFetchActions & IFetchState & IAllEventsListProps> {
  private keyExtractor = ({ id }) => id

  private renderItem = ({ item }) => {
    const { onPressItem } = this.props

    return (
      <AllEventsListItem
        onPress={() => onPressItem(item)}
        {...item}
      />
    )
  }
  public render() {
    const {
      fetchState,
      fetchActions,
      allEvents,
    } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={allEvents}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          onRefresh={fetchActions.refetch}
          refreshing={fetchState.activelyRefetching}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default AllEventsList
