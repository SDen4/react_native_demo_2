import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';

export const PostList = ({ data, onOpen }) => {
    if (!data.length) {
        return (
            <View style={styles.noPosts}>
                <Text style={styles.text}>No posts for display</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                // data={DATA.filter((item) => item.booked)}
                keyExtractor={(key) => key.id.toString()}
                // renderItem={({ item }) => <Post post={item} onOpen={goToPost} />}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    noPosts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    text: {
        fontFamily: 'open-regular',
        fontSize: 24
    },
});
