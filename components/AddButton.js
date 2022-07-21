import { addDoc } from "firebase/firestore";

const AddButton = ({ todosCollectionRef, id, setTodos }) => {
  const title = `${id + 1}番目`;
  const detail = `${id + 1}番目のTODOです`;
  const created_at = Date();
  const createTodo = async () => {
    const docRef = await addDoc(todosCollectionRef, {
      title: title,
      detail: detail,
      created_at: created_at,
    });
    setTodos((prevTodos) => {
      return [
        { title: title, detail: detail, created_at: created_at, id: docRef.id },
        ...prevTodos,
      ];
    });
  };
  return (
    <button
      className="w-60 h-60 bg-blue-200 shadow-md transition-all hover:bg-blue-300"
      onClick={createTodo}
    >
      <p className="text-4xl text-center leading-[240px]">+</p>
    </button>
  );
};

export default AddButton;
