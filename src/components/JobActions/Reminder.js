import React, { useState } from 'react';

function Reminder () {
    const [reminder, setReminder] = useState(false)
    return (
        <button 
            className={`btn btn-reminder ${reminder ? 'active' : ''}`}
            onClick={() => setReminder(!reminder)}
        ></button>
    )
}

export default Reminder;