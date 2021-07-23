import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decAction, incAction, incCustomAction, resetAction,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
    incCustomActionTwo} from "./redux/action-creators";

function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => counter)

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{counter1}</h1>

            <div>
                <button onClick={() => dispatch(incAction())}>INC</button>
                <button onClick={() => dispatch(decAction())}>DEC</button>
                <button onClick={() => dispatch(resetAction())}>RESET</button>
                <button onClick={() => dispatch(incCustomAction(10))}>INC_CUSTOM</button>
            </div>
            <hr/>
            <h1>{counter2}</h1>
            <div>
                <button onClick={() => dispatch(incActionTwo())}>INC</button>
                <button onClick={() => dispatch(decActionTwo())}>DEC</button>
                <button onClick={() => dispatch(resetActionTwo())}>RESET</button>
                <button onClick={() => dispatch(incCustomActionTwo(10))}>INC_CUSTOM</button>
            </div>

        </div>
    );
}

export default App;
