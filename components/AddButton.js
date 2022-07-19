import { doc, setDoc } from "firebase/firestore";

const AddButton = ({ todosCollectionRef }) => {
  const createTodo = async () => {
    await setDoc(doc(todosCollectionRef), {
      title: "追加",
      detail: "追加ボタンからの追加",
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
