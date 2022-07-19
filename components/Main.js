import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import AddButton from "./AddButton";
import Todo from "./Todo";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTodos();
  }, []);
  return (
    <main className="flex flex-wrap gap-5 p-5">
      <AddButton todosCollectionRef={todosCollectionRef} />
      {todos.map((todo) => {
        return <Todo props={todo} />;
      })}
    </main>
  );
};

export default Main;
