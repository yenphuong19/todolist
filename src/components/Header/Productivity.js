import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProductivity = styled.div`
    border-radius: 6px;
    right: 0;
    top: 100%;
    border: 1px solid #ddd;
    width: 300px;
    padding: 20px 10px;
    font-size: 1.3rem;

    .header {
        font-weight: 600;
    }

    .content {
        width: 100%;
        padding: 16px 0;
        font-weight: 400;

        .col {
            padding: 0;
            text-align: center;
            border-bottom: 1px solid #ccc;
        }
    }

    .section {
        text-align: center;
        position: relative;

        .bar-container {
            position: absolute;
            background-color: #ccc;
            border-radius: 6px;
            width: 160px;
            height: 5px;
            content: '';

            .bar {
                position: absolute;
                left: 0;
                width: 50px;
                height: 5px;
                background-color: #333;
                border-radius: 6px;
                content: '';
            }

            .percent {
                position: absolute;
				top: -19px;
				right: 0;
                font-size: 1.1rem;
            }
        }
    }
`;

function Productivity () {
    return (
        <StyledProductivity className='position-absolute bg-white'>
            <div className='header'>
                Your Productivity
            </div>
            <div className='content row m-0'>
                <div className='col'>Daily</div>
                <div className='col'>Weekly</div>
                <div className='col'>All</div>
            </div>
            <div className='section'>
                <span className='bar-container'>
                    <span className='bar'></span>
                    <span className='percent'>90%</span>
                </span>
                Daily goal: 3/5 tasks
            </div>
            <Link to='/productivity/completed'>View all completed tasks</Link>
        </StyledProductivity>
    )
}

export default Productivity;