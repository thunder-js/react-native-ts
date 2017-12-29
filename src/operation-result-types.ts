/* tslint:disable */
//  This file was automatically generated and should not be edited.

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
          points: number,
        },
      } | null > | null,
    },
  },
};

export type singleDrinkQueryVariables = {
  id: string,
};

export type singleDrinkQuery = {
  viewer:  {
    __typename: "Viewer",
    Drink:  {
      __typename: "Drink",
      name: string | null,
      id: string,
      points: number,
    } | null,
  },
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

export type allSungsQuery = {
  viewer:  {
    __typename: "Viewer",
    allSungs:  {
      __typename: "SungConnection",
      // A list of edges.
      edges:  Array< {
        __typename: "SungEdge",
        // The item at the end of the edge.
        node:  {
          __typename: "Sung",
          id: string,
          text: string | null,
          points: number | null,
        },
      } | null > | null,
    },
  },
};
