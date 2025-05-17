import { Route, Routes } from 'react-router-dom';
import CountdownBanner from './components/CountdownBanner/countdown-banner.component';
import Header from './components/Header/header.component';
import Home from './screens/Home/home.screen';
import SellScreen from './screens/SellScreen/sell.screen';

function App() {
  return (
    <div className="app">
      <CountdownBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SellScreen />} />
      </Routes>
    </div>
  );
}

export default App;
