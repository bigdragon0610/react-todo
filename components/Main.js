import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import AddButton from "./AddButton";
import Todo from "./Todo";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const todosCollectionRef = collection(db, "todos");

  useEffect(() => {
    const getTodos = async () => {
      const q = query(todosCollectionRef, orderBy("created_at", "desc"));
      const data = await getDocs(q);
      setTodos(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getTodos();
  }, []);
  return (
    <main className="flex flex-wrap mx-auto my-10 gap-5 xl:w-[1280px] lg:w-[1020px] md:w-[760px] w-[520px]">
      <AddButton
        todosCollectionRef={todosCollectionRef}
        id={todos.length}
        setTodos={setTodos}
      />
      {todos.map((todo) => {
        return <Todo props={todo} />;
      })}
    </main>
  );
};

export default Main;
