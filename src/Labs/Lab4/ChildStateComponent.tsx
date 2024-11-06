<<<<<<< HEAD
export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Counter {counter}</h3>
      <button
        className="btn btn-success"
        onClick={() => setCounter(counter + 1)}
        id="wd-increment-child-state-click"
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCounter(counter - 1)}
        id="wd-decrement-child-state-click"
      >
        Decrement
      </button>
    </div>
  );
}
=======
export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h3>Counter {counter}</h3>
          <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
            Increment</button>
          <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
            Decrement</button>
          <hr/>
        </div>
    );}
    
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
