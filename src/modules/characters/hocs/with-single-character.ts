import { graphql } from 'react-apollo'
import { singleCharacterQuery as IResponse } from '../../../operation-result-types'
import singleCharacter from '../queries/single-character';
import * as R from 'ramda';

export interface IEntity {
  id: string,
}

export interface IWithSingleCharacterProps {
  id: string;
}
export interface IWithSingleCharacterWrappedProps {
  singleCharacter: IEntity[],
}

export default graphql<IResponse, IWithSingleCharacterProps, IWithSingleCharacterWrappedProps>(singleCharacter, {
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
  props: (props) => ({
    ...props,
    singleCharacter: R.pathOr(null, ['viewer', 'Character'], props.data),
  }),
})
