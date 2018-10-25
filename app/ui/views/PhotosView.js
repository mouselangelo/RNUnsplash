import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from "react-redux";
import Header from '../components/Header';
import { loadPhotos } from '../../state/actions';
import PhotoListItem from "../components/PhotoListItem";

class PhotosView extends Component {

    componentWillMount() {
        this.props.loadPhotos();
    }

    renderListItem = ({ item }) => {
        return <PhotoListItem photo={item} />
    };

    loadMoreItems() {
        this.props.loadPhotos();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                <Header>Photos</Header>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.props.photos}
                    renderItem={this.renderListItem}
                    keyExtractor={item => item.id}
                    onEndReached={this.loadMoreItems.bind(this)}
                    onEndReachedThreshold={1}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos }
}

export default connect(mapStateToProps, { loadPhotos })(PhotosView);