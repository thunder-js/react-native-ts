/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { helloWorld } from './test'

export interface Props {

}
export interface State {
  text: string,
  age: number,
}
export default class App extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello!!',
      age: 1
    }
  }
  render() {

    return (
      <View style = {styles.container} >
        <Text style= {styles.welcome} >
          Oh my god, TS!! {this.state.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
