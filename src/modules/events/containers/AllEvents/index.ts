import { graphql, QueryProps } from 'react-apollo'
import { compose } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'
import { getEntitiesFromEdgesSafely } from 'common-data/artifacts/logic/relay'
import { allEventsQuery as IAllEventsQuery } from '../../../../operation-result-types'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import allEventsQuery from '../../../events/queries/all-events';
import AllEventsList from '../../components/AllEventsList'
import { IAllEventsListProps } from '../../components/AllEventsList/index'

export interface InputProps {
  
}

export type IWithAllEventsProps = QueryProps & IAllEventsListProps

const withAllEvents = graphql<IAllEventsQuery, InputProps, IWithAllEventsProps>(allEventsQuery, {
  options: () => ({
    notifyOnNetworkStatusChange: true,
  }),
  props: (props) => ({
    ...props,
    allEvents: getEntitiesFromEdgesSafely(['viewer', 'allEvents', 'edges'], props.data)
  })
})

export default compose<IFetchActions & IFetchState & IAllEventsListProps, InputProps>(
  withAllEvents,
  withError<QueryProps>((props) => !!props.error, ErrorComponent),
  withApolloFetchActions(),
  withApolloFetchState(),
  withLoading<IFetchState>((props) => props.fetchState.initialLoading, Loading),
  withPlaceholder<IAllEventsListProps>((props) => !props.allEvents || !props.allEvents.length, ListPlaceholder)
)(AllEventsList)