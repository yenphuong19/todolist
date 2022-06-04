import React from 'react';
import ButtonAdd from '../../components/Buttons/ButtonAdd';
import ButtonFilter from '../../components/Buttons/ButtonFilter';
import SearchBox from '../../components/SearchBox';
// import ButtonSearch from '../../components/Buttons/ButtonSearch';
import './Header.scss';

function Header () {
    return (
        <header>
            <div className="header__left">
                <h1>2</h1>
                {/* <ButtonSearch /> */}
                <SearchBox />
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