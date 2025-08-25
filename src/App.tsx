import { Header } from "./components/header/Header";
import { WhatsAppLink } from "./components/WhatsAppLink";
import { HomeHero } from "./components/home/HomeHero";
import { HomeDivider } from "./components/home/HomeDivider";
import { HomeCardsSection } from "./components/home/HomeCardsSection";
import { HomeContactArea } from "./components/home/contact/HomeContactArea";

function App() {
  return (
    <div className="App-wrapper overflow-x-hidden">
      <Header />

      {/* Componente da Home */}
      <main className="home">
        {/* WhatsApp Button */}
        <WhatsAppLink />

        {/* Hero */}
        <HomeHero />

        {/* Divider */}
        <HomeDivider />

        {/* Seção dos Cards */}
        <HomeCardsSection />

        {/* Formulário */}
        <HomeContactArea />

        <section className="contact">
          <div>
            <h2>Transforme a sua empresa com a Desertech</h2>
            <p>Junte-se a mais de 6.000 empresas que atuam no digital.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
