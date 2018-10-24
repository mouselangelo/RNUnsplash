import React from 'react';
import { View, Text } from 'react-native';
import { headerHeight } from '../../lib/device';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: headerHeight(),
        backgroundColor: '#e5e5e5',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1
    },
    title: {
        marginTop: 18,
        fontSize: 17,
        fontWeight: '500'
    }
};

export default Header;