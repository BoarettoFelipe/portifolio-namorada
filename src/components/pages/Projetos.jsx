import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import './Projetos.css';
import imgProjeto1 from '../../assets/projects/projeto1.png';
import imgProjeto2 from '../../assets/projects/projeto2.png';
import imgProjeto3 from '../../assets/projects/projeto3.png';
import publicationsContent from '../../content/publications.json';

const getLocalizedText = (value, language) => {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.pt || '';
};

const images = {
  'projeto1.png': imgProjeto1,
  'projeto2.png': imgProjeto2,
  'projeto3.png': imgProjeto3
};

function Projetos() {
  const { t, i18n } = useTranslation();
  const publications = publicationsContent.items.filter((item) => item.active !== false);

  return (
    <div className="projetos-container">
      <h2>{t('nav_projetos')}</h2>
      <div className="projects-grid">
        {publications.map((item, index) => (
          <ProjectCard
            key={index}
            image={images[item.image] || item.image || imgProjeto1}
            title={getLocalizedText(item.title, i18n.language)}
            description={getLocalizedText(item.description, i18n.language)}
            tags={item.tags}
            link={item.url}
            ctaLabel={getLocalizedText(item.ctaLabel, i18n.language)}
            source={item.source}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;
