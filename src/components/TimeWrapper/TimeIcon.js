import React, { useContext } from "react";
import { Context } from "../../services/Context";

function TimeIcon () {
    const [props] = useContext(Context)
    return (
        <button 
            className="btn btn-time"
            onClick={() => {
                props.setShowTimePicker(!props.showTimePicker)
                props.setShowDayPicker(false)
                props.setShowRepeat(false)
            }}
        ></button>
    )
}

export default TimeIcon;