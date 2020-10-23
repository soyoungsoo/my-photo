import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, complete, complete2} from '../../action/todo';
import Todo from '../../component/todolist/TODO';

function TODOList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const onClick = data => {
        dispatch(complete(data));
    };

    return <ul>
               {todos.map(todo =>
                   <Todo
                       key={todo.id}
                       onClick={onClick}
                       {...todo}
                   />
                )}
             </ul>;
}

export default TODOList;
