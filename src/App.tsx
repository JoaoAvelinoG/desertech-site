import { Header } from "./components/header/Header";

import { Footer } from "./components/footer/Footer";
import { AppHome } from "./components/home/AppHome";
import { SectionProvider } from "./contexts/scrollProvider";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <div className="App-wrapper overflow-x-hidden">
      <SectionProvider>
        <Header />
        <AppHome />
        <Footer />
      </SectionProvider>
    </div>
  );
}

export default App;
