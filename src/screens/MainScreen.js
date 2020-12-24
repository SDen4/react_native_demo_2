import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {
    const goToPost = () => {
        console.log(navigation);
        navigation.navigate('Post');
    };

    return (
        <View style={styles.container}>
            <Text>MainScreen</Text>
            <Button title="Go to Post screen" onPress={goToPost} />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
