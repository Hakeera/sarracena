// components/SchemaMarkup.js
import Head from 'next/head';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sarracena Uniformes",
    "url": "https://www.sarracenauniformes.com.br",
    "logo": "https://www.sarracenauniformes.com.br/midias/geral.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-16-996265295",
      "contactType": "Customer Service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://www.instagram.com/sarracenauniformes"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default SchemaMarkup;
