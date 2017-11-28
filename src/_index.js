import 'haul/hot/patch'
import {makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw} from 'haul/hot'

import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
// import App from './App'
import { X } from './x'

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 22}}>
        <X />
      </View>
    )
  }
}

tryUpdateSelf()

callOnce(() => {
  AppRegistry.registerComponent('TsPlayground', makeHot(() => App))
})

if (module.hot) {
  module.hot.accept(() => {})

  module.hot.accept('./x', () => {
    clearCacheFor(require.resolve('./index.js'))
    redraw(() => require('./index.js').default)
  })
}
