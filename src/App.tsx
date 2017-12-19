/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { AuthScreen } from './components/auth-screen'
import { ApolloProvider } from 'react-apollo'
import createApolloClient from 'storm-system-components/src/apollo'
import { OnBoardingScreen } from './components/onboarding/index'
import List from './list/containers/List'

const SAVEBOB_STAGING = 'https://api.graph.cool/relay/v1/cj8xwxn5x0bxl016415wlh0v8'
const PRODUCTION_URL = SAVEBOB_STAGING

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
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <AuthScreen />
          {/* <OnBoardingScreen /> */}
          {/* <List myInput={'abc'} /> */}
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