import React from "react";
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        marginBottom: 12
    }

}

export default Card;