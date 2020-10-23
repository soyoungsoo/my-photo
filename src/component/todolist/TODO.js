import React from 'react';

function TODO ({id, todo, complete, onClick}) {
    return (
        <li id={id}
            onClick={() => onClick({
                id : id,
                complete : !complete
            })}
            className={!!complete ? 'completed' : ''}
        >{todo}</li>
    );
}

export default TODO;
