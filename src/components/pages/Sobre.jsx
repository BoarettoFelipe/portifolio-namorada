import { useTranslation } from 'react-i18next';
import './Sobre.css';
import profilePlaceholder from '../../assets/profile-placeholder.png';
import profile from '../../content/profile.json';
import skillsContent from '../../content/skills.json';
import experiencesContent from '../../content/experiences.json';

const getLocalizedText = (value, language) => {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.pt || '';
};

function Sobre() {
  const { t, i18n } = useTranslation();
  const firstExperience = (experiencesContent.items || []).find((experience) => experience.active !== false);
  const profileImage = profile.profileImage?.startsWith('/uploads/') ? profile.profileImage : profilePlaceholder;
  const skills = (skillsContent.items || []).filter((group) => group.active !== false);

  return (
    <div className="sobre-container">
      <div className="sobre-imagem">
        <img src={profileImage} alt={profile.name} />
      </div>
      <div className="sobre-texto">
        <h2>{getLocalizedText(profile.aboutTitle, i18n.language)}</h2>
        <p>{getLocalizedText(profile.about, i18n.language)}</p>
        {firstExperience && (
          <p className="experience-summary">
            <strong>{getLocalizedText(firstExperience.role, i18n.language)}</strong>
            {' - '}
            {firstExperience.company}
            {' | '}
            {firstExperience.period}
          </p>
        )}
        <h3>{t('about_skills_title')}</h3>
        <div className="skills-container">
          {skills.flatMap((group) => group.items || []).map((skill, index) => (
            <span className="skill-tag" key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sobre;
