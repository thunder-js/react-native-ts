import { graphql } from 'react-apollo'
import { getEntitiesFromEdgesSafely } from 'common-data/artifacts/logic/relay'
import { allDrinksQuery as IAllDrinksQuery } from '../../../operation-result-types'
import allDrinks from '../queries/all-drinks';

export interface IEntity {
  id: string,
}

export interface IWithAllDrinksWrappedProps {
  allDrinks: IEntity[],
}

export default graphql<IAllDrinksQuery, {}, IWithAllDrinksWrappedProps>(allDrinks, {
  options: () => ({
    notifyOnNetworkStatusChange: true,
  }),
  props: (props) => ({
    ...props,
    allDrinks: getEntitiesFromEdgesSafely(['viewer', 'allDrinks', 'edges'], props.data),
  }),
})
