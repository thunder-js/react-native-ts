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
  onPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{id}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container:	{

  } as ViewStyle,
  text: {

  } as TextStyle,
})

export default AllEventsListItem
