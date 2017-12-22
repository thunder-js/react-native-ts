import { graphql } from 'react-apollo'
import deleteEvent from '../mutations/delete-event'
import allEvents from '../queries/all-events'
import {
  allEventsQuery,
  deleteEventMutation as IDeleteEventMutation,
} from '../../../operation-result-types'

export interface IWithDeleteEventOuterProps {

}

export interface IWithDeleteEventWrappedProps {
  deleteEvent: (id: string) => Promise<any>
}

export default graphql<IDeleteEventMutation, IWithDeleteEventOuterProps, IWithDeleteEventWrappedProps>(deleteEvent, {
  props: ({ mutate }) => ({
    deleteEvent: async (id) => {
      if (!mutate) { return }
      try {
        /**
         * Commit mutation
         */
        const result = await mutate({
          variables: {
            input: {
              id,
              clientMutationId: 'clientMutationId',
            },
          },
          /**
           * Update local cache
           */
          update: (store, { data: { deleteEvent } }) => {
            const data = store.readQuery<allEventsQuery>({ query: allEvents })
            //	Do your magic
            const edges = data.viewer.allEvents.edges
            const newEdges = edges && edges.filter((edge) => edge && edge.node.id !== id)
            data.viewer.allEvents.edges = newEdges

            store.writeQuery({ query: allEvents, data })
          },
        })
        /**
         * Handle success
         */
      } catch (err) {
        /**
         * Handle Error
         */
      }
    },
  }),
})
