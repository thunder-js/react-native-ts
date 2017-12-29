import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

export interface IAllEventsListItemProps {
  id: string;
  name: string;
  location: string;
  onPress: () => void;
}

const AllEventsListItem: React.SFC<IAllEventsListItemProps> = ({
  id,
  name,
  location,
  onPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>id: {id}</Text>
      <Text style={styles.text}>name: {name}</Text>
      <Text style={styles.text}>location: {location}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container:	{
    backgroundColor: 'purple'
  } as ViewStyle,
  text: {
    color: '#FFF'
  } as TextStyle,
})

export default AllEventsListItem
