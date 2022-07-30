import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = ({ todo, todosCollectionRef, setTodos }) => {
  const [todoState, setTodoState] = useState({
    title: "",
    detail: "",
  });
  const titleRef = useRef();
  const detailRef = useRef();

  const updateTodoState = () => {
    setTodoState({
      title: titleRef.current.value,
      detail: detailRef.current.value,
    });
  };

  const updateTodo = () => {
    const currentTitle = titleRef.current.value;
    const currentDetail = detailRef.current.value;
    if (
      currentTitle !== todoState.title ||
      currentDetail !== todoState.detail
    ) {
      updateDoc(doc(todosCollectionRef, todo.id), {
        title: currentTitle,
        detail: currentDetail,
      });
    }
  };

  const deleteTodo = () => {
    deleteDoc(doc(todosCollectionRef, todo.id));
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
    });
  };

  return (
    <>
      <section className="w-60 h-60 bg-blue-50 p-3 shadow-md box-border">
        <input
          className="box-border overflow-scroll bg-transparent font-bold text-xl w-full outline-0 mb-2 h-6"
          defaultValue={todo.title}
          onFocus={updateTodoState}
          onBlur={updateTodo}
          ref={titleRef}
        ></input>
        <textarea
          className="whitespace-pre-wrap overflow-scroll h-40 bg-transparent w-full resize-none box-border outline-0 block"
          defaultValue={todo.detail}
          onFocus={updateTodoState}
          onBlur={updateTodo}
          ref={detailRef}
        ></textarea>
        <div className="w-full flex">
          <button
            className="cursor-pointer ml-auto my-auto h-6"
            onClick={deleteTodo}
          >
            <MdOutlineDeleteOutline className="text-2xl" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Todo;
