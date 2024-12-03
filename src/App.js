import "./App.css";
import React, { useReducer } from "react";
import ClassCounter from "./components/usestatehook/ClassCounter";
import HookCounter from "./components/usestatehook/HookCounter";
import HookCounter2 from "./components/usestatehook/HookCounter2";
import HookCounter3 from "./components/usestatehook/HookCounter3";
import HookCounter4 from "./components/usestatehook/HookCounter4";
import ClassCounter2 from "./components/useEffecthook/ClassCounter2";
import HookCounterOne from "./components/useEffecthook/HookCounterOne";
import ClassMouse from "./components/useEffecthook/ClassMouse";
import HookMouse1 from "./components/useEffecthook/HookMouse1";
import MouseContainer from "./components/useEffecthook/MouseContainer";
import IntervalHookCounter from "./components/useEffecthook/IntervalHookCounter";
import DataFetching from "./components/useEffecthook/DataFetching";
import DataFetchingByParam from "./components/useEffecthook/DataFetchingByParam";
import ComponentC from "./components/context/ComponentC";
import CounterOne from "./components/usereducerhook/CounterOne";
import CounterTwo from "./components/usereducerhook/CounterTwo";
import CounterThree from "./components/usereducerhook/CounterThree";
import ComponentB from "./components/usereducerhook/usereducer_with_usecontext/ComponentB";
import ComponentJ from "./components/usereducerhook/usereducer_with_usecontext/ComponentJ";
import ComponentP from "./components/usereducerhook/usereducer_with_usecontext/ComponentP";
import DataFetchingOne from "./components/usereducerhook/fetchingdata/DataFetchingOne";
import DataFetchingTwo from "./components/usereducerhook/fetchingdata/DataFetchingTwo";
import ParentComponent from "./components/usecallbackhook/ParentComponent";
import Counter from "./components/memohook/Counter";
import FocusInput from "./components/refhook/FocusInput";
import ClassTimer from "./components/refhook/ClassTimer";
import HookTimer from "./components/refhook/HookTimer";
import DocTitleOne from "./components/customhooks/DocTitleOne";
import DocTitleTwo from "./components/customhooks/DocTitleTwo";
import CustomCounterOne from "./components/customhooks/CustomCounterOne";
import CustomCounterTwo from "./components/customhooks/CustomCounterTwo";
import UserForm from "./components/customhooks/UserForm";

export const UserContext = React.createContext();
export const channelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/**/}
      {/* React Hook - useState */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* React Hook - useState, update the state based on the previous state */}
      {/* <HookCounter2 /> */}
      {/* React Hook - useState with object */}
      {/* <HookCounter3 /> */}
      {/* React Hook - useState with Array */}
      {/* <HookCounter4 /> */}
      {/* React Hook - useEffect */}
      {/* <ClassCounter2 /> */}
      {/* <HookCounterOne /> */}
      {/* React Hook - useEffect render only once */}
      {/* <ClassMouse /> */}
      {/* <HookMouse1 /> */}
      {/* React Hook - useEffect cleanup */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* React Hook - useEffect fetch data */}
      {/* <DataFetching /> */}
      {/* <DataFetchingByParam /> */}
      {/* React Hook - Context and useContext */}
      {/* <UserContext.Provider value={"Preeti"}>
        <channelContext.Provider value="PreetiChannel">
          {" "}
          <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider> */}
      {/* React Hook - useReducer */}
      {/* <CounterOne /> */}
      {/* UseReducer hook - state object and action object */}
      {/* <CounterTwo /> */}
      {/* usereducer hook - state object handling multiple state varible that hold same state function*/}
      {/* <CounterThree /> */}
      {/* UseReducer Hook - useContext*/}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        {" "}
        Count - {count}
        <ComponentB />
        <ComponentJ />
        <ComponentP />
      </CountContext.Provider> */}

      {/* useReducer Hook - fetching data */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      {/* useCallback hook*/}
      {/* <ParentComponent /> */}

      {/* Usememo hook */}
      {/* <Counter /> */}

      {/* useRef hook */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}

      {/* Custom Hooks  - with useEffect Hook*/}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* Custom Hooks  - with useState Hook*/}
      {/* <CustomCounterOne />
      <CustomCounterTwo /> */}

      {/* Custom Hooks  - with useState Hook(bit complex custom hook)*/}
      <UserForm />
    </div>
  );
}

export default App;

//the reducer with context helps the count value is shared between the components BJP
