import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';

import Component_1 from './app/components/Component_1/component_1';
import Component_2 from './app/components/Component_2/Component_2';
import Component_3 from './app/components/Component_3/Component_3';
import Component_4 from './app/components/Component_4/Component_4';
import Component_5 from './app/components/Component_5/Component_5';

export default class MainApp extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={styles.title}>TouchableHighlight and TouchableOpacity along with flex</Text>
                <Component_2 />
                <Text style={styles.title}>TextInput and Switch</Text>
                <Component_3 />
                <Text style={styles.title}>ListView made from fetch request to JSONplaceholder</Text>
                <Component_5 />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        padding: 10
    }
})

AppRegistry.registerComponent('MainApp', () => MainApp);
