/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { View, StyleSheet, ViewStyle, Text, TextInput, Button } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import createApolloClient from 'storm-system-components/src/apollo'
import AllCharactersList from './modules/characters/containers/AllCharactersList'
import SingleCharacterScreen from './modules/characters/screens/SingleCharacter'
import MyForm from './components/form'
import NetworkState from './components/network-state'
import gql from 'graphql-tag'
import { ApolloCache } from 'apollo-cache';

const BROCHALLENGE_DEV = 'http://localhost:60000/relay/v1/cjbif011e000201887rzszrtr'
// const BROCHALLENGE_STAGING = 'https://api.graph.cool/relay/v1/cjbi3txqv0reu0121coxa0nsa'
const PRODUCTION_URL = BROCHALLENGE_DEV

const TODOS_QUERY = gql`
  query {
    todos @client {
      id
      name
    }
  }
`

const apolloClient = createApolloClient({
  config: {
    apollo: {
      developmentUrl: PRODUCTION_URL,
      productionUrl: PRODUCTION_URL,
    },
  },
  resolvers: {
    Mutation: {
      insertTodo: (_, { name }, { cache }: {cache: ApolloCache<any>}) => {
        const data = cache.readQuery({ query: TODOS_QUERY })
        data.todos.push({
          name,
          id: parseInt(`${Math.random() * 99999}`, 10),
          __typename: 'Todo',
        })
        cache.writeQuery({ query: TODOS_QUERY, data })
        return null
      },
      deleteTodo: (_, { id }, { cache }: {cache: ApolloCache<any>}) => {
        const data = cache.readQuery({ query: TODOS_QUERY })
        data.todos = data.todos.filter((todo) => todo.id !== id)
        cache.writeQuery({ query: TODOS_QUERY, data})
        return null
      },
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected,
          },
        };
        cache.writeData({ data });
        return null
      },
    },
  },
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
    todos: [{
      __typename: 'Todo',
      id: '1',
      name: 'Todo 1',
    }],
  },
})

class Todos extends React.Component {
  state = {
    todos: []
  }
  addTodo = (name) => {
    this.setState({
      todos: [...this.state.todos, { name, id: parseInt(`${Math.random() * 999}`, 10) }]
    })
  }
  render() {
    const { todos} = this.state
    return (
      <View>
        <Button
          onPress={() => this.addTodo('hehehe')}
          title="ADD"
        />
        {todos && todos.map((todo) => (
          <View style={{flexDirection: 'row'}}>
            <Text>
              - {todo.id} | {todo.name}
            </Text>
            <Button
              onPress={() => {}}
              title='X'
            />

          </View>
        ))}
      </View>
    )
  }
}
export class App extends Component<{}, {}> {
  public render() {
    return (
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          {/* <AllCharactersList /> */}
          {/* <SingleCharacterScreen /> */}
          <MyForm />
          <NetworkState />
          <Todos />
        </View>
      </ApolloProvider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 22,
  } as ViewStyle,
})
