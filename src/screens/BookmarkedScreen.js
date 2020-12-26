import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { PostList } from '../components/PostList';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { DATA } from '../data';

export const BookmarkedScreen = ({ navigation }) => {
    const goToPost = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return <PostList data={DATA.filter((item) => item.booked)} onOpen={goToPost} />;
};

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Bookmarked posts',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
});
