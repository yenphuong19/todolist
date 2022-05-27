import React, { useContext } from "react";
import { RenderContext } from "../../services/Context";

function RepeatContent () {
    const [job, index] = useContext(RenderContext)
    return (
        <span>{job.repeat}</span>
    )
}

export default RepeatContent;