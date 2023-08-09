import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Henry Videogames</h1>
      <Link to="/home">
      <button className="landing-button">Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
