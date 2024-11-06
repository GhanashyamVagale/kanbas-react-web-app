/** 
const ConditionalOutputIfElse = () => {
<<<<<<< HEAD
  const loggedIn = true;
  if (loggedIn) {
    return <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>;
  } else {
    return (
      <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
    );
  }
};
export default ConditionalOutputIfElse;
=======
    const loggedIn = true;
    if(loggedIn) {
      return (<h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>);
    } else {
      return (<h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>);
    }
  };
  export default ConditionalOutputIfElse;
  */
const ConditionalOutputInline = () => {
const loggedIn = false;
    return (
      <div id="wd-conditional-output-inline">
        { loggedIn && <h2>Welcome Inline</h2>      }
        {!loggedIn && <h2>Please login Inline</h2> }
      </div>
   );};
   export default ConditionalOutputInline;
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
