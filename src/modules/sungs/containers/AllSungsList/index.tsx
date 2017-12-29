import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import AllSungsList, { IEntity } from '../../components/AllSungsList'

import withAllSungsList, { IWithAllSungsWrappedProps } from '../../hocs/with-all-sungs';

type WrappedProps = IFetchActions & IFetchState & {
  allSungs: IEntity[],
  onPressItem: (event: IEntity) => void,
}

const isError = (props) => !!props.error
const isLoading = (props) => props.fetchState.initialLoading
const isEmpty = (props) => !props.allSungs || !props.allSungs.length

export default compose<WrappedProps, {}>(
  //  Apollo
  withAllSungsList,
  //  Handlers
  withHandlers({
    onPressItem: () => (item: IEntity) => null,
  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError<QueryProps>(isError, ErrorComponent),
  withLoading<IFetchState>(isLoading, Loading),
  withPlaceholder<IWithAllSungsWrappedProps>(isEmpty, ListPlaceholder),
)(AllSungsList)
