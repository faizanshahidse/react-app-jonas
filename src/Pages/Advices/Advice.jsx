import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>Advice: {advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </>
  );
};

function Message(props) {
  return (
    <p>
      You have read <strong> {props.count} </strong> pieces of advice!!!.
    </p>
  );
}

export default Advice;
