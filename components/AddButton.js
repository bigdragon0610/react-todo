import { addDoc } from "firebase/firestore";
import { useRef } from "react";

const AddButton = ({ todosCollectionRef, setTodos }) => {
  const titleRef = useRef();
  const detailRef = useRef();

  const createTodo = async (e) => {
    const title = titleRef.current.value;
    const detail = detailRef.current.value;
    const created_at = Date();
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      const docRef = await addDoc(todosCollectionRef, {
        title: title,
        detail: detail,
        created_at: created_at,
      });

      setTodos((prevTodos) => {
        return [
          {
            title: title,
            detail: detail,
            created_at: created_at,
            id: docRef.id,
          },
          ...prevTodos,
        ];
      });

      titleRef.current.value = "";
      detailRef.current.value = "";
    }
  };

  return (
    <section className="w-60 h-60 bg-blue-200 shadow-md transition-all hover:bg-blue-300 p-3">
      <input
        type="text"
        name="title"
        placeholder="title..."
        className="bg-transparent font-bold text-xl w-full outline-0 mb-2 h-6"
        ref={titleRef}
        onKeyDown={(e) => createTodo(e)}
      />
      <textarea
        name="detail"
        placeholder="detail..."
        className="bg-transparent w-full h-40 resize-none outline-0 block"
        ref={detailRef}
        onKeyDown={(e) => createTodo(e)}
      />
    </section>
  );
};

export default AddButton;
