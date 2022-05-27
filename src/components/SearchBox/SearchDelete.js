import React, { memo } from 'react';

function SearchDelete ({handleDeleteValue}) {
    return (
        <button
            className="search_delete"
            onClick={handleDeleteValue}
        ></button>
    )
}

export default memo(SearchDelete);