import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { changeRepeat } from '../../services/reducer';
import { repeatList } from '../../services/repeat'


function RepeatSelector () {
    const [props] = useContext(Context)
    const [job] = useContext(RenderContext)
    
    return (
        <div>
            {
                props.showRepeat 

                && 
                
                <ul className="repeat__list">
                    {repeatList.map((repeat, index) => 
                        <li 
                            key={index}
                            onClick={() => {
                                props.dispatch(changeRepeat(job, repeat));
                                setTimeout(() => props.setShowRepeat(!props.showRepeat), 100);
                            }}
                        >{repeat}</li>
                    )}
                </ul>
            }
        </div>
    )
}

export default RepeatSelector;