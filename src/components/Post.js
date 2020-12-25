import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export const Post = ({ post, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.wrapper}>
                <ImageBackground style={styles.image} source={{ uri: post.img }}>
                    <View style={styles.testWrapper}>
                        <Text style={styles.innerText}>
                            {new Date(post.date).toLocaleDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    testWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
    },
    innerText: {
        color: '#fff',
        fontFamily: 'open-regular',
    },
});
