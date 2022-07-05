import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from 'services/provider';
import Home from 'pages/Home';
import Search from 'pages/Search';
import SideBar from 'components/SideBar';
import Header from 'components/Header';
import Modal from 'components/Modal';
import { Context } from 'services/Context';

function App() {
    return (
        <Provider>
            <Header />
            
            <div className='bg-light bg-gradient row m-0' style={{fontSize: '1.5rem'}}>
                <SideBar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/search' element={<Search />}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;