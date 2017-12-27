import { graphql } from 'react-apollo'
import { getEntitiesFromEdgesSafely } from 'common-data/artifacts/logic/relay'
import { allCharactersQuery as IAllCharactersQuery } from '../../../operation-result-types'
import allCharacters from '../queries/all-characters';

export interface IEntity {
  id: string,
}

export interface IWithAllCharactersWrappedProps {
  allCharacters: IEntity[],
}

export default graphql<IAllCharactersQuery, {}, IWithAllCharactersWrappedProps>(allCharacters, {
  options: () => ({
    notifyOnNetworkStatusChange: true,
  }),
  props: (props) => ({
    ...props,
    allCharacters: getEntitiesFromEdgesSafely(['viewer', 'allCharacters', 'edges'], props.data),
  }),
})
