import { Provider } from 'react-redux';
import React from 'react';

import store from './store';

import App from './App';

export default function AppWrapper() {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}