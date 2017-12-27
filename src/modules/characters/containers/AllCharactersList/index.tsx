import { QueryProps } from 'react-apollo'
import { compose, withHandlers } from 'recompose'
import { withPlaceholder, withApolloFetchState, withApolloFetchActions, withError, IFetchState, IFetchActions, withLoading } from 'common-data/artifacts/hocs'

import ErrorComponent from '../../../global/components/Error'
import ListPlaceholder from '../../../global/components/ListPlaceholder'
import Loading from '../../../global/components/Loading'

import AllCharactersList, { IEntity } from '../../components/AllCharactersList'

import withAllCharactersList, { IWithAllCharactersWrappedProps } from '../../hocs/with-all-characters';

type WrappedProps = IFetchActions & IFetchState & {
  allCharacters: IEntity[],
  onPressItem: (event: IEntity) => void,
}

const isError = (props) => !!props.error
const isLoading = (props) => props.fetchState.initialLoading
const isEmpty = (props) => !props.allCharacters || !props.allCharacters.length

export default compose<WrappedProps, {}>(
  //  Apollo
  withAllCharactersList,
  //  Handlers
  withHandlers({
    onPressItem: () => (item: IEntity) => null,
  }),
  //  Data
  withApolloFetchActions(),
  withApolloFetchState(),
  withError<QueryProps>(isError, ErrorComponent),
  withLoading<IFetchState>(isLoading, Loading),
  withPlaceholder<IWithAllCharactersWrappedProps>(isEmpty, ListPlaceholder),
)(AllCharactersList)
