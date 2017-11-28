import React from 'react'
import { View, Text } from 'react-native'

export interface IHelloWorldProps {
  name: string
}
export class HelloWorld extends React.Component<IHelloWorldProps,{}> {
  render() {
    return (
      <View>
        <Text>
          Hello sad world
        </Text>
      </View>
    )
  }
}