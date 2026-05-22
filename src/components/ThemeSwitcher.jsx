import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ changeTheme, currentTheme }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = ['light', 'dark'];

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button className="theme-button" onClick={() => setIsOpen(!isOpen)}>
        {t('themes_label')}
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}></span>
      </button>

      {isOpen && (
        <div className="theme-dropdown-menu">
          {themes.map((themeKey) => (
            <button
              key={themeKey}
              className={`theme-dropdown-item ${currentTheme === themeKey ? 'active' : ''}`}
              onClick={() => handleThemeChange(themeKey)}
            >
              {themeKey === 'dark' ? t('theme_dark') : t('theme_light')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
