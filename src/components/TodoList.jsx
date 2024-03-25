import React from 'react';
import styled from 'styled-components';
import { TiDelete } from "react-icons/ti";

const TodoListItem = styled.div`
    background-color: aquamarine;
    height: 50px;
    padding: 0 5px;
    font-weight: 600;

    display: flex;
    align-items: center;
    column-gap: 5px;
    input{
        width: 1rem;
        height: 1rem;
    }
    input:checked + span{
        color: grey;
        text-decoration: line-through;
    }
    span{
        flex-grow: 1;
    }
    
` 
const TodoListItem2 = styled(TodoListItem)`
    background-color: deepskyblue;
`
const TodoList = (props) => {
const {Todos, deleteTodo} = props

    return (
        <div>
            {Todos.map((todo, index) => {
                return index % 2 !== 0 ? <TodoListItem><input type='checkbox'/><span>{todo}</span><TiDelete onClick ={() => {return deleteTodo(index)}}/></TodoListItem> : <TodoListItem2><input type='checkbox'/><span>{todo}</span><TiDelete onClick={() => {return deleteTodo(index)}}/></TodoListItem2> 
            })}
        </div>
    );
};

export default TodoList;