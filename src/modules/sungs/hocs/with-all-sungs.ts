import { graphql } from 'react-apollo'
import { getEntitiesFromEdgesSafely } from 'common-data/artifacts/logic/relay'
import { allSungsQuery as IAllSungsQuery } from '../../../operation-result-types'
import allSungs from '../queries/all-sungs';

export interface IEntity {
  id: string;
  text?: string;
  points?: number;
}

export interface IWithAllSungsWrappedProps {
  allSungs: IEntity[],
}

export default graphql<IAllSungsQuery, {}, IWithAllSungsWrappedProps>(allSungs, {
  options: () => ({
    notifyOnNetworkStatusChange: true,
  }),
  props: (props) => ({
    ...props,
    allSungs: getEntitiesFromEdgesSafely(['viewer', 'allSungs', 'edges'], props.data),
  }),
})
