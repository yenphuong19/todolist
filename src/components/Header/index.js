import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Images, MODE_CREATE } from 'constants/index';
import { Context } from 'services/Context';

import styled from 'styled-components';

import SearchBox from './SearchBox';
import Productivity from './Productivity';

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
    font-size: 1.8rem;

    &:hover {
        opacity: 0.7;
    }
`;

const ProductivityQuantity = styled.span`
    font-size: 1.2rem;
    color: #808080;
    padding-left: 6px;
`;

const Avartar = styled.div`
    border-radius: 50%;
    border: 1px solid #d75b39;
    height: 30px;
    width: 30px;
    line-height: 33.5px;
    display: block;
    text-align: center;
    margin-left: 20px;
    font-size: 1.5rem;
`;

function Header () {
    const [props] = useContext(Context)

    const [showProductivity, setShowProductivity] = useState(false)

    const handleClickAddButton = () => {
        props.setShowModal(true)
        props.setMode(MODE_CREATE)
    }

    return (
        <Wrapper>
            <div className="d-flex">
                <Link to='/'>
                    <img src={Images.LOGO} alt="Logo" className='pe-4'></img>
                </Link>
                <SearchBox />
            </div>
            <div className="d-flex justify-content-end">
                <Button onClick={handleClickAddButton}>
                    <i className="bi bi-plus-lg"></i>
                </Button>
                <div className='position-relative'>
                    <Button onClick={() => setShowProductivity(!showProductivity)}>
                        <i class="bi bi-graph-up-arrow"></i>
                        <ProductivityQuantity>3/5</ProductivityQuantity>
                    </Button>
                    {showProductivity && <Productivity />}
                </div>
                <Avartar></Avartar>
            </div>
        </Wrapper>
    )
}

export default Header;