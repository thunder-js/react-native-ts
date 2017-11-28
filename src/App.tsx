/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native'
import { compose, withProps } from 'recompose'
import { NewComponent } from './components/new-component/index'

interface Options {
  upperCase: boolean
  intervalMs: number
}

// Props que serão passadas para o WrappedComponent
interface InjectedProps {
  name: string
}

// Props que o Componente final recebe
interface ExternalProps {
  namePool: string[]
}

// Estado interno do Enhanced Component
interface HOCState {
  selectedIndex: number
}

//  OriginalProps -> Quaisquer que sejão as props do componente original

const rnd = (min, max) => Math.floor(Math.random() * ((max - min) + 1) + min)

const withRandomName = (options: Options) =>
  <TOriginalProps extends {}>(WrappedComponent:
    React.ComponentClass<TOriginalProps & InjectedProps> |
    React.StatelessComponent<TOriginalProps & InjectedProps>) =>
    class extends React.Component<TOriginalProps & ExternalProps, HOCState> {
      intervalId: number

      constructor(props: TOriginalProps & ExternalProps) {
        super(props)
        this.state = {
          selectedIndex: 0
        }
      }

      public render(): JSX.Element {
        const name = this.props.namePool[this.state.selectedIndex]
        const formattedName = options.upperCase ? name.toUpperCase() : name
        return (
          <WrappedComponent
            {...this.props}
            name={formattedName}
          />
        )
      }

      public componentDidMount() {
        this.intervalId = setInterval(this.setNewNameIndex, options.intervalMs)
      }

      public componentWillUnmount() {
        clearInterval(this.intervalId)
      }

      private setNewNameIndex = () => {
        this.setState({
          selectedIndex: rnd(0, this.props.namePool.length - 1)
        })
      }
    }

export interface Props {

}
export interface State {
  text: string,
  age: number,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  } as ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

interface IMyComponentProps {
  color: string
}

const DisplayName = ({
  name,
  color
}: IMyComponentProps & InjectedProps) => (
    <Text style={{ color }}>
      {name}
    </Text>
  )

// const RandomName = compose(
//   withRandomName({ upperCase: false, intervalMs: 200 }),
//   withProps({
//     x: 123
//   })
// )(DisplayName)

export class App extends Component<Props & InjectedProps, State> {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello!!',
      age: 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <NewComponent age={1} />
      </View>
    )
  }
}