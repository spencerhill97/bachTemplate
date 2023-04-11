import Hero from "./components/Hero";
import Lineup from "./components/Lineup";
import Travel from "./components/Travel";
import Stay from "./components/Stay";
import Rooms from "./components/Rooms";
import Schedules from "./components/Schedules";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lineup />
      <Schedules />
      <Travel />
      <Stay />
      <Rooms />
    </>
  );
}

export default App;
