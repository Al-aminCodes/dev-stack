import { Suspense, useState } from "react";
import "./App.css";
import Stack from "./components/DevStack/Stack";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const dataFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [stackData] = useState(() => dataFetch());

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Stack stackData={stackData} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
