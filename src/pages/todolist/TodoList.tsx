import { useState } from 'react';
import { useTodoContext } from '../../components/TodoContext/TodoContext';
import Modal from '../../components/Modal/Modal';
import HeaderNav from '../../components/HeaderNav/HeaderNav';

const TodoList: React.FC = () => {
  const { todos, deleteTodo, renameTodo } = useTodoContext();
  const [selectedTodo, setSelectedTodo] = useState<number | null>(null);
  const [renameText, setRenameText] = useState('');
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setSelectedTodo(id);
  };

  const handleConfirmDelete = () => {
    if (selectedTodo !== null) {
      deleteTodo(selectedTodo);
      setSelectedTodo(null);
    }
  };

  const handleRename = (id: number, text: string) => {
    setSelectedTodo(id);
    setRenameText(text);
    setIsRenameModalOpen(true);
  };

  const handleConfirmRename = () => {
    if (selectedTodo !== null && renameText.trim() !== '') {
      renameTodo(selectedTodo, renameText.trim());
      setSelectedTodo(null);
      setIsRenameModalOpen(false);
    }
  };

  const handleCloseModals = () => {
    setSelectedTodo(null);
    setIsRenameModalOpen(false);
  };

  return (
    <div>
      <HeaderNav/>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleRename(todo.id, todo.text)}>Rename</button>
        </div>
      ))}

      <Modal isOpen={selectedTodo !== null} onClose={handleCloseModals}>
        <p>Are you sure you want to delete this todo?</p>
        <button onClick={handleConfirmDelete}>Delete</button>
      </Modal>

      <Modal isOpen={isRenameModalOpen} onClose={handleCloseModals}>
        <p>Rename Todo:</p>
        <input type="text" value={renameText} onChange={e => setRenameText(e.target.value)} />
        <button onClick={handleConfirmRename}>Confirm</button>
      </Modal>
    </div>
  );
};

export default TodoList;
