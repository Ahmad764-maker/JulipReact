import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="line">
        <img className="lines" src="/img/Vector 36.svg" alt="" />
        <img className="linesMid" src="/img/Vector 39.svg" alt="" />
        <img className="linesTop" src="/img/Vector 38.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Create your </h1>
            <p className="topP">own website</p>
            <h2>in 5 minutes</h2>
            <p className="midP">
              Drive more sales and build an online presence for your
              service-based business.
            </p>
            <p className="bottP">Everything you want to share in one place.</p>
            <button>Start today for free</button>
          </div>
          <div className="right">
            <img className="phone" src="/img/Group 119.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
