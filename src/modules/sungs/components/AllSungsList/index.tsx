import * as React from 'react'
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'
import AllSungsListItem from '../AllSungsListItem'

export interface IEntity {
  id: string;
  text?: string;
  points?: number;
}
export interface IAllSungsListProps {
  allSungs: IEntity[];
  onPressItem: (item: IEntity) => void;
}

class AllSungsList extends React.Component<IFetchActions & IFetchState & IAllSungsListProps> {
  private keyExtractor = ({ id }) => id

  private renderItem = ({ item }) => {
    const { onPressItem } = this.props

    return (
      <AllSungsListItem
        onPress={() => onPressItem(item)}
        {...item}
      />
    )
  }
  public render() {
    const {
      fetchState,
      fetchActions,
      allSungs,
    } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={allSungs}
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

export default AllSungsList
