import gql from 'graphql-tag'

export default gql`
query allDrinks {
  viewer {
    allDrinks {
      edges {
        node {
          id
          name
          imageUrl
        }
      }
    }
  }
}`