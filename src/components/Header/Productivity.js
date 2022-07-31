import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'services/Context';
import routes from 'services/routes';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useOnClickOutSide from 'services/hook/useOnClickOutSide';
import { Images } from 'constants';

const Wrapper = styled.div`
    border-radius: 6px;
    right: 0;
    top: 100%;
    border: 1px solid #ddd;
    width: 300px;
    padding: 20px 10px;
    font-size: 1.3rem;

    .header {
        font-weight: 600;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 30px;
            border-bottom: 1px solid #ddd;
            width: 100%;
        }
        
    }
`;

const SectionProgress = styled.div`
    padding: 24px 0;
    text-align: center;
    position: relative;

    .progress {
        width: 100px;
        height: 100px;
        margin: auto;
        background-color: transparent;
        padding-bottom: 10px;
    }

    .count {
        font-weight: 600;
    }

    
`;

function Productivity ({ countTotalCompletedTask, countTodayCompletedTask, percent, setShowProductivity }) {

    const elementRef = useRef()

    useOnClickOutSide(elementRef, () => setShowProductivity(false))
    
    return (
        <Wrapper className='position-absolute bg-white' ref={elementRef}>
            <div className='header'>Your Productivity</div>
            <SectionProgress className='section_progress'>
                <div className='progress'>
                    <CircularProgressbar 
                        value={percent}
                        strokeWidth='5'
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathColor: '#32C200',
                            textSize: '1.4rem',
                            textColor: '#333',
                        })}
                        />
                </div>
                Daily goal: <span className='count'>{countTodayCompletedTask} tasks</span>
            </SectionProgress>
            
            <div className='d-flex justify-content-between'>
                <span>{countTotalCompletedTask} total completed tasks</span>
                <Link 
                    to={routes.completed} 
                    onClick={() => setShowProductivity(false)}
                    style={{textDecoration: 'none', color: '#777'}}
                >
                    <span>View all</span>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Productivity;