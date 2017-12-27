import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import SingleCharacter, { ISingleCharacterProps } from '../../components/SingleCharacter'

import withSingleCharacter, { IWithSingleCharacterWrappedProps, IWithSingleCharacterProps } from '../../hocs/with-single-character';

type IWrappedProps = ISingleCharacterProps

const isError = (props: QueryProps) => !!props.error
const isLoading = (props: IFetchState) => props.fetchState.initialLoading
const isEmpty = (props: IWithSingleCharacterWrappedProps) => !props.singleCharacter

export default compose<IWrappedProps, IWithSingleCharacterProps>(
  //  Apollo
  withSingleCharacter,
  //  Handlers
  withHandlers({

  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError(isError, ErrorComponent),
  withLoading(isLoading, Loading),
  withPlaceholder(isEmpty, ListPlaceholder),
)(SingleCharacter)
