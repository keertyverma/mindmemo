import "./Landing.css";

function Landing() {
  const handleClick = () => {
    console.log("handle auth");
  };

  return (
    <section className="container landing">
      <h1 className="title">MindMemo</h1>
      <p className="description">
        A task manager app that simplify the way you list, add or delete tasks.
      </p>
      <button onClick={handleClick}>Get Started</button>
    </section>
  );
}

export default Landing;
