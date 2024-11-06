export default function FunctionDestructing() {
<<<<<<< HEAD
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      const add = (a, b) =&gt; a + b;
      <br />
      const sum = add(1, 2);
      <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br />
      sum = {sum}
      <br />
      difference = {difference} <hr />
    </div>
  );
}
=======
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    return (
      <div id="wd-function-destructing">
        <h2>Function Destructing</h2>
        const add = (a, b) =&gt; a + b;<br />
        const sum = add(1, 2);<br />
        const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
        const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
        sum = {sum}<br />
        difference = {difference} <hr />
      </div>
   );}
   
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
