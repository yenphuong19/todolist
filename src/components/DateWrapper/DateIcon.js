import React, { useContext } from "react";
import { Context } from '../../services/Context';

function DateIcon () {
    const [props] = useContext(Context)
    const handleClick = () => {
        props.setShowDayPicker(!props.showDayPicker);
        // Khi click vào daypicker >> ẩn picker còn lại
        props.setShowRepeat(false)
        props.setShowTimePicker(false)
    }

    return (
        <button 
            className="btn btn-date"
            onClick={handleClick}
        ></button>
    )
}

export default DateIcon;