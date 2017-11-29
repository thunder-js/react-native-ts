/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { EnhancedComponent } from './components/new-component/index'
import { ApolloProvider } from 'react-apollo'
import createApolloClient from 'storm-system-components/src/apollo'

const PRODUCTION_URL = 'https://api.graph.cool/simple/v1/cj9izddz55mvr0124usquqjl6'

const apolloClient = createApolloClient({
  config: {
    apollo: {
      developmentUrl: PRODUCTION_URL,
      productionUrl: PRODUCTION_URL
    }
  }
})

export interface IAppProps {

}
export interface IAppState {

}

export class App extends Component<IAppProps, IAppState> {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello!!',
      age: 1
    }
  }
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <EnhancedComponent url='abc' />
        </View>
      </ApolloProvider>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue'
  } as ViewStyle
})