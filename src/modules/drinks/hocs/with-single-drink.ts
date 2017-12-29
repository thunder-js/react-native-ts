import { graphql } from 'react-apollo'
import { singleDrinkQuery as IResponse } from '../../../operation-result-types'
import singleDrink from '../queries/single-drink';
import * as R from 'ramda';

export interface IDrink {
  name?: string;
  id: string;
  points: number;
}

export interface IWithSingleDrinkProps {
  id: string;
}
export interface IWithSingleDrinkWrappedProps {
  singleDrink: IDrink,
}

export default graphql<IResponse, IWithSingleDrinkProps, IWithSingleDrinkWrappedProps>(singleDrink, {
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
  props: (props) => ({
    ...props,
    singleDrink: R.pathOr(null, ['viewer', 'Drink'], props.data),
  }),
})
