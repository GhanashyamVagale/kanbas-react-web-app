<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
export default function HelloRedux() {
  const { message } = useSelector((state: any) => state.helloReducer);
=======
import { useSelector, useDispatch }
  from "react-redux";
export default function HelloRedux() {
  const { message } = useSelector(
    (state: any) => state.helloReducer);
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4> <hr />
    </div>
  );
}
