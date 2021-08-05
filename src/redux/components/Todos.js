import React, {Fragment} from 'react';

const Todos = ({todos, isLoading}) => {
    if(isLoading) return <h1>LOADING...</h1>

    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

export default Todos;
