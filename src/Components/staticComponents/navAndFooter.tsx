import React from 'react';

type NbProps = {
    logo: string; // es de tipo string porque se agrega la URL
    buttonLabels: string[];
}

    const Navbar: React.FC<NbProps> = ({ logo, buttonLabels }) => {
        return (
            <div className="navbar">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <div className="navbar-buttons">
                {buttonLabels.map((label, index) => (
                  <button key={index} className="navbar-button">
                    {label}
                  </button>
                ))}
              </div>
            </div>
          );
        };
        
        export default Navbar;