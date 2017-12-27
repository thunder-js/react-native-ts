import gql from 'graphql-tag'

export default gql`
query allCharacters {
  viewer {
    allCharacters {
     	edges {
        node {
          id
          name
        }
      }
    }
  }
}`
