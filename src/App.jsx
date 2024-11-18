import { Announcements } from "./components/Announcements";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Updates } from "./components/Updates";

import "./index.css";

export function App() {

  return (
    <>
      <main>
        <Header />
        <Hero />
        <Announcements />
        <Updates />
      </main>
    </>
  )
}
