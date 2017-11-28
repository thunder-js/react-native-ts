import React from 'react'
import { Text } from 'react-native'

export const HelloWorld = ({
  message
}) => (
  <Text style={{backgroundColor: 'steelblue', color: '#FFF', padding: 30, textAlign: 'center', margin: 10, fontSize: 20}}>
    !!{message}!!
  </Text>
)