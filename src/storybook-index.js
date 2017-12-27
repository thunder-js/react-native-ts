import 'haul/hot';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require ('./stories')
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: false });

export default class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('TsPlayground', () => StorybookUIHMRRoot);
