import { useReducer } from "react";
import "./App.css";

const initialData = { name: "Ali Hassan", age: 28, startCounter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCounter: action.newValue };
    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className="App">
      <h2>My name is {allData.name}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "ELRAYEK ♣" });
        }}
      >
        Change name
      </button>

      <h2 className="mt">My Age is {allData.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: 33 });
        }}
      >
        Change age
      </button>

      <br />
      <button
        className="mt"
        onClick={() => {
          dispatch({ type: "INCREASE", newValue: allData.startCounter + 1 });
        }}
      >
        COUNTER {allData.startCounter}
      </button>
    </div>
  );
}

export default App;
