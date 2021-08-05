import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import CreateTodoForm from "./redux/components/CreateTodoForm";
import Todos from "./redux/components/Todos";
import {addTodos, pushTodos, setLoadingFalse, setLoadingTrue} from "./redux/action-creators";


function App() {
    // const store = useSelector(store => store);
    const {todos, todosLoading } = useSelector(store => store.todosReducer);
    const dispatch = useDispatch()
    // console.log(store);


    const fetchTodos = async () => {
        try {

            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos', {
                method: "GET"
            });
            const data = await response.json();
            console.log(data, 'data');
            dispatch(addTodos(data))
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
    };

    useEffect(() => {
        fetchTodos()
    }, [])

    const onTodoCreate = async (title, description) => {
        if(!title || !description) return;

        const response = await fetch('http://localhost:8888/create-todo', {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        dispatch(pushTodos(data))


        // fetchTodos()
    }
    return (
        <div>
            <CreateTodoForm onSubmit = {onTodoCreate}/>
           <Todos todos={todos} isLoading={todosLoading}/>


        </div>
    );
}

export default App;
