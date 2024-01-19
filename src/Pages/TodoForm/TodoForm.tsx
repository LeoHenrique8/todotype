import { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from './styles';
interface TodoFormProps {
  addTodo: (newTodo: string) => void;
}



export function TodoForm ({ addTodo }:TodoFormProps)  {
  const [newTodo, setNewTodo] = useState<string>('');






  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };



  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={
          (event: ChangeEvent<HTMLInputElement>) => {
            setNewTodo(event.target.value);
          }
        }
      />
      <button type="submit">+</button>
    </form>
    </Container>
  );
}
