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
import AllEvents from './modules/events/containers/AllEvents'

const BROCHALLENGE_DEV = 'http://localhost:60000/relay/v1/cjbif011e000201887rzszrtr'
const BROCHALLENGE_STAGING = 'https://api.graph.cool/relay/v1/cjbi3txqv0reu0121coxa0nsa'
const PRODUCTION_URL = BROCHALLENGE_DEV

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
          {/* <AuthScreen /> */}
          {/* <OnBoardingScreen /> */}
          {/* <List myInput={'abc'} /> */}
          <AllEvents />
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