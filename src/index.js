import 'haul/hot/patch';
import React from 'react';
import {makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw} from 'haul/hot';
import { AppRegistry } from 'react-native';
import codePush from "react-native-code-push";
import { App } from './App';

class Root extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

const RootWithCodePush = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME})(Root)

tryUpdateSelf();

callOnce(() => {
  AppRegistry.registerComponent('TsPlayground', makeHot(() => Root));
});

if (module.hot) {
  module.hot.accept(() => {});

  module.hot.accept(['./App'], () => {
    clearCacheFor(require.resolve('./index.js'));
    redraw(() => require('./index.js').default);
  });
}
