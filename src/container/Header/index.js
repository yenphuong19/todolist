import React from 'react';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import ButtonFilter from '../../components/Buttons/ButtonFilter';
import ButtonSearch from '../../components/Buttons/ButtonSearch';
import ModalAdd from '../../components/ModalAdd';
import './Header.scss';

function Header () {
    return (
        <header>
            <div className="header__left">
                {/* <h1>To do</h1> */}
                <ButtonSearch />
            </div>
            <div className="header__right">
                <ButtonAdd />
                <ButtonFilter />
                <button className="btn btn-noti"></button>
                <div className="avartar">A</div>
            </div>
        </header>
    )
}

export default Header;