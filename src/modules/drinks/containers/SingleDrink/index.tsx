import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import SingleDrink, { ISingleDrinkProps } from '../../components/SingleDrink'

import withSingleDrink, { IWithSingleDrinkWrappedProps, IWithSingleDrinkProps } from '../../hocs/with-single-drink.ts';

type IWrappedProps = ISingleDrinkProps

const isError = (props: QueryProps) => !!props.error
const isLoading = (props: IFetchState) => props.fetchState.initialLoading
const isEmpty = (props: IWithSingleDrinkWrappedProps) => !props.singleCharacter

export default compose<IWrappedProps, IWithSingleDrinkProps>(
  //  Apollo
  withSingleDrink,
  //  Handlers
  withHandlers({

  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError(isError, ErrorComponent),
  withLoading(isLoading, Loading),
  withPlaceholder(isEmpty, ListPlaceholder),
)(SingleDrink)
