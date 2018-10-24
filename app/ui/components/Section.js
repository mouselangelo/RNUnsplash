import React from "react";
import { View } from 'react-native';

const Section = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        alightItems: 'center'
    }

}

export default Section;