import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppNavigation } from './src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';

import store from './src/store/index';
import { bootstrap } from './src/bootstrap';

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}
