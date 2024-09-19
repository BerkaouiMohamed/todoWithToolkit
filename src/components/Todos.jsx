import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "../redux/todosSlice";
import { useEffect, useState } from "react";
function Todos() {
  const [search, setSearch] = useState("all");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState(todos);

  useEffect(() => {
    if (search === "all") {
      setFilter(todos);
    } else if (search === "done") {
      setFilter(todos.filter((todo) => todo.status));
    } else if (search === "pending") {
      setFilter(todos.filter((todo) => !todo.status));
    }
  }, [search, todos]);

 var a=filter instanceof Object
  return (
    <div>
      <select onChange={(e) => setSearch(e.target.value)}>
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="pending">pending</option>
      </select>

      <div>
     {!a?filter: filter.length? filter.map((todo, i) => (
          <div
            key={i}
            style={{ backgroundColor: todo.status ? "green" : "red" }}
          >
            <h1>{todo.todo} </h1>
            <p>{todo.status ? "done" : "pending"}</p>
            <button onClick={() => dispatch(todosActions.asyncUpdateTodos({id:todo.id,body:todo}))}>
              {todo.status ? "set to pending" : "set to done"}
            </button>
            <button onClick={() => dispatch(todosActions.deleteTodo(todo))}>
              delete
            </button>
          </div>
        )):"loading"} 
      </div>
    </div>
  );
}

export default Todos;
