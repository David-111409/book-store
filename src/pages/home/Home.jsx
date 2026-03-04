import Banner from '../../components/banner/Banner';
import Hero from '../../components/hero/Hero';
import NewsLetter from '../../components/news-letter/NewsLetter';
import Tours from '../../components/tours/Tours';

const Home = () => {
  console.log('rendering home');
  return (
    <>
      <Hero />
      <Tours />
      <Banner />
      <NewsLetter />
    </>
  );
};

export default Home;
