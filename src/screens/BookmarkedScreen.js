import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Post } from '../components/Post';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const BookmarkedScreen = ({ navigation }) => {
    const goToPost = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA.filter((item) => item.booked)}
                keyExtractor={(key) => key.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={goToPost} />}
            />
        </View>
    );
};

BookmarkedScreen.navigationOptions = {
    headerTitle: 'Bookmarked posts',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle drawer'
                iconName='ios-menu'
                onPress={() => console.log('press menu')}
            />
        </HeaderButtons>
    ),
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
