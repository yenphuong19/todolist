import { getDateContent } from 'services/todo';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
`;


function TaskCompleted ({ task }) {
    return (
        <Wrapper>
            <i class="bi bi-calendar-check-fill" style={{color: '#32C200', fontSize: '2rem', paddingRight: '10px'}}></i>
            <div className='d-flex flex-column'>
                <span>
                    You completed a task: <span style={{fontWeight: '500'}}>{task.name}</span>
                </span>
                <span style={{fontSize: '1.2rem', color: '#999'}}>
                    {getDateContent(task.dateCompleted).value}
                </span>
            </div>
        </Wrapper>
    )
}

export default TaskCompleted;