import React, { useState } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/postAction';

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    //temp!!!
    const img =
        'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false,
        };
        dispatch(addPost(post));
        //afler dispatching - go to the main page and ...
        navigation.navigate('Main');
        //...and clear the text in textInput for new posts
        setText('');
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.title}>Create a new POST</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder='Enter the text here'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        style={styles.image}
                        source={{
                            uri: img,
                        }}
                    />
                    <Button title='Add post' color={THEME.MAIN_COLOR} onPress={saveHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'New post',
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
        padding: 10,
        paddingVertical: 0,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10,
    },
    textArea: {
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
});
