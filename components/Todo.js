import { deleteDoc, doc } from "firebase/firestore";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = ({ todo, todosCollectionRef, setTodos }) => {
  const deleteTodo = () => {
    if (window.confirm("Delete?")) {
      deleteDoc(doc(todosCollectionRef, todo.id));
      setTodos((prevTodos) => {
        return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
      });
    }
  };

  return (
    <section className="w-60 h-60 bg-blue-50 px-3 pt-3 shadow-md">
      <div className="h-3/4">
        <h2 className="font-bold text-xl mb-2">{todo.title}</h2>
        <p>{todo.detail}</p>
      </div>
      <div className="h-1/4 w-full flex">
        <button className="cursor-pointer ml-auto my-auto" onClick={deleteTodo}>
          <MdOutlineDeleteOutline className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Todo;
