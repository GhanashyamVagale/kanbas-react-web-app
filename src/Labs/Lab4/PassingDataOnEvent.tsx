const add = (a: number, b: number) => {
<<<<<<< HEAD
  alert(`${a} + ${b} = ${a + b}`);
};
export default function PassingDataOnEvent() {
  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button
        onClick={() => add(2, 3)}
        className="btn btn-primary"
        id="wd-pass-data-click"
      >
        Pass 2 and 3 to add()
      </button>
      <hr />
    </div>
  );
}
=======
    alert(`${a} + ${b} = ${a + b}`);
  };
  export default function PassingDataOnEvent() {
    return (
      <div id="wd-passing-data-on-event">
        <h2>Passing Data on Event</h2>
        <button onClick={() => add(2, 3)}
                // onClick={add(2, 3)}
                className="btn btn-primary"
                id="wd-pass-data-click">
          Pass 2 and 3 to add()
        </button>
        <hr/>
      </div>
  );}
  
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
