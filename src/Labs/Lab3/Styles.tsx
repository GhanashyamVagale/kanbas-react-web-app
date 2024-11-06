export default function Styles() {
<<<<<<< HEAD
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px" };
  const bgBlue = {
    backgroundColor: "lightblue",
    color: "black",
    ...padding10px,
  };
  const bgRed = {
    backgroundColor: "lightcoral",
    ...colorBlack,
    ...padding10px,
  };
  return (
    <div id="wd-styles">
      <h2>Styles</h2>
      <div
        style={{
          backgroundColor: "lightyellow",
          color: "black",
          padding: "10px",
        }}
      >
        Yellow background
      </div>
      <div style={bgRed}> Red background </div>
      <div style={bgBlue}>Blue background</div>
      <hr />
    </div>
  );
}
=======
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = { "backgroundColor": "lightblue",
                    "color": "black",   ...padding10px
    };
    const bgRed = {
      "backgroundColor": "lightcoral",
      ...colorBlack,   ...padding10px
    };
    return(
      <div id="wd-styles">
        <h2>Styles</h2>
        <div style={{"backgroundColor": "lightyellow",
          "color": "black", padding: "10px" }}>
          Yellow background</div>
        <div style={ bgRed }> Red background </div>
        <div style={ bgBlue }>Blue background</div>
      </div>
  );};
  
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
