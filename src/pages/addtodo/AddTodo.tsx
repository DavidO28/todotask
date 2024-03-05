import { useState } from 'react';
import { useTodoContext } from '../../components/TodoContext/TodoContext';
import './AddTodo.scss';
import HeaderNav from '../../components/HeaderNav/HeaderNav';

const AddTodo: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText.trim());
      setTodoText('');
    }else if(todoText.trim() === ''){
      alert("Input field is empty");
    }
  };

  return (
    <div>
      <HeaderNav/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
