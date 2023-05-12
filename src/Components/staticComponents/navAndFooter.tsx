import React from 'react';
import { NbProps, ButtonLabel } from '../staticComponents/Typings';


    const Navbar: React.FC<NbProps> = ({ logo, buttonLabels }) => {
      
        return (
            <div className="navbar">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <div className="navbar-buttons">
                {buttonLabels.map((item, index) => (
                  <button key={index} className={`navbar-button ${item.className}`}>
                    {item.label}
                  </button>
                ))}
              </div>
              <div>
              {/* Aquí va el menú lateral */}
              </div>
            </div>
          );
        };
        
export default Navbar;