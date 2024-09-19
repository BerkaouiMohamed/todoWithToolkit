
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import { useDispatch } from "react-redux";
import { todosActions } from "./redux/todosSlice";



function App() {
const dispatch=useDispatch()
dispatch(todosActions.fetchTodos())

  return (
    <div className="App">

        <Addtodo />
        <Todos />

    </div>
  );
}

export default App;
