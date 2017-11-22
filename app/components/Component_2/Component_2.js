import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component_2 extends Component {
    onPress() {
        console.log("Red area pressed");
    }

    onPress_2() {
        console.log("Green area pressed");
    }

    render() {
        return(
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Hello Brad</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor='green'>
                        <View>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.onPress_2} style={styles.v2}>
                        <View>
                            <Text>View 2</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text style={styles.vText}>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    vText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component_2', () => Component_2);
