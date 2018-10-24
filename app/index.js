import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PhotosView from "ui/views/PhotosView";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from './state/reducers';

class UnsplashApp extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <PhotosView />
            </Provider>
        );
    }

}

export default UnsplashApp;