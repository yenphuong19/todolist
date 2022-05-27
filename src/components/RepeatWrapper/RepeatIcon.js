import React, { useContext } from "react";
import { Context } from "../../services/Context";

function RepeatIcon () {
    const [props] = useContext(Context)
    return (
        <button 
            className="btn btn-repeat"
            onClick={() => {
                props.setShowRepeat(!props.showRepeat);
                // Khi click vào repeatList >> ẩn picker khác
                props.setShowDayPicker(false)
                props.setShowTimePicker(false)
            }}
        ></button>
    )
}

export default RepeatIcon;