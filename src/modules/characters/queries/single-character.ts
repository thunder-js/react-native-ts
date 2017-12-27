import gql from 'graphql-tag'

export default gql`
query singleCharacter($id:ID!) {
  viewer {
    Character(id:$id) {
      id
      name
    }
  }
}
`
