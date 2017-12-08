import * as React from 'react'
import gql from 'graphql-tag'
import { graphql, OptionProps } from 'react-apollo'
import ListComponent from '../../components/List'
import { compose } from 'recompose'
import { withLoading, withApolloFetchState, IFetchState, withApolloFetchActions, IFetchActions } from 'common-data/artifacts/hocs'
import { ActivityIndicator } from 'react-native'
import R from 'ramda'

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

}

const listQuery = gql`
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

const withPets = () => graphql<Response, InputProps, InjectedProps>(listQuery, {
  options: {
    notifyOnNetworkStatusChange: true
  },
  props: ({ data, ...otherProps }) => {
    return {
      ...otherProps,
      data,
      pets: getEntitiesFromEdgesSafely(['viewer', 'allPets', 'edges'], data)
    }
  }
})

export default compose(
  withPets(),
  withApolloFetchState(),
  withApolloFetchActions(),
  withLoading((props: IFetchState) => props.fetchState.initialLoading, () => <ActivityIndicator style={{marginTop: 20}}/>)
)(ListComponent)
