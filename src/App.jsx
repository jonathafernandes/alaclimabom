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
          author={'Quórum de Elderes — Anthony Mendonça'}
          textContent={'Meus queridos e amados irmãos, estou compartilhando este vídeo com vocês com a intenção de que sintam a mesma alegria que eu senti. Irmãos, somos abençoados por termos um templo tão perto de nós, e em breve teremos um ainda mais próximo. As bênçãos que recebemos ao sacrificar nosso tempo, recursos e dinheiro serão multiplicadas, como podemos ver neste maravilhoso vídeo e pelos exemplos de nossos irmãos em Manaus. Eles foram imensamente abençoados, e não tenho dúvidas de que todos nós seremos também. Portanto, gostaria de fazer um pedido a vocês: VAMOS PARA A CARAVANA no dia 15/12/23! Antecipadamente, agradeço a todos!'}
          text1Img={'A Presidência da Sociedade de Socorro realizou uma atividade sobre História da Família com o objetivo de ajudar as irmãs a realizar esse trabalho sagrado.'}
          text2Img={'Foi realizada uma atividade para todos os jovens da Estaca para apresentação do novo tema da Mutual do próximo ano.'}
          text3Img={'Os irmãos do quórum de élderes serviram a irmã Michele de Pilar, realizando um projeto de serviço para limpeza e organização de uma área em sua residência.'}
          text4Img={'A Presidência da Organização das Moças realizou uma atividade para colocar em prática princípios do programa Crianças e Jovens.'}
          />
      </main>
      <Footer />
    </>
  )
}
