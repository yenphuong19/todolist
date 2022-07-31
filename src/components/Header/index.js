import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Images } from 'constants/index';
import { MODE_CREATE_WITH_MODAL } from 'constants/mode';
import { Context } from 'services/Context';
import routes from 'services/routes';

import SearchBox from './SearchBox';
import Productivity from './Productivity';
import { getDateContent } from 'services/todo';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #e6e6e6;
    padding: 12px 60px;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: rgba(3, 3, 3, 0.8);

    @media (max-width: 740px) {
        padding: 14px 10px;
    } 
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    color: #fff;
    padding: 0 6px;
    font-size: 2.2rem;

    &:hover {
        opacity: 0.7;
    }
`;

const ProductivityQuantity = styled.span`
    font-size: 1.2rem;
    color: #808080;
    padding-left: 6px;
`;

function Header () {
    const [props] = useContext(Context)

    const todayCompletedTask = 
        props.state.tasks.completed
        .filter(item => {return getDateContent(item.date).value === getDateContent(new Date()).value})
        .length
    const totalTodayTask = 
        props.state.tasks.all
        .filter(item => {return getDateContent(item.date).value === getDateContent(new Date()).value})
        .length
        + todayCompletedTask
    const productivityPercent = todayCompletedTask / totalTodayTask * 100
    const countTodayCompletedTask = `${todayCompletedTask}/${totalTodayTask}`
    const totalCompletedTask = props.state.tasks.completed.length
    const totalTask = props.state.tasks.all.length + props.state.tasks.completed.length

    const [showProductivity, setShowProductivity] = useState(false)

    const handleClickAddButton = () => {
        props.setShowModal(true)
        props.setMode(MODE_CREATE_WITH_MODAL)
    }

    console.log(totalTodayTask)

    return (
        <Wrapper>
            <div className="d-flex">
                <Link to={routes.home}>
                    <img src={Images.LOGO} alt="Logo" className='pe-4'></img>
                </Link>
                <SearchBox />
            </div>

            <div className="d-flex justify-content-end">
                <Button onClick={handleClickAddButton}>
                    <i className="bi bi-plus-circle-fill"></i>
                </Button>

                <div className='position-relative'>
                    <Button onClick={() => setShowProductivity(!showProductivity)}>
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                        <ProductivityQuantity>{`${totalCompletedTask}/${totalTask}`}</ProductivityQuantity>
                    </Button>
                    
                    {
                        showProductivity && 
                        <Productivity 
                            countTodayCompletedTask={countTodayCompletedTask}
                            countTotalCompletedTask={totalCompletedTask} 
                            countAllTask={totalTask} 
                            percent={productivityPercent} 
                            setShowProductivity={setShowProductivity}
                        />
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Header;