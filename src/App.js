import {useState} from 'react'
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import GlobalStyle from './style/globalstyle'; 
import styled from 'styled-components';
// 하나씩 파일 따로 빼서 import해와서 쓰기, 처음부터 빼놓지 말고 나중에 정리하기

function App() {
const [Todos, setTodos] = useState([])
const [insertValue, setInsertValue] = useState('')
const addTodo = () => {
  setTodos((prev) => {return [...prev, insertValue]})
  setInsertValue('')
  //insertValue를 초기화 해주지 않으면 추가한 값이 input창에 그대로 떠있음
}

const insertValueHandler = (inputValue) => {
  return setInsertValue(inputValue)
}

const deleteTodo = (index) => {
  const CopyTodos = [...Todos]
  CopyTodos.splice(index,1)
  setTodos(CopyTodos)
  console.log(Todos)
}

  return (
  <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoTitle>Todo리스트</TodoTitle>
      <TodoInsert insertValueHandler = {insertValueHandler} addTodo = {addTodo}/>
      <TodoList Todos = {Todos} setTodos = {setTodos} deleteTodo = {deleteTodo}/>
    </TodoTemplate>
  </>
  );
}

export default App;

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