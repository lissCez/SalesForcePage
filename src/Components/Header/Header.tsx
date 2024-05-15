import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sfimg from '../../assets/salesforceIcon.png';

interface MenuProps {
  backgroundColor: string;
}

const Menu: React.FC<MenuProps> = ({ backgroundColor }) => {
  const location = useLocation();

  return (
    <div className="menu" style={{ backgroundColor }}>
      <div className="sfimg">
        <Link to='/'>
          <img className="salesforceIcon" src={sfimg} alt="SalesforceIcon" />
        </Link>
      </div>
      <div className="aHLCT">
        <Link to="/about" className="aHLCT">About</Link>
        <Link to="/" className="aHLCT">Home</Link>
      </div>
      <div className="botao">
        <button className="butao"><Link className='bt' to='/Login'>Log in</Link></button>
      </div>
    </div>
  );
};

export default Menu;
