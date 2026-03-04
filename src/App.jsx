// import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import {toursList} from './data';
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Tours toursList={toursList} />
      {/* <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
      </Routes> */}
    </>
  );
}

export default App;
