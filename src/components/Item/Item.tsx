import { Container } from "./styles";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

function Item({ todo, toggleTask, removeTask }: TodoItemProps) {
  const { text, id, completed } = todo;

  return (
    <div>
      <Container key={id}>
        <p
          className={completed ? 'checked' : ''}
          onClick={()=> toggleTask(id) }

        >
          {text}
        </p>
        <div onClick={() => removeTask(id)}>
          <DeleteForeverIcon
          />
        </div>
      </Container>
    </div>
  );
}

export default Item;
