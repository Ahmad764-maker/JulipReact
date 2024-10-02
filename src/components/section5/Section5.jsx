import "./section5.css";

export default function Section5() {
  return (
    <section className="section5">
      <div className="container">
        <div className="top">
          <h1>Who can use</h1>
          <div className="mid">
            <img
              src="http://julip.local/wp-content/uploads/2024/09/Group-555.svg"
              alt=""
            />
            <p>?</p>
          </div>
          <p className="subtitle">
            Designed with the service provider in mind, it is great for
            services, brands to showcase their products and content creators to
            feature their products and earn more money.
          </p>
        </div>
        <div className="row">
          <div className="left">
            <p>Hair & Makeup</p>
            <p>Dog Trainers</p>
            <p>Virtual Assistants</p>
            <p>Consultants</p>
            <p>Interior Designers</p>
            <p>Photographers</p>
            <p>Content Creators</p>
          </div>
          <div className="right">
            <img src="/img/Frame.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
