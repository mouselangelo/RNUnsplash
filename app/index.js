import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PhotosView from "ui/views/PhotosView";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk';
import reducers from './state/reducers';

class UnsplashApp extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <PhotosView />
            </Provider>
        );
    }

}

export default UnsplashApp;