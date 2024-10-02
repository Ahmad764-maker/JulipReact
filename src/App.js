import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default App;
