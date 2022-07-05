import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import { Images } from 'constants/index';
import styled from 'styled-components';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';

const StyledHeader = styled.header`
    border-bottom: 0.5px solid #e6e6e6;
    padding: 10px 60px;
    position: fixed;
    z-index: 2;
    width: 100%;

    .header-right {

        button {
            margin-left: 10px;
            font-size: 1.5rem;
            background-color: #d75b39;
            color: #fff;
            border-radius: 6px;
            padding: 0 6px;

            .add {
                padding-left: 4px;
            }

            &:hover {
                opacity: 0.7;
            }
        }

        .avartar {
            border-radius: 50%;
            border: 1px solid #d75b39;
            height: 100%;
            line-height: 33.5px;
            display: block;
            text-align: center;
            margin-left: 16px;
            font-size: 1.5rem;
            color: #d75b39;
        }
    }

    @media (max-width: 740px) {
        padding: 14px 10px;

        .header-right {
            button {
                border-radius: 50%;
    
                .add {
                    display: none;
                }
            }
        }
    }
`;

function Header () {
    const [props] = useContext(Context)
    const handleClickAddButton = () => {
        props.setShowModal(true)
        props.setMode(MODE_CREATE)
    }
    return (
        <StyledHeader className='d-flex justify-content-between bg-white'>
            <div className="d-flex align-items-center">
                <Link to='/'>
                    <img src={Images.LOGO} alt="Logo" className='pe-5'></img>
                </Link>
                <SearchBox />
            </div>
            <div className="header-right d-flex align-items-center justify-content-end">
                <button 
                    className="d-flex align-items-center"
                    onClick={handleClickAddButton}
                >
                    <i class="bi bi-plus" style={{fontSize: '2rem'}}></i>
                    <span className='add'>Add task</span>
                </button>
                <div className="avartar">A</div>
            </div>
        </StyledHeader>
    )
}

export default Header;