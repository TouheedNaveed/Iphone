import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
const App = () => {
  // return <button onClick={() => methodDoesNotExist()} style={{color:'white'}}>Break the world</button>;
  return (
    <>
      <main className="bg-black overflow-clip">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
