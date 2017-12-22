import gql from 'graphql-tag'

export default gql`
query allEvents {
  viewer {
    allEvents {
      edges {
        node {
          id
          name
          location
        }
      }
    }
  }
}
`
