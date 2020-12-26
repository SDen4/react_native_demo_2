import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { PostList } from '../components/PostList';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { useSelector } from 'react-redux';

export const BookmarkedScreen = ({ navigation }) => {
    const goToPost = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    const bookedPosts = useSelector((state) => state.post.bookedPosts);

    return <PostList data={bookedPosts} onOpen={goToPost} />;
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
