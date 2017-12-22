import React from 'react'
import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native'

const Loading = () => (
  <ActivityIndicator style={styles.loading}/>
)

const styles = StyleSheet.create({
  loading: {

  } as ViewStyle,
})

export default Loading
