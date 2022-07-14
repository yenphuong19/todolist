import React from 'react';
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

const Wrapper = styled.div`
   
`;

function App() {
    return (
        <Provider>
            <Wrapper>
                <Header />
                <div className='bg-light bg-gradient row m-0 vh-100' style={{fontSize: '1.5rem', padding: '80px 10px'}}>
                    <SideBar />
                    <div className="col-md-9">
                        <div style={{maxWidth: '800px', margin: 'auto'}}>
                            <Routes>
                                <Route path='/' element={<Today />}/>
                                <Route path='/all' element={<All />}/>
                                <Route path='/scheduled' element={<Scheduled />}/>
                                <Route path='/search' element={<Search />}/>
                                <Route path='/productivity/completed' element={<Completed />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Provider>
        
    )
}

export default App;