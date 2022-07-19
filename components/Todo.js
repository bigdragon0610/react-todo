const Todo = ({ props }) => {
  return (
    <section className="w-60 h-60 bg-blue-50 px-3 pt-3 shadow-md">
      <h2 className="font-bold text-xl mb-2">{props.title}</h2>
      <p className="">{props.detail}</p>
    </section>
  );
};

export default Todo;
