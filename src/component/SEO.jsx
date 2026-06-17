// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "VAE Maroc | Validation des Acquis de l'Expérience - IFDCE",
  description = "Validation des Acquis de l'Expérience (VAE) au Maroc. Obtenez votre diplôme Technicien, Licence, Master ou Doctorat grâce à votre expérience professionnelle. Reconnaissance officielle des compétences par l'État.",
  keywords = "Validation des Acquis de l'Expérience, VAE Maroc, obtenir diplôme par expérience, reconnaissance compétences professionnelles, validation compétences, VAE technicien, VAE licence, VAE master, VAE doctorat, diplôme par l'expérience, IFDCE VAE",
  image = "https://ifdce.ma/assets/logofdce.png",
  url = "https://ifdce.ma/validation-acquis-experience",
  type = "website",
  isVAEPage = false,
  isHomePage = false
}) {
  // Construction du titre en fonction du type de page
  let fullTitle;
  if (isVAEPage) {
    fullTitle = `VAE Maroc | Validation des Acquis de l'Expérience - IFDCE`;
  } else if (isHomePage) {
    fullTitle = `IFDCE Maroc - Formation professionnelle et VAE | Validation des Acquis de l'Expérience`;
  } else if (title.includes('VAE') || title.includes('Validation')) {
    fullTitle = title;
  } else {
    fullTitle = `${title} | IFDCE Maroc - VAE et Formations professionnelles`;
  }

  // Mots-clés VAE enrichis
  const vaeKeywords = [
    "Validation des Acquis de l'Expérience",
    "VAE Maroc", 
    "obtenir diplôme par expérience",
    "reconnaissance compétences professionnelles",
    "validation compétences",
    "VAE technicien",
    "VAE licence",
    "VAE master",
    "VAE doctorat",
    "diplôme par l'expérience",
    "IFDCE VAE",
    "VAE Maroc prix",
    "VAE Maroc condition",
    "validation des acquis de l'expérience Maroc",
    "reconnaissance officielle des compétences"
  ];

  // Description VAE enrichie
  const vaeDescription = "La Validation des Acquis de l'Expérience (VAE) au Maroc vous permet d'obtenir un diplôme officiel grâce à votre expérience professionnelle. VAE accessible pour : Technicien, Technicien Spécialisé, Licence Professionnelle, Master Professionnel, Doctorat Professionnel, MPI, DBA. Reconnaissance officielle des compétences par l'État. Accompagnement personnalisé pour votre VAE.";

  const finalDescription = isVAEPage ? vaeDescription : description;
  
  const finalKeywords = isVAEPage 
    ? vaeKeywords.join(', ')
    : `${keywords}, ${vaeKeywords.join(', ')}`;

  // URL canonique pour la VAE
  const finalUrl = isVAEPage 
    ? 'https://ifdce.ma/validation-acquis-experience' 
    : url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="language" content="French" />
      <meta name="author" content="IFDCE" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="MA" />
      <meta name="geo.country" content="Morocco" />
      <meta name="geo.placename" content="Témara, Maroc" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="IFDCE - Formation et VAE au Maroc" />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:site_name" content="IFDCE - Formation professionnelle et VAE Maroc" />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="IFDCE Maroc - Formations et Validation des Acquis de l'Expérience" />
      <meta property="twitter:site" content="@IFDCE" />
      <meta property="twitter:creator" content="@IFDCE" />
      
      {/* Alternate URLs */}
      <link rel="alternate" hreflang="fr" href={finalUrl} />
      <link rel="alternate" hreflang="ar" href="https://ifdce.ma/ar" />
      
      {/* Additional SEO Tags */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Schema.org JSON-LD pour VAE */}
      {isVAEPage && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Validation des Acquis de l'Expérience (VAE)",
            "description": finalDescription,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "IFDCE",
              "url": "https://ifdce.ma",
              "logo": "https://ifdce.ma/assets/logofdce.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Morocco"
            },
            "audience": {
              "@type": "Audience",
              "name": "Professionnels avec expérience significative"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Diplômes accessibles par VAE",
              "itemListElement": [
                { "@type": "Course", "name": "Technicien par VAE", "position": 1 },
                { "@type": "Course", "name": "Technicien Spécialisé par VAE", "position": 2 },
                { "@type": "Course", "name": "Licence Professionnelle par VAE", "position": 3 },
                { "@type": "Course", "name": "Master Professionnel par VAE", "position": 4 },
                { "@type": "Course", "name": "Doctorat Professionnel par VAE", "position": 5 },
                { "@type": "Course", "name": "MPI - Master Professionnel International par VAE", "position": 6 },
                { "@type": "Course", "name": "DBA - Doctorate of Business Administration par VAE", "position": 7 }
              ]
            }
          })}
        </script>
      )}
    </Helmet>
  );
}