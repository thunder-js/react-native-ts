/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type DeleteEventInput = {
  id: string,
  clientMutationId: string,
};

export type allCharactersQuery = {
  viewer:  {
    __typename: "Viewer",
    allCharacters:  {
      __typename: "CharacterConnection",
      // A list of edges.
      edges:  Array< {
        __typename: "CharacterEdge",
        // The item at the end of the edge.
        node:  {
          __typename: "Character",
          id: string,
          name: string | null,
        },
      } | null > | null,
    },
  },
};

export type singleCharacterQueryVariables = {
  id: string,
};

export type singleCharacterQuery = {
  viewer:  {
    __typename: "Viewer",
    Character:  {
      __typename: "Character",
      id: string,
      name: string | null,
    } | null,
  },
};

export type allDrinksQuery = {
  viewer:  {
    __typename: "Viewer",
    allDrinks:  {
      __typename: "DrinkConnection",
      // A list of edges.
      edges:  Array< {
        __typename: "DrinkEdge",
        // The item at the end of the edge.
        node:  {
          __typename: "Drink",
          id: string,
          name: string | null,
          imageUrl: string | null,
        },
      } | null > | null,
    },
  },
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
