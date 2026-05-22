import './ProjectCard.css';

function ProjectCard({ image, title, description, tags, link, ctaLabel, source, date }) {
  const hasValidLink = link && link !== 'COMPLETAR' && link !== '#';
  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <div className="project-card">
      <img src={image} alt={`Imagem de destaque: ${title || 'publicação'}`} className="project-image" />
      <div className="project-info">
        <h3>{title || 'Publicação'}</h3>
        <span className="project-source">{source} {date && `| ${date}`}</span>
        <p>{description || ''}</p>
        <div className="project-techs">
          {safeTags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {hasValidLink ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {ctaLabel || 'Ver publicação'}
            </a>
          ) : (
            <span className="btn btn-primary btn-disabled">{ctaLabel || 'Ver publicação'}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
