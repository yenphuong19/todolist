import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { Context } from "services/context/Context";
import { Routes, Route } from 'react-router-dom';
import routes from 'services/routes';

import Today from 'pages/Today';
import Search from 'pages/Search';
import Scheduled from 'pages/Scheduled';
import All from 'pages/All';
import Completed from 'pages/Completed';

import SideBar from 'components/SideBar';
import Modal from 'components/Modal';
import Toast from 'components/Toast';

const Wrapper = styled.div`
    font-size: 1.5rem;
    padding: 80px 10px 10px;
    background-color: #eceff1;

    .list-container {
        max-width: 800px;
        padding: 0 10px;
        margin: 0 auto;
        min-height: 100vh;
    }

    .col-md-3 ,
    .col-md-9 {
        padding: 0;
    }
`;

function MainContent () {
    const [props] = useContext(Context)
    
    return (
        <Fragment>
            <Wrapper className="bg-gradient row m-0">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <div className="list-container">
                        <Routes>
                            <Route path={routes.home} element={<Today />}/>
                            <Route path={routes.all} element={<All />}/>
                            <Route path={routes.scheduled} element={<Scheduled />}/>
                            <Route path={routes.search} element={<Search />}/>
                            <Route path={routes.completed} element={<Completed />}/>
                        </Routes>
                    </div>
                </div>
                <Toast show={props.showToast.isShow} action={props.showToast.action}/>
            </Wrapper>
            {props.showModal && <Modal />}
        </Fragment>
    )
}

export default MainContent;
