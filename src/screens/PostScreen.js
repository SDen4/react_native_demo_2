import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { DATA } from '../data';

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');

    const post = DATA.find((data) => data.id === postId);

    const removeHandler = () => {
        Alert.alert(
            'Delete the post',
            'Are you sure ?..',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'Delete', style: 'destructive', onPress: () => {} }
            ],
            { cancelable: false }
        );
    };

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image}></Image>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date');
    return {
        headerTitle: 'Post from' + new Date(date).toLocaleDateString(),
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
