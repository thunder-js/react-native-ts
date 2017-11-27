/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello!!',
            age: 1
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome },
                "Oh my god, TS!! ",
                this.state.text)));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
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
});
//# sourceMappingURL=App.js.map