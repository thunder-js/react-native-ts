import React from 'react'
import { ViewStyle, View, Text, StyleSheet, TextStyle } from 'react-native'

export interface ISingleCharacterProps {
  singleCharacter: {
    id: string;
    name: string;
  }
}

const SingleCharacter: React.SFC<ISingleCharacterProps> = ({
  singleCharacter: {
    id,
    name,
  },
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{id} - {name}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {

  } as ViewStyle,
  text: {

  } as TextStyle,
})

export default SingleCharacter
