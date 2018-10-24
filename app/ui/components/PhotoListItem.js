import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import Section from './Section';

const PhotoListItem = (props) => {
    const { user } = props.photo;
    const avatarSource = { uri: user.profile_image.medium };
    const imageSource = { uri: props.photo.urls.small };
    return (
        <Card>
            <Section>
                <Image style={styles.avatar} source={avatarSource} />
                <Text style={styles.username}>{user.name}</Text>
            </Section>
            <Section>
                <Image style={{ minHeight: 300, width: undefined, flex: 1 }} source={imageSource} />
            </Section>
        </Card>
    );
}

const styles = {
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c5c5c5',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        margin: 6
    },
    username: {
        fontSize: 16,
        margin: 6,
        alignSelf: 'center',
        flex: 1
    }
};

export default PhotoListItem;