/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type DeleteEventInput = {
  id: string,
  clientMutationId: string,
};

export type deleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type deleteEventMutation = {
  deleteEvent:  {
    __typename: "DeleteEventPayload",
    event:  {
      __typename: "Event",
      id: string,
    } | null,
  } | null,
};

export type allEventsQuery = {
  viewer:  {
    __typename: "Viewer",
    allEvents:  {
      __typename: "EventConnection",
      // A list of edges.
      edges:  Array< {
        __typename: "EventEdge",
        // The item at the end of the edge.
        node:  {
          __typename: "Event",
          id: string,
          name: string,
          location: string,
        },
      } | null > | null,
    },
  },
};
