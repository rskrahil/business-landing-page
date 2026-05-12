import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Marquee    from "./components/Marquee";
import About      from "./components/About";
import Services   from "./components/Services";
import Vision     from "./components/Vision";
import Industries from "./components/Industries";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Vision />
      <Industries />
      <Footer />
    </>
  );
}
