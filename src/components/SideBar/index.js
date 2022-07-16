import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MODE_NONE } from 'constants/mode';
import styled from 'styled-components';
import { Context } from 'services/Context';
import routes from 'services/routes';

const Wrapper = styled.ul`
    padding: 0 30px;

    li {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        border-radius: 6px;
        font-size: 1.5rem;
        font-weight: 500;
        background-color: #fff;
        margin-bottom: 16px;

        a {
            flex: 1;
            color: #333;
            text-decoration: none;
        }
       
        &:hover {
            background-color: #f0f2f5;
            cursor: pointer;
        }

    }

    @media (max-width: 740px) {
        padding: 0;
        margin-bottom: 20px;
        display: flex;

        li {
            width: 30%;
            margin: auto;
        }
    }
    
`
function SideBar () {
    const [props] = useContext(Context)

    const SIDEBAR_LIST = [
        {
            title: 'All',
            path: routes.all,
            icon: <i class="bi bi-house-door"></i>
        },
        {
            title: 'Today',
            path: routes.home,
            quantityColor: 'blue',
            icon: <i class="bi bi-calendar-date"></i>
        },
        {
            title: 'Scheduled',
            path: routes.scheduled,
            quantityColor: '#d1453b',
            icon: <i class="bi bi-calendar2-week"></i>
        }
    ]
    
    return (
        <Wrapper className='col-md-3'>
            {
                SIDEBAR_LIST.map( (item, index) => (
                    <li key={index} onClick={() => props.setMode(MODE_NONE)}>
                        <Link to={item.path}>
                            <span style={{paddingRight: '8px', fontSize: '1.8rem'}}>{item.icon}</span>
                            {item.title}
                        </Link>
                        <span style={{color: `${item.quantityColor || '#333'}`, fontSize: '2.2rem', fontWeight: '500'}}>
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
                        </span>
                    </li>
                ))
            }
        </Wrapper>
    )
}

export default SideBar;