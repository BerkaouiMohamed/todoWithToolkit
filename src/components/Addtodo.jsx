import { useRef } from "react"
import { useDispatch } from "react-redux"
import { todosActions } from "../redux/todosSlice" 
function Addtodo() {
    const ref=useRef()
    const dispatch=useDispatch()
    function handleAddTodo(){
        dispatch(todosActions.addTodo(ref.current.value))
    }
  return (
    <div>
        <input type="text"  ref={ref} />
        <button onClick={handleAddTodo}>submit</button>
    </div>
  )
}

export default Addtodo