import * as React from 'react'
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'
import AllDrinksListItem from '../AllDrinksListItem'

export interface IEntity {
  id: string;
}
export interface IAllDrinksListProps {
  allDrinks: IEntity[];
  onPressItem: (item: IEntity) => void;
}

class AllDrinksList extends React.Component<IFetchActions & IFetchState & IAllDrinksListProps> {
  private keyExtractor = ({ id }) => id

  private renderItem = ({ item }) => {
    const { onPressItem } = this.props

    return (
      <AllDrinksListItem
        onPress={() => onPressItem(item)}
        {...item}
      />
    )
  }
  public render() {
    const {
      fetchState,
      fetchActions,
      allDrinks,
    } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={allDrinks}
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

export default AllDrinksList
