import React from "react";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="nav">
      <img src="/img/Group 555.svg" alt="" />
      <img
        onClick={() => {
          setShowModal(true);
        }}
        className="bars"
        src="/img/th-menu-outline.svg"
        alt=""
      />

      <nav>
        <ul>
          <li>
            <a to="">Pricing</a>
          </li>
          <li>
            <a to="">Log in</a>
          </li>
          <li>
            <button>Start for free</button>
          </li>
        </ul>
      </nav>
      {showModal && (
        <div className="fixed">
          <ul className="mod">
            {/* <button onClick={setShowModal(false)}>x</button> */}
            <li>
              <button
                className="closer"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                x
              </button>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                to={"/home"}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                to={"/about"}
              >
                Log in
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModal(false);
                }}
                to="/servicesPage"
              >
                <button> Start for free</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
