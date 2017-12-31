import * as React from 'react'
import gql from 'graphql-tag'
import { View, Text, Button } from 'react-native'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

const GET_ARTICLES = gql`
  query {
    networkStatus @client {
      isConnected
    }
    todos @client {
      id
      name
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) @client
  }
`

export default compose(
  graphql(DELETE_TODO, {
    props: ({ mutate }) => ({
      deleteTodo: (id) => mutate && mutate({ variables: { id } }),
    }),
  }),
  graphql(GET_ARTICLES, {
    props: ({ data: { networkStatus, todos, loading, error } }) => {
      if (loading) {
        return { loading };
      }

      if (error) {
        return { error };
      }

      return {
        loading: false,
        networkStatus,
        todos,
      };
    }}),
)(({ networkStatus, todos, deleteTodo}) => (
  <View>
    <Text>{networkStatus && networkStatus.isConnected ? 'SIM' : 'NÃO'}</Text>
    {todos && todos.map((todo) => (
      <View key={todo.id} style={{flexDirection: 'row'}}>
        <Text>
          - {todo.id} | {todo.name}
        </Text>
        <Button
          onPress={() => deleteTodo(todo.id)}
          title='X'
        />
      </View>
    ))}
  </View>
));
