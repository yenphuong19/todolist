import React from 'react';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import ButtonFilter from '../../components/Buttons/ButtonFilter';
import ButtonSearch from '../../components/Buttons/ButtonSearch';
import './Header.scss';

function Header () {
    return (
        <header>
            <div className="header__left">
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