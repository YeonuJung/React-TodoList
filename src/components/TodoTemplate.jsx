import React from 'react';
import styled from 'styled-components'

const TodoTemplateDiv = styled.div`
        width: 500px;
        margin: 30px auto;
        border-radius: 5px;
        background-color: white;
        
    `

const TodoTemplate = (props) => {
    
    return (
        <TodoTemplateDiv>
            {props.children}
        </TodoTemplateDiv>
    );
};

export default TodoTemplate;