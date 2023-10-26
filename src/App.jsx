import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Post } from "./components/Post";
import { MissionaryWork } from "./components/MissionaryWork";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./index.css";

export function App() {

  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/missionarywork" component={MissionaryWork} />
      </Routes>
      <main>
        <Hero />
        <Post
          section1Title={'Atividade da Primária'}
          section2Title={'Reunião Sacramental em Pilar'}
          section3Title={'Mensagem para os membros'}
          section4Title={'Anúncios'}
          author={'Ministração — Presidência do Quórum de Elderes'}
          textContent={'Queridos irmãos e irmãs, buscamos constantemente orientação do Senhor sobre como podemos ajudar nossos irmãos(a) a guardar os mandamentos de Deus, especialmente os dois grandes mandamentos de amar a Deus e ao próximo. Tomamos a decisão de aposentar o programa de “mestre familiar” e o de “professora visitante” como os conhecemos. Em vez disso, vamos implementar uma nova e mais sagrada abordagem para cuidar das outras pessoas e ministrar a elas. Vamos nos referir a esses esforços simplesmente como “ministrar como o Salvador”. Esforços eficazes de ministração são capacitados pelos dons inatos das irmãs e pelo incomparável poder do sacerdócio. Todos nós precisamos de tal proteção contra as artimanhas astutas do adversário. — Presidente Russell M. Nelson'}
          text1Img={'A Presidência da Primária realizou uma atividade no dia 12 de Outubro para celebrar o Dia das Crianças.'}
          text2Img={'Recebemos a visita do Presidente da Estaca, Manoel Messias, na Reunião Sacramental realizada para os membros do Pilar.'}
          titleAd1={'Atividade'}
          titleAd2={'Templo'}
          ad1={'Atividade da Organização das Moças'}
          ad2={'Caravana ao Templo'}
        />
      </main>
      <Footer />
    </Router>
  )
}
