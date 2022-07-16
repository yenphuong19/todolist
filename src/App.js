import { Routes, Route } from 'react-router-dom';
import Provider from 'services/provider';
import styled from 'styled-components';

import Today from 'pages/Today';
import Search from 'pages/Search';
import Scheduled from 'pages/Scheduled';

import SideBar from 'components/SideBar';
import Header from 'components/Header';
import All from 'pages/All';
import Completed from 'pages/Completed';
import routes from 'services/routes';

function App() {
    return (
        <Provider>
            <Header />
            <div className='bg-light bg-gradient row m-0 vh-100' style={{fontSize: '1.5rem', padding: '80px 10px'}}>
                <SideBar />
                <div className="col-md-9">
                    <div style={{maxWidth: '800px', margin: 'çauto'}}>
                        <Routes>
                            <Route path={routes.home} element={<Today />}/>
                            <Route path={routes.all} element={<All />}/>
                            <Route path={routes.scheduled} element={<Scheduled />}/>
                            <Route path={routes.search} element={<Search />}/>
                            <Route path={routes.completed} element={<Completed />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
        
    )
}

export default App;