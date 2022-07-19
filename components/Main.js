import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
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
      <section className="w-60 h-60 bg-blue-200 shadow-md cursor-pointer transition-all hover:bg-blue-300">
        <p className="text-4xl text-center leading-[240px]">+</p>
      </section>
      {todos.map((todo) => {
        return <Todo props={todo} />;
      })}
    </main>
  );
};

export default Main;
