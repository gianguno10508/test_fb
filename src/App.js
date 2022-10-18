import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/body/Home';
import Detail from './component/body/Detail';
import TestFb from './component/TestFb';
import Policy from './component/body/policy';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/policy' element={<Policy />} />
        <Route path="/" element={<TestFb />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
