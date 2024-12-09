import { registerRootComponent } from 'expo';
import './index.css';

import App from './App';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

function AppContainer() {
    return (
        <SafeAreaProvider>
        <App />
        </SafeAreaProvider>
    );
    }
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

