<<<<<<< HEAD
export default function FindIndex() {
  let numberArray1 = [1, 2, 4, 5, 6];
  let stringArray1 = ["string1", "string3"];

  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  return (
    <div id="wd-find-index">
      <h4>FindIndex Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index} <hr />
    </div>
  );
}
=======
export default function FindIndex(){
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return(
        <div id="wd-findindex-function">
        <h4>FindIndex Function</h4>
        fourIndex = {fourIndex} <br />
        string3Index = {string3Index} <hr />
      </div>
    )
    }
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a