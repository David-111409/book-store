// import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
      </Routes> */}
    </>
  );
}

export default App;
