import React, { useEffect, useCallback } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from '../theme';
// import { DATA } from '../data';
import { removePost, toggleBooked } from '../store/actions/postAction';

export const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const postId = navigation.getParam('postId');
    const post = useSelector((state) => state.post.allPosts.find((p) => p.id === postId));

    const booked = useSelector((state) =>
        state.post.bookedPosts.some((post) => post.id === postId)
    );

    useEffect(() => {
        navigation.setParams({ booked });
    }, [booked]);

    const toggleHandler = useCallback(() => {
        console.log(postId);
        dispatch(toggleBooked(post));
    }, [dispatch, post]);

    useEffect(() => {
        navigation.setParams({ toggleHandler });
    }, [toggleHandler]);

    const removeHandler = () => {
        Alert.alert(
            'Delete the post',
            'Are you sure ?..',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress() {
                        navigation.navigate('Main');
                        dispatch(removePost(postId));
                    },
                },
            ],
            { cancelable: false }
        );
    };

    //Prevent error - after deletion we continue work with old data
    if (!post) {
        return null;
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image}></Image>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date');
    const booked = navigation.getParam('booked');
    const toggleHandler = navigation.getParam('toggleHandler');
    const iconName = booked ? 'ios-star' : 'ios-star-outline';
    return {
        headerTitle: 'Post from' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take a photo' iconName={iconName} onPress={toggleHandler} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrapper: {
        padding: 10,
    },
    text: {
        fontFamily: 'open-regular',
    },
});
