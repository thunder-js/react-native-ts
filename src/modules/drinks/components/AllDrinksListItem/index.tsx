import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'

export interface IAllDrinksListItemProps {
  id: string;
  onPress: () => void;
}

const AllDrinksListItem: React.SFC<IAllDrinksListItemProps> = ({
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

export default AllDrinksListItem
