import React, { useEffect, useRef } from 'react';

const ShowWord = (props) => {
    const ref = useRef();
    useEffect(() => ref.current.focus());

    return(
        <button ref={ref} onClick={props.show} className="card-btn">проверить</button>
    );
}

export default ShowWord;