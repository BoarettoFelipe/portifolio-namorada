import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../content/profile.json';
import socialLinksContent from '../../content/socialLinks.json';
import './Inicio.css';

const getLocalizedText = (value, language) => {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.pt || '';
};

const SocialIcon = ({ type }) => {
  if (type === 'linkedin') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }

  if (type === 'whatsapp') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

function Inicio() {
  const { i18n } = useTranslation();
  const [hintLang, setHintLang] = useState('pt');
  const socialLinks = socialLinksContent.items.filter((link) => link.active !== false);

  const hints = {
    pt: 'Dica: Use os botões no canto superior direito para alterar o tema e o idioma!',
    en: 'Hint: Use the buttons in the top right corner to change the theme and language!'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHintLang((prevLang) => (prevLang === 'pt' ? 'en' : 'pt'));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-main-content">
        <h2 className="hero-name">{profile.name}</h2>
        <p>{getLocalizedText(profile.headline, i18n.language)}</p>
        <div className="hero-links">
          {socialLinks.map((link) => (
            <div className="social-link-wrapper" key={link.type}>
              <a href={link.url} target={link.type === 'email' ? undefined : '_blank'} rel="noopener noreferrer" className="social-link" draggable="false" aria-label={link.label}>
                <SocialIcon type={link.type} />
              </a>
              <div className="tooltip">{link.displayText}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-hint">
        <p key={hintLang} className="hero-hint-text">
          {hints[hintLang]}
        </p>
      </div>
    </div>
  );
}

export default Inicio;
