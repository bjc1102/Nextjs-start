import { useState } from "react";

export default function Home123() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <style jsx>button {}</style>
    </div>
  );
}
