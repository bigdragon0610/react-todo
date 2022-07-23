import { deleteDoc, doc } from "firebase/firestore";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = ({ todo, todosCollectionRef, setTodos }) => {
  const deleteTodo = () => {
    deleteDoc(doc(todosCollectionRef, todo.id));
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
    });
  };

  return (
    <section className="w-60 h-60 bg-blue-50 py-2 px-3 shadow-md">
      <h2 className="font-bold text-xl h-8 box-border overflow-scroll">
        {todo.title}
      </h2>
      <p className="whitespace-pre-wrap overflow-scroll h-40 mb-2">
        {todo.detail}
      </p>
      <div className="w-full flex">
        <button
          className="cursor-pointer ml-auto my-auto h-6"
          onClick={deleteTodo}
        >
          <MdOutlineDeleteOutline className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Todo;
