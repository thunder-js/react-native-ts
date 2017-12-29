import gql from 'graphql-tag'

export default gql`
query allSungs {
  viewer {
    allSungs {
      edges {
        node {
          id
          text
          points
        }
      }
    }
  }
}`
