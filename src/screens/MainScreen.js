import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';

export const MainScreen = ({ navigation }) => {
    const goToPost = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return <PostList data={DATA} onOpen={goToPost} />;
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take a photo'
                iconName='ios-camera'
                onPress={() => console.log('press camera')}
            />
        </HeaderButtons>
    ),
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
