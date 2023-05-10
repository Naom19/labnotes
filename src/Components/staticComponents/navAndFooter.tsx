import React from 'react';

// Define a type for the button labels
type ButtonLabel = {
  label: string; // because of the URL
  className: string; 
};

// Update the NbProps type to use ButtonLabel[]
type NbProps = {
  logo: string;
  buttonLabels: ButtonLabel[];
};


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