import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Text>Post application</Text>
            <Text>Version <Text style={styles.bold}>1.0.0.</Text></Text>
            <Text>Created by Denis Skryabin</Text>
        </View>
    );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'About',
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bold: {
        fontFamily: 'open-bold'
    }
});
