import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const MainScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
