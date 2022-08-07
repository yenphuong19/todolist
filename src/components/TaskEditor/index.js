import { useContext } from 'react';
import DateSelector from './DateSelector';
import RepeatSelector from './RepeatSelector';
import Selector from './Selector';
import { MODE_CREATE, MODE_NONE, LABEL_OPTIONS, PRIORITY_OPTIONS } from "constants/index";
import styled from 'styled-components';
import { Context } from 'services/context/Context';
import Buttons from 'components/Buttons';
import { addTask, editTask, saveAction, setInfo } from 'services/reducer/actions';
import { MODE_CREATE_WITH_MODAL } from 'constants/mode';
import InputValue from './InputValue';
import LabelResult from './LabelResult';
import { Actions } from 'constants/action';

const Wrapper = styled.form`
    border-radius: 6px;
    padding: 10px 16px;
    border: 1px solid #ddd;
    display: ${props => props.show ? 'block' : 'none'}
`;

function TaskEditor ({ task, dateDefault }) {
    const [props] = useContext(Context)

    const handleSubmitTask = () => {
        switch (props.mode) {
            case MODE_CREATE:
            case MODE_CREATE_WITH_MODAL:
                props.dispatch(addTask(task));
                props.dispatch(setInfo({name: 'name', value: ''}));
                props.dispatch(setInfo({name: 'description', value: ''}));
                props.dispatch(setInfo({name: 'repeat', value: 'None'}));
                props.dispatch(setInfo({name: 'priority', value: 'None'}));
                props.dispatch(setInfo({name: 'label', value: 'None'}));
                props.setMode(MODE_NONE)
                props.setShowModal(false)
                props.setShowToast({isShow: true, action: Actions.add})
                setTimeout(() => props.setShowToast({isShow: false}), 2000)
                return true;
            default:
                props.dispatch(editTask(task, false));
                props.dispatch(saveAction())
                props.setMode(MODE_NONE)
                return true;
        }
    }

    return (
        <li>
            <Wrapper 
                className="d-flex flex-column bg-white" 
                show={props.showTaskEditor === dateDefault}
                onKeyDown={e => {if (e.keyCode === 13) handleSubmitTask()}}
            >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <LabelResult task={task}/>
                    <InputValue task={task} inputName='name'/>
                </div>
                <InputValue task={task} inputName='description'/>
                <div className="d-flex justify-content-between info__wrapper">
                    <div className='d-flex'>
                        <DateSelector task={task} dateDefault={dateDefault}/>
                        <RepeatSelector task={task}/>
                    </div>
                    <div className='d-flex' style={{marginRight: '-10px'}}>
                        <Selector task={task} nameSelector='label' optionsSelector={LABEL_OPTIONS} iconClassName='bi bi-bookmark'/>
                        <Selector task={task} nameSelector='priority' optionsSelector={PRIORITY_OPTIONS} iconClassName='bi bi-flag'/>
                    </div>
                </div>
            </Wrapper>
            <Buttons task={task} onSubmit={handleSubmitTask}/>
        </li>
    )
}

export default TaskEditor;
