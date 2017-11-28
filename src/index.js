import 'haul/hot/patch'
import React from 'react'
import {makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw} from 'haul/hot'
import { AppRegistry } from 'react-native'
import { App } from './App';

export default class Root extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

tryUpdateSelf()

callOnce(() => {
  AppRegistry.registerComponent('TsPlayground', makeHot(() => Root))
})

if (module.hot) {
  module.hot.accept(() => {})

  module.hot.accept(['./App'], () => {
    clearCacheFor(require.resolve('./index.js'))
    redraw(() => require('./index.js').default)
  })
}
