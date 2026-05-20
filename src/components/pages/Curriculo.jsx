import { useTranslation } from 'react-i18next';
import meuCurriculoPDF from '../../assets/Curriculo - Modelo Padrão João.pdf';
import curriculoPreview from '../../assets/Boaretto-Curriculo.jpg';
import resume from '../../content/resume.json';
import './Curriculo.css';

const getLocalizedText = (value, language) => {
  if (typeof value === 'string') return value;
  return value?.[language] || value?.pt || '';
};

function Curriculo() {
  const { i18n } = useTranslation();
  const resumePdf = resume.pdfFile?.startsWith('/uploads/') ? resume.pdfFile : meuCurriculoPDF;
  const resumePreview = resume.previewImage?.startsWith('/uploads/') ? resume.previewImage : curriculoPreview;

  return (
    <div className="curriculo-card">
      <h2>{getLocalizedText(resume.title, i18n.language)}</h2>
      <p>{getLocalizedText(resume.intro, i18n.language)}</p>

      <div className="curriculo-viewer">
        <div className="pdf-embed-container">
          <embed
            src={resumePdf}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </div>
        <img
          src={resumePreview}
          alt="Prévia do currículo"
          className="pdf-preview-image"
        />
      </div>

      <a className="download-button" href={resumePdf} download={resume.downloadFileName}>
        {getLocalizedText(resume.downloadLabel, i18n.language)}
      </a>
    </div>
  );
}

export default Curriculo;
