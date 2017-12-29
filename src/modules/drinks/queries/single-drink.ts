import gql from 'graphql-tag'

export default gql`
query singleDrink($id:ID!){
  viewer {
    Drink(id:$id) {
      name
      id
      points
    }
  }
}`
