import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'

export interface IAllEventsListItemProps {
  id: string;
  name: string;
  location: string;
}

const AllEventsListItem: React.SFC<IAllEventsListItemProps> = ({
  id
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{id}</Text>
  </View>
)

const styles = StyleSheet.create({
  container:	{

  } as ViewStyle,
  text: {

  } as TextStyle
})

export default AllEventsListItem