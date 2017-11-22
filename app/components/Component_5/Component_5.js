import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class Component_5 extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            userDataSource: ds,
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            }).catch(e => {
                console.log(e);
            })
    }

    renderRow(user, sectionId, rowId, hightlightRow) {
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}: {user.email}</Text>
            </View>
        );
    }

    render() {
        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});

AppRegistry.registerComponent('Component_5', () => Component_5);
