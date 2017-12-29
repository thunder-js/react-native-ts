import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import AllEventsList, { IEvent } from '../../components/AllEventsList'

import withAllEvents, { IWithAllEventsWrappedProps } from '../../hocs/with-all-events.ts';

type WrappedProps = IFetchActions & IFetchState & {
  allEvents: IEvent[],
  onPressItem: (event: IEvent) => void,
}

const isError = (props) => !!props.error
const isLoading = (props) => props.fetchState.initialLoading
const isEmpty = (props) => !props.allEvents || !props.allEvents.length

export default compose<WrappedProps, {}>(
  //  Apollo
  withAllEvents,
  //  Handlers
  withHandlers({
    onPressItem: () => (item: IEvent) => null,
  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError<QueryProps>(isError, ErrorComponent),
  withLoading<IFetchState>(isLoading, Loading),
  withPlaceholder<IWithAllEventsWrappedProps>(isEmpty, ListPlaceholder),
)(AllEventsList)
