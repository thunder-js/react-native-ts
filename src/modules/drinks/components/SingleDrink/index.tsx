import React from 'react'
import { ViewStyle, View, Text, StyleSheet, TextStyle } from 'react-native'

export interface ISingleDrinkProps {
  singleDrink: {
    name?: string;
    id: string;
    points: number;
  }
}

const SingleDrink: React.SFC<ISingleDrinkProps> = ({
  singleDrink: {
    name,
    id,
    points,
  },
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{id}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {

  } as ViewStyle,
  text: {

  } as TextStyle,
})

export default SingleDrink
