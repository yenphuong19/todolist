import React from 'react';
import Provider from 'services/context/Provider';
import Header from 'components/Header';
import MainContent from 'containers/MainContent';

function App() {
    return (
        <Provider>
            <Header />
            <MainContent />
        </Provider>
    )
}

export default App;