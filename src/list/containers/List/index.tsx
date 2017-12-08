import * as React from 'react'
import { Text} from 'react-native'
import gql from 'graphql-tag'
import { graphql, QueryProps } from 'react-apollo'
import ListComponent from '../../components/List'
import { compose } from 'recompose'
import R from 'ramda'
import {
  withLoading,
  withPlaceholder,
  withApolloFetchState,
  IFetchState,
  withApolloFetchActions,
  IFetchActions,
  withError
} from 'common-data/artifacts/hocs'
import { ActivityIndicator } from 'react-native'
import { IListProps } from '../../components/List/index'

export interface Pet {
  id: string
  name: string
  imageUrl: string
}
export interface Edge {
  node: Pet
}
export interface PetsConnection {
  edges: Array<Edge>
}
export interface Viewer {
  allPets: PetsConnection
}
export interface Response {
  viewer: Viewer
}

export interface InjectedProps {
  pets: Array<Pet>
}

export interface InputProps {
  myInput: string
}

const petsQuery = gql`
  {
    viewer {
      allPets {
        edges {
          node {
            id
            name
            imageUrl
          }
        }
      }
    }
  }
`

const mapEdgesToEntities = (edges: Array<Edge> | undefined) => edges ? edges.map(edge => edge.node) : []
const getEntitiesFromEdgesSafely = (path: string[], data) => mapEdgesToEntities(R.pathOr([], path, data))

const withPets = () => graphql<Response, InputProps, InjectedProps>(petsQuery, {
  options: ({ myInput }) => ({
    notifyOnNetworkStatusChange: true,
    variables: {
      x: myInput
    }
  }),
  props: (props) => ({
    ...props,
    pets: getEntitiesFromEdgesSafely(['viewer', 'allPets', 'edges'], props.data)
  })
})

const Placeholder = () => (
  <Text>Empty List</Text>
)
const Loading = () => (
  <ActivityIndicator style={{marginTop: 20}}/>
)

const ErrorComponent = () => (
  <Text>Error!</Text>
)

export default compose<IFetchActions & IFetchState & IListProps, InputProps>(
  withPets(),
  withError<QueryProps>((props) => !!props.error, ErrorComponent),
  withApolloFetchActions(),
  withApolloFetchState(),
  withLoading<IFetchState>((props) => props.fetchState.initialLoading, Loading),
  withPlaceholder<IListProps>((props) => !props.pets || !props.pets.length, Placeholder)
)(ListComponent)