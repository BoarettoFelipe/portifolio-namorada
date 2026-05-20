import './ProjectCard.css';

function ProjectCard({ image, title, description, tags, link, ctaLabel, source, date }) {
  const hasValidLink = link && link !== 'COMPLETAR' && link !== '#';

  return (
    <div className="project-card">
      <img src={image} alt={`Imagem de destaque: ${title}`} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <span className="project-source">{source} {date && `| ${date}`}</span>
        <p>{description}</p>
        <div className="project-techs">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {hasValidLink ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {ctaLabel}
            </a>
          ) : (
            <span className="btn btn-primary btn-disabled">{ctaLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
