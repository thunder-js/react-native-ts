import * as React from 'react'
import { View, FlatList, Image, Text, StyleSheet, ViewStyle, ImageStyle, Button } from 'react-native'
import { IFetchState, IFetchActions } from 'common-data/artifacts/hocs'

const ListItem = ({
  name,
  imageUrl
}) => (
  <View style={styles.container}>
    <Image source={{uri: imageUrl || 'https://placehold.it/150x150'}} style={styles.image} resizeMode='contain' />
    <Text>{name}</Text>
  </View>
)

export interface Pet {
  id: string
  name: string
  imageUrl: string
}
export interface IListProps {
  pets: Array<Pet>
}
const List: React.SFC<IFetchActions & IFetchState & IListProps> = ({
  fetchState,
  fetchActions,
  pets
})  => (
  <View>
    <Text>{JSON.stringify(fetchState)}</Text>
    <Button
      onPress={() => fetchActions.refetch()}
      title='Refetch'
      color='red'
    />
    <FlatList
      data={pets}
      keyExtractor={({ id }) => id}
      renderItem={({item}) => <ListItem {...item} />}
      onRefresh={fetchActions.refetch}
      refreshing={fetchState.activelyRefetching}
    />
  </View>
)

const styles = StyleSheet.create({
  container:  {
    flexDirection:  'row',
    alignItems: 'center'
    // justifyContent: 'center'
  } as ViewStyle,
  image: {
    width:  50,
    height: 50,
    marginRight: 20
  } as ImageStyle
})

export default List