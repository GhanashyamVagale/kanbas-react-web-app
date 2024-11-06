<<<<<<< HEAD
export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
=======
export default function PassingFunctions(
    { theFunction }: { theFunction: () => void }) {
     return (
       <div>
         <h2>Passing Functions</h2>
         <button onClick={theFunction} className="btn btn-primary">
           Invoke the Function
         </button>
         <hr/>
       </div>
   );}
   
   
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
