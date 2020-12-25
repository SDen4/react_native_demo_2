import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Post } from '../components/Post';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MainScreen = ({ navigation }) => {
    const goToPost = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(key) => key.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={goToPost} />}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Take a photo"
                iconName="ios-camera"
                onPress={() => console.log('press camera')}
            />
        </HeaderButtons>
    ),
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
