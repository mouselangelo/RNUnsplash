import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class PhotosView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                <Header>Photos</Header>
                <Text>List of photos</Text>
            </View>
        );
    }
}

export default PhotosView;