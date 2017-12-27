import * as React from 'react'
import { View, FlatList, StyleSheet, ViewStyle } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'
import AllCharactersListItem from '../AllCharactersListItem'

export interface IEntity {
  id: string;
}
export interface IAllCharactersListProps {
  allCharacters: IEntity[];
  onPressItem: (item: IEntity) => void;
}

class AllCharactersList extends React.Component<IFetchActions & IFetchState & IAllCharactersListProps> {
  private keyExtractor = ({ id }) => id

  private renderItem = ({ item }) => {
    const { onPressItem } = this.props

    return (
      <AllCharactersListItem
        onPress={() => onPressItem(item)}
        {...item}
      />
    )
  }
  public render() {
    const {
      fetchState,
      fetchActions,
      allCharacters,
    } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={allCharacters}
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

export default AllCharactersList
