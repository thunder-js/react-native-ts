import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import AllDrinksList, { IEntity } from '../../components/AllDrinksList'

import withAllDrinksList, { IWithAllDrinksWrappedProps } from '../../hocs/with-all-drinks';

type WrappedProps = IFetchActions & IFetchState & {
  allDrinks: IEntity[],
  onPressItem: (event: IEntity) => void,
}

const isError = (props) => !!props.error
const isLoading = (props) => props.fetchState.initialLoading
const isEmpty = (props) => !props.allDrinks || !props.allDrinks.length

export default compose<WrappedProps, {}>(
  //  Apollo
  withAllDrinksList,
  //  Handlers
  withHandlers({
    onPressItem: () => (item: IEntity) => null,
  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError<QueryProps>(isError, ErrorComponent),
  withLoading<IFetchState>(isLoading, Loading),
  withPlaceholder<IWithAllDrinksWrappedProps>(isEmpty, ListPlaceholder),
)(AllDrinksList)
