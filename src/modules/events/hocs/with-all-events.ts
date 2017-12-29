import { graphql } from 'react-apollo'
import { getEntitiesFromEdgesSafely } from 'common-data/artifacts/logic/relay'
import { allEventsQuery as IAllEventsQuery } from '../../../operation-result-types'
import allEvents from '../queries/all-events';

export interface IEvent {
  id: string;
  name: string;
  location: string;
}

export interface IWithAllEventsWrappedProps {
  allEvents: IEvent[],
}

export default graphql<IAllEventsQuery, {}, IWithAllEventsWrappedProps>(allEvents, {
  options: () => ({
    notifyOnNetworkStatusChange: true,
  }),
  props: (props) => ({
    ...props,
    allEvents: getEntitiesFromEdgesSafely(['viewer', 'allEvents', 'edges'], props.data),
  }),
})
