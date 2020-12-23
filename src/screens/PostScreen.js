import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const PostScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Text>Post Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
