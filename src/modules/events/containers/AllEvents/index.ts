import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import AllEventsList, { IEvent } from '../../components/AllEventsList'

import withAllEvents from '../../hocs/with-all-events';
import withDeleteEvent from '../../hocs/with-delete-event'
import { IWithAllEventsWrappedProps } from '../../hocs/with-all-events'

interface OuterProps {}
type WrappedProps = IFetchActions & IFetchState & {
  allEvents: IEvent[],
  onPressEvent: (event: Event) => void,
}

export interface IHandlers {
  onPressEvent: (event: IEvent) => void
}

const isError = (props) => !!props.error
const isLoading = (props) => props.fetchState.initialLoading
const isEmpty = (props) => !props.allEvents || !props.allEvents.length

export default compose<WrappedProps, OuterProps>(
  //  Apollo
  withAllEvents,
  withDeleteEvent,
  //  Handlers
  withHandlers({
    onPressEvent: ({ deleteEvent }) => (event: IEvent) => deleteEvent(event.id),
  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError<QueryProps>(isError, ErrorComponent),
  withLoading<IFetchState>(isLoading, Loading),
  withPlaceholder<IWithAllEventsWrappedProps>(isEmpty, ListPlaceholder),
)(AllEventsList)
