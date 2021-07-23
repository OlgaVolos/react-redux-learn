import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {
    // const store = useSelector((store)=> {
    //   console.log(store);
    //   return store
    // })
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> dispatch({type:  'INC'})}>INC</button>
            <button onClick={()=> dispatch({type:  'DEC'})}>DEC</button>
            <button onClick={()=> dispatch({type:  'RESET'})}>RESET</button>
            <button onClick={()=> dispatch({type:  'INC_CUSTOM', payload: 10})}>INC_CUSTOM</button>
        </div>
    );
}

export default App;
