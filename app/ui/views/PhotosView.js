import React, { Component } from 'react';
import { View, ListView, Image } from 'react-native';
import { connect } from "react-redux";
import Header from '../components/Header';
import { loadPhotos } from '../../state/actions';

class PhotosView extends Component {
    componentWillMount() {
        this.props.loadPhotos();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ photos }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(photos);
    }

    renderRow(photo) {
        const source = { uri: photo.urls.small };
        return <Image style={{ aspectRatio: 1 }} source={source} />
    }

    render() {
        console.log(this.props.photos);
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
                <Header>Photos</Header>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos }
}

export default connect(mapStateToProps, { loadPhotos })(PhotosView);