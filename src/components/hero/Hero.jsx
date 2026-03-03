import './hero.css';
const Hero = () => {
  return (
    <div className="hero">
      <div className="input-box">
        <div className="input-part">
          <i class="bi bi-search"></i>
          <input
            id="search-input"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <button className="btn">Search</button>
      </div>
      <div className="hero-title">
        <h3>Dubai</h3>
        <h1>Desert Safaris</h1>
      </div>
    </div>
  );
};

export default Hero;
