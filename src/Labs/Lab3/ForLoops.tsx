export default function ForLoops() {
<<<<<<< HEAD
  let stringArray1 = ["string1", "string3"];
  let stringArray2 = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>For Loops</h4>
      stringArray2 = {stringArray2} <hr />
    </div>
  );
}
=======
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];

    let stringArray3 = ["hello", "goodbye"];
    let stringArray4 = [];

    for (let i = 0; i < stringArray1.length; i++) {
      const string1 = stringArray1[i];
      stringArray2.push(string1.toUpperCase());
    }

    for (let i = 0; i < stringArray3.length; i++) {
        const string2 = stringArray3[i];
        stringArray4.push(string2.toLowerCase());
      }
    return (
      <div id="wd-for-loops">
        <h4>Looping through arrays</h4>
        stringArray2 = {stringArray2} <br />
        stringArray4 = {stringArray4} <hr />
      </div>
  );}
  
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
