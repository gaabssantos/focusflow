import { Route, Routes } from 'react-router-dom';
import CountdownBanner from './components/CountdownBanner/countdown-banner.component';
import Header from './components/Header/header.component';
import Home from './screens/Home/home.screen';
import SellScreen from './screens/SellScreen/sell.screen';
import TermosServicos from './containers/TermosServicos/termos-servicos.container';
import PoliticaPrivacidade from './containers/PoliticaPrivacidade/privacy.container';

function App() {
  return (
    <div className="app">
      <CountdownBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SellScreen />} />
        <Route path="/termos" element={<TermosServicos />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </div>
  );
}

export default App;
