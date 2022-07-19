import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";

export default function Home() {
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
    <>
      {todos.map((todo) => {
        return (
          <ul>
            <li>{todo.title}</li>
            <li>{todo.detail}</li>
          </ul>
        );
      })}
    </>
  );
}
