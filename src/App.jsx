// import { styles } from './App.css'
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Post } from "./components/Post";

// import img1 from "../assets/img1.jpeg";
// import img2 from "../assets/img2.jpeg";

import "./index.css";

export function App() {

  return (
    <>
    <Header />
      <main>
        <Hero />
        <Post
          section1Title={'Atividade da Primária'}
          section2Title={'Reunião Sacramental em Pilar'}
          section3Title={'Mensagem de destaque'}
          section4Title={'Anúncios'}
          author={'Presidência do Quórum de Elderes'}
          textContent={'Queridos irmãos e irmãs, buscamos constantemente orientação do Senhor sobre como podemos ajudar nossos irmãos(a) a guardar os mandamentos de Deus, especialmente os dois grandes mandamentos de amar a Deus e ao próximo. Tomamos a decisão de aposentar o programa de “mestre familiar” e o de “professora visitante” como os conhecemos. Em vez disso, vamos implementar uma nova e mais sagrada abordagem para cuidar das outras pessoas e ministrar a elas. Vamos nos referir a esses esforços simplesmente como “ministrar como o Salvador”. Esforços eficazes de ministração são capacitados pelos dons inatos das irmãs e pelo incomparável poder do sacerdócio. Todos nós precisamos de tal proteção contra as artimanhas astutas do adversário.'}
          text1Img={'A Presidência da Primária realizou uma atividade no dia 12 de Outubro para celebrar o Dia das Crianças.'}
          text2Img={'Recebemos a visita do Presidente da Estaca, Manoel Messias, na Reunião Sacramental realizada para os membros do Pilar.'}
          ad1={'Atividade da Organiazação das Moças - 28/10'}
          ad2={'Caravana ao Templo - 15/12'}
          // srcImg1={img1}
          // srcImg2={img2}
        />
      </main>
    </>
  )
}
