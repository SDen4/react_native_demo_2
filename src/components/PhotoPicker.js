import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermissions() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
        Alert.alert('Error!', "You didn't allow the app using the camera");
        return false;
    } else {
        return true;
    }
}

export const PhotoPicker = ({}) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions();

        if (!hasPermissions) return;

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: true,
            aspect: [16, 9],
        });
        console.log(img);
    };

    return (
        <View style={styles.container}>
            <Button title='Make a photo' onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 10,
    },
});
