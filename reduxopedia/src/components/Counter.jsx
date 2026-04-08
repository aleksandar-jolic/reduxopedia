import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../redux/slice/counterSlice";

function Counter() {
    const dispatcher = useDispatch();

    const [multiplier, setMultiplier] = useState(0);

    return ( 
        <div className="m-4 rounded border text-center">
            <h1 className="text-warning pt-3">Counter App</h1>
            <hr />
            <div className="pb-2">
                <span className="badge bg-secondary fs-1 p-3 mb-3">Current Count: {useSelector((state) => state.counterStore.count)}</span>
                <div>
                    <button className="btn btn-success m-2" onClick={() => dispatcher(increment())}>Increment by 1</button>
                    <button className="btn btn-danger m-2" onClick={() => dispatcher(decrement())}>Decrement by 1</button>
                </div>
                    <input type="number" onChange={(e) => setMultiplier(Number(e.target.value))} className="form-control w-25 m-auto" placeholder="Enter amount to increment" id="incrementAmount" />
                <div>
                    <button className="btn btn-success m-2" onClick={() => dispatcher(incrementByAmount(multiplier))}>Increment</button>
                    <button className="btn btn-danger m-2" onClick={() => dispatcher(decrementByAmount(multiplier))}>Decrement</button>
                </div>
            </div>
        </div>
     );
}

export default Counter;