import gql from 'graphql-tag'

export default gql`
mutation deleteEvent($input:DeleteEventInput!) {
  deleteEvent(input:$input) {
    event {
			id
    }
  }
}`
