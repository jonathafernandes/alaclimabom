import { Ads } from "./components/Ads";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { News } from "./components/News";

import "./index.css";

export function App() {

  return (
    <>
      <main>
        <Header />
        <Hero />
        {/* <News />
        <Ads /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
