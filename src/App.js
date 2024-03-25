import {useState} from 'react'
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body{
background-color: bisque;
width: 100%;
height: 100vh;
box-sizing: border-box;
}
`
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
  Todos.splice(index,1)
  setTodos([...Todos])
  console.log(Todos)
}

  return (
  <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoInsert insertValueHandler = {insertValueHandler} addTodo = {addTodo} insertValue={insertValue} />
      <TodoList Todos = {Todos} setTodos = {setTodos} deleteTodo = {deleteTodo}/>
    </TodoTemplate>
  </>
  );
}

export default App;
