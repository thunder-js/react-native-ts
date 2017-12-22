/* tslint:disable */
//  This file was automatically generated and should not be edited.

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
          name: string,
          location: string,
        },
      } | null > | null,
    },
  },
};
