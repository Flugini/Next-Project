
import Counter from "../../components/counter";
import CounterReducer from "../../components/CounterReducer";
import InputWithFocus from "../../components/InputFocus";

export default function Home() {
  return (
   <div>
    <Counter />
    <br />
    <CounterReducer />
    <br />
    <InputWithFocus />
   
   </div>
  );
}
