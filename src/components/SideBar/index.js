import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MODE_NONE } from 'constants/mode';
import styled from 'styled-components';
import { Context } from 'services/Context';
import routes from 'services/routes';

const Wrapper = styled.ul`
    padding: 0 50px;
    height: 100vh;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 0 10px;
        margin-bottom: 16px;
        border-radius: 6px;

        font-size: 1.5rem;
        font-weight: 500;

        background-color: #fff;

        a {
            flex: 1;
            color: #333;
            text-decoration: none;

            span {
                padding-right: 6px;
                font-size: 1.6rem;
            }
        }
       
        &:hover {
            background-color: #f5f5f5;
            cursor: pointer;
        }

    }

    @media (max-width: 840px) {
        padding: 0;
        margin-bottom: 20px;
        
        .hide {
            display: none;
        }
    }
    
`

const CountItem = styled.span`
    background-color: #eceff1;
    border-radius: 6px;
    padding: 2px 8px;
    color: ${props => props.color}
`;

const SIDEBAR_LIST = [
    {
        title: 'All',
        path: routes.all,
        icon: <i className="bi bi-house-door"></i>
    },
    {
        title: 'Today',
        path: routes.home,
        quantityColor: 'blue',
        icon: <i className="bi bi-calendar-date"></i>
    },
    {
        title: 'Scheduled',
        path: routes.scheduled,
        quantityColor: '#d1453b',
        icon: <i className="bi bi-calendar2-week"></i>
    }
]

function SideBar () {
    const [props] = useContext(Context)

    return (
        <Wrapper className='col-3'>
            {
                SIDEBAR_LIST.map( (item, index) => (
                    <li key={index} onClick={() => props.setMode(MODE_NONE)}>
                        <Link to={item.path}>
                            <span className='hide'>{item.icon}</span>
                            {item.title}
                        </Link>
                        <CountItem color={item.quantityColor || '#333'}>
                            {props.state.tasks.all.filter(task => {
                                switch (item.title) {
                                    case 'Today':
                                        return task.date.toDateString() === new Date().toDateString();
                                    case 'Scheduled':
                                        return task.date > new Date();
                                    default:
                                        return task.date
                                }
                            }).length}
                        </CountItem>
                    </li>
                ))
            }
        </Wrapper>
    )
}

export default SideBar;