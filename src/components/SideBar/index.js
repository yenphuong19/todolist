import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MENU } from 'constants/index';
import styled from 'styled-components';
import { Context } from 'services/Context';

const StyledSideBar = styled.ul`
    padding: 80px 50px;
        
    li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-radius: 6px;
        font-size: 1.5rem;

        a {
            color: #333;
            text-decoration: none;
        }
       
        &:hover {
            background-color: #f0f2f5;
            cursor: pointer;
        }

    }

    @media (max-width: 740px) {
        padding: 80px 0;
    }
    
`
function SideBar () {
    const [props] = useContext(Context)
    return (
        <StyledSideBar className='col-3'>
            {
                MENU.map( (item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <span style={{paddingRight: '8px'}}>{item.icon}</span>
                            {item.title}
                        </Link>
                        <span style={{color: '#999', fontSize: '1.2rem'}}>
                            {props.state.tasks.all.filter(task => {
                                switch (item.title) {
                                    case 'Today':
                                        return task.date === new Date();
                                    case 'Overdue':
                                        return task.date < new Date();
                                    case 'Upcoming':
                                        return task.date > new Date();
                                    default:
                                        return task.date
                                }
                            }).length}
                        </span>
                    </li>
                ))
            }
        </StyledSideBar>
    )
}

export default SideBar;