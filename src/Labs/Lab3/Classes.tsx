<<<<<<< HEAD
import "./Classes.css";
export default function Classes() {
  const color = "blue";
  const dangerous = true;
  return (
    <div>
      <div>
        <h2>Classes</h2>
        <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
          Yellow background{" "}
        </div>
        <div className="wd-bg-blue wd-fg-black wd-padding-10px">
          Blue background{" "}
        </div>
        <div className="wd-bg-red wd-fg-black wd-padding-10px">
          Red background{" "}
        </div>
        <hr />
      </div>
      <div>
        <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
          Yellow background{" "}
        </div>
        <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
          Dynamic Blue background
        </div>
        <div
          className={`${dangerous ? "wd-bg-red" : "wd-bg-green"}
                                     wd-fg-black wd-padding-10px`}
        >
          Dangerous background
        </div>
        <hr />
      </div>
    </div>
  );
}
=======
import './Classes.css';
export default function Classes() {
    const color = 'blue';
    const dangerous = true;
    // const dangerous = false; <- green background
  return (
    <div>
      <h2>Classes</h2>
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
       Dangerous background
     </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background
      </div>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background  </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background    </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background     </div><hr/>
    </div> ) };
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a