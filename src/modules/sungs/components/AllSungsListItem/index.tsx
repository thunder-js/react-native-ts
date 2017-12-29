import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

export interface IAllSungsListItemProps {
  id: string;
  text?: string;
  points?: number;
  onPress: () => void;
}

const AllSungsListItem: React.SFC<IAllSungsListItemProps> = ({
  id,
  text,
  points,
  onPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>id: {id}</Text>
      <Text style={styles.text}>text: {text}</Text>
      <Text style={styles.text}>points: {points}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container:	{

  } as ViewStyle,
  text: {

  } as TextStyle,
})

export default AllSungsListItem
