import Provider from 'services/provider';
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