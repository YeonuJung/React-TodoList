import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlusCircle } from "react-icons/fa";
const TodoInput = styled.input`
    height: 50px;
    border: none;
    flex-grow: 1;
    font-size: 20px;
    margin-right: 5px;
    outline: none;
    `
    const Container = styled.div`
        display: flex;
        align-items: center;
        height: 50px;
        padding-right: 5px;
        padding-left: 5px;
    `
const TodoInsert = ({insertValueHandler, addTodo, insertValue}) => {
    
    const inputValue = (e) => {
       return insertValueHandler(e.target.value)
    }
    return (
        <Container>
            <TodoInput type = 'text' placeholder='오늘 할 일을 적어주세요.' onChange={inputValue} value = {insertValue}></TodoInput><FaPlusCircle onClick={addTodo} />
        </Container>
    );
};

export default TodoInsert;