import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from '../src/pages/forms/Login';
import Register from '../src/pages/forms/Register';
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import TourDetails from './components/tour-item/TourDetails';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
