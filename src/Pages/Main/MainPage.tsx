import { useState } from 'react';
import {TodoForm} from '../TodoForm/TodoForm.tsx';
import Item from '../../components/Item/Item.tsx';
import { Container } from './styles.ts';
import taskImg from '../../assets/task.png'

interface Todo {
  id: number;
  text: string;
  completed: boolean;

}

function MainPage(){
  const [todos, setTodos] = useState<Todo[]>([]);

  function calcID(){
    const id = todos.length + 1;
    return id;
   }




  const addTodo = (newTodo: string) => {
    setTodos([...todos, { id: calcID(), text: newTodo, completed: false }]);
  };



  const toggleTask = (id: number) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((item)=> item.id === id)
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTask = (id: number) => {
    const newTodos = [...todos]
    const removeEl = newTodos.find((item) => item.id === id)

    setTodos(()=> newTodos.filter((item) => item !== removeEl));
  };


  return (
    <Container>
      <div className='formDiv'>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />

      </div>

      <div className='showDiv'>

      {todos.length?
        todos.map((item)=> (

          <Item todo={item} toggleTask={toggleTask} removeTask={removeTask} />

        ))
        :
        <img src={taskImg}></img>
        }



      </div>
    </Container>
  );
}

export default MainPage;
