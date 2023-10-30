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
          news1Title={'Atividade da História da Família'}
          news2Title={'Atividade da Estaca para jovens'}
          news3Title={'Projeto de serviço'}
          news4Title={'Atividade para as moças'}
          section3Title={'Mensagem para os membros'}
          section4Title={'Anúncios'}
          author={'Klécia Poliana'}
          textContent={'Um dia, vocês vão se apresentar perante o Salvador. Vocês ficarão impressionados a ponto de chorar por estarem em Sua santa presença. Vão ter dificuldades para encontrar palavras para agradecê-Lo por pagar por seus pecados, por perdoá-los de qualquer maldade com outros, por curá-los das injúrias e injustiças desta vida. — Presidente Russell M. Nelson'}
          text1Img={'A Presidência da Sociedade de Socorro realizou uma atividade sobre História da Família com o objetivo de ajudar as irmãs a realizar esse trabalho sagrado.'}
          text2Img={'Foi realizada uma atividade para todos os jovens da Estaca para apresentação do novo tema da Mutual do próximo ano.'}
          text3Img={'Os irmãos do quórum de élderes serviram os membros de Pilar, realizando um projeto de serviço para limpeza e organização do local.'}
          text4Img={'A Presidência da Organização das Moças realizou uma atividade para colocar em prática princípios do programa Crianças e Jovens.'}
          titleAd1={'Coral'}
          titleAd2={'Palestra'}
          titleAd3={'Atividade'}
          titleAd4={'Templo'}
          ad1={'Ensaio do coral'}
          ad2={'Autossuficiência e Tecnologia'}
          ad3={'Atividade para os jovens'}
          ad4={'Caravana ao Templo'} />
      </main>
      <Footer />
    </>
  )
}
