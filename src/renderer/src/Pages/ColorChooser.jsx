import React, { useState, useEffect } from 'react';

const defaultColors = {
  primaryColor: '#d5006d',
  secondaryColor: '#ff69b4',
  backgroundColor: '#f9f3f9',
  textColor: '#4a2c4a'
};

const ColorChooser = () => {
  const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem('primaryColor') || defaultColors.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(() => localStorage.getItem('secondaryColor') || defaultColors.secondaryColor);
  const [backgroundColor, setBackgroundColor] = useState(() => localStorage.getItem('backgroundColor') || defaultColors.backgroundColor);
  const [textColor, setTextColor] = useState(() => localStorage.getItem('textColor') || defaultColors.textColor);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--text-color', textColor);

    localStorage.setItem('primaryColor', primaryColor);
    localStorage.setItem('secondaryColor', secondaryColor);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);
  }, [primaryColor, secondaryColor, backgroundColor, textColor]);

  const resetColors = () => {
    setPrimaryColor(defaultColors.primaryColor);
    setSecondaryColor(defaultColors.secondaryColor);
    setBackgroundColor(defaultColors.backgroundColor);
    setTextColor(defaultColors.textColor);
  };

  return (
    <div className="color-chooser">
      <h3>Customize App Colors</h3>
      <div className="color-input">
        <label>Primary Color:</label>
        <input 
          type="color" 
          value={primaryColor} 
          onChange={(e) => setPrimaryColor(e.target.value)} 
        />
      </div>
      <div className="color-input">
        <label>Secondary Color:</label>
        <input 
          type="color" 
          value={secondaryColor} 
          onChange={(e) => setSecondaryColor(e.target.value)} 
        />
      </div>
      <div className="color-input">
        <label>Background Color:</label>
        <input 
          type="color" 
          value={backgroundColor} 
          onChange={(e) => setBackgroundColor(e.target.value)} 
        />
      </div>
      <div className="color-input">
        <label>Text Color:</label>
        <input 
          type="color" 
          value={textColor} 
          onChange={(e) => setTextColor(e.target.value)} 
        />
      </div>
      <button className="reset-button" onClick={resetColors}>Reset to Default Colors</button>
    </div>
  );
};

export default ColorChooser;