import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';

export const PostList = ({data, onOpen}) => {
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
});