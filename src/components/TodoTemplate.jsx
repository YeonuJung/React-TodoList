import React from 'react';
import styled from 'styled-components'

const TodoTemplateDiv = styled.div`
        width: 500px;
        margin: 30px auto;
        border-radius: 5px;
        background-color: white;
    `
    const TodoTitle = styled.div`
        width: 100%;
        height: 50px;
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: cadetblue;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

const TodoTemplate = (props) => {
    
    return (
        <TodoTemplateDiv>
            <TodoTitle>Todo리스트</TodoTitle>
            <div>{props.children}</div>
        </TodoTemplateDiv>
    );
};

export default TodoTemplate;