import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from '../src/pages/forms/Login';
import Register from '../src/pages/forms/Register';
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
