import "./section3.css";
import { useState } from "react";
export default function Section3() {
  const [step, setStep] = useState("step1");
  return (
    <section className="section3">
      <div className="container">
        <h1>
          How it <span>works</span>
        </h1>
        <div className="row">
          <div className="left">
            <button
              onClick={() => {
                setStep("step1");
              }}
            >
              Pick your custom link name
            </button>
            <button
              onClick={() => {
                setStep("step2");
              }}
            >
              Choose your template to customize
            </button>
            <button
              onClick={() => {
                setStep("step3");
              }}
            >
              Share your services, reviews & FAQs
            </button>
            <button
              onClick={() => {
                setStep("step4");
              }}
            >
              Let people know why you’re different
            </button>
            <button
              onClick={() => {
                setStep("step5");
              }}
            >
              Make passive income with your visual storefront
            </button>
          </div>
          <div className="right">
            {step === "step1" && (
              <div className="step1">
                <p>Content-1</p>
              </div>
            )}
            {step === "step2" && (
              <div className="step2">
                {" "}
                <p>Content-2</p>
              </div>
            )}
            {step === "step3" && (
              <div className="step2">
                {" "}
                <p>Content-3</p>
              </div>
            )}
            {step === "step4" && (
              <div className="step2">
                {" "}
                <p>Content-4</p>
              </div>
            )}
            {step === "step5" && (
              <div className="step2">
                {" "}
                <p>Content-5</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
