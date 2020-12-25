import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Post } from '../components/Post';
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
    const goToPost = (post) => {
        // console.log(navigation);
        navigation.navigate('Post', {postId: post.id, date: post.date});
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
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
