// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "IFDCE - Institut de Formation et Développement des Compétences",
  description = "IFDCE Maroc propose des formations diplômantes en ligne : Technicien, Master, VAE. Formations certifiées pour l'Afrique, accompagnement personnalisé.",
  keywords = "IFDCE Maroc, formation en ligne Maroc, diplôme Afrique, VAE Maroc, technicien Maroc, master Maroc",
  image = "https://ifdce.ma/assets/logofdce.png",
  url = "https://ifdce.ma",
  type = "website"
}) {
  const siteTitle = "IFDCE Maroc - Institut de Formation et Développement des Compétences";
  const fullTitle = title === "IFDCE - Institut de Formation et Développement des Compétences" ? 
    `${title} | Maroc` : `${title} | IFDCE Maroc`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="geo.region" content="MA" />
      <meta name="geo.country" content="Morocco" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_MA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}