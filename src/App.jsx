import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Post } from "./components/Post";

import "./index.css";

export function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Post
          news1Title={'Novos batismos'}
          news2Title={'Atividade dos jovens'}
          text1Img={'No sábado, dia 25, tivemos o batismo da irmã Jad Naiara (no centro, com camisa da cor laranja) e suas filhas, Maria Etelvina e Maria Cecília.'}
          text2Img={'Foi realizada uma atividade na praia para todos os jovens no dia 25 de Novembro.'}
          author={'Quórum de Elderes — Ewerton Chrysostomo'}
          textContent={'Queridos irmãos, tenho refletido sobre o verdadeiro significado de amar a Deus. O Senhor afirmou: "Se me amais, guardais os meus mandamentos" (João 14:15). Quando amamos alguém, desejamos estar próximos e estamos dispostos a sacrificar-nos para estar junto da pessoa amada. No entanto, quando não amamos sinceramente, não nos importamos em estar próximos. Um dos lugares em que podemos nos aproximar mais do Senhor são os edifícios da igreja e os templos sagrados. A pergunta que devemos fazer a nós mesmos toda semana é: "Eu amo verdadeiramente o Senhor?" Se a resposta for afirmativa, devemos esforçar-nos para guardar os mandamentos, planejando-nos para frequentar Sua casa. Estabeleçam metas, empenhem-se com dedicação constante e fortaleçam o amor ao Senhor.'}
          lessonDate={'14 de jan.'}
          lessonTitle={'"Amarás o teu próximo"'}
          teacher={'Ian S. Ardern'}
          />
      </main>
      <Footer />
    </>
  )
}
