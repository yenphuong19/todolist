import { memo, useState, useContext, useRef } from 'react';
import { MODE_NONE, MODE_SEARCH } from 'constants/mode'
import { Context } from 'services/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from 'services/routes';

const Wrapper = styled.form`
    position: relative;
    padding: 4px 10px;
    width: 250px;
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: #121212;

    &:focus-within {
        border: 1px solid #d75b39;
    }
`;

const Input = styled.input`
    font-size: 1.3rem;
    border-color: transparent;
    box-shadow: none;
    padding-left: 10px;
    caret-color: #fff;
    color: #fff;

    &:focus-visible {
        outline: none;
    }
`

const Button = styled.button`
    color: #fff;
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
`;

function SearchBox() {
    const [props] = useContext(Context)

    const [searchValue, setSearchValue] = useState('')

    const inputRef = useRef()
    const linkRef = useRef()

    const handleChangeSearchValue = e => {
        // console.log('handleChangeSearchValue')
        props.setMode(MODE_SEARCH); 
        setSearchValue(e.target.value)
    }
    const handleSubmitSearch = e => {
        e.preventDefault()
        // console.log('handleSubmitSearch')
        if (searchValue.trim()) { 
            props.setQuery(searchValue.trim());
            linkRef.current.click();
            setSearchValue('');
        };
    }
    const handleDeleteSearchValue = () => {
        // console.log('handleDeleteSearchValue')
        setSearchValue('');
        inputRef.current.focus()
    }

    return (
        <Wrapper 
            className="d-flex align-items-center"
            onSubmit={handleSubmitSearch}
        >
            {/* {console.log('render')} */}
            <i className="bi bi-search" style={{color: '#fff', fontSize: '1.6rem'}}></i>
            <Input 
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={props.mode === MODE_NONE ? '' : searchValue}
                onChange={handleChangeSearchValue}
            />
            {
                !!searchValue 
                &&
                <Button>
                    <i className="bi bi-x-lg" onClick={handleDeleteSearchValue}></i>
                </Button>
            }
            <Link to={routes.search} ref={linkRef}></Link>
        </Wrapper>
    )
}

export default memo(SearchBox);