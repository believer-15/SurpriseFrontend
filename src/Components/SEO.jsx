import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, name, type }) => {
  // Structured data for a beauty business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Surprise Beauty & Wellness",
    "description": description,
    "image": "https://your-domain.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Xyzae erdnem",
      "addressLocality": "asdfghjklt",
      "addressRegion": "qasdfghjkl",
      "postalCode": "274301",
      "addressCountry": "India"
    },
    "email": "Info@surprise.com",
    "url": "https://your-domain.com",
    "telephone": "YOUR_PHONE_NUMBER",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/your-page",
      "https://www.instagram.com/your-page",
      "https://twitter.com/your-page"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Skin Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facial Treatment",
                "description": "Professional facial treatments for radiant and healthy skin"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Hair Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hair Styling",
                "description": "Professional hair styling services for all occasions"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Body Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Body Treatments",
                "description": "Comprehensive body care treatments for total wellness"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Nail Care Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nailcare",
                "description": "Professional nail care and treatment services"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Makeup Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Makeup",
                "description": "Expert makeup services for any occasion, creating flawless looks"
              }
            }
          ]
        }
      ]
    },
    "slogan": "FLAWLESS LOOK FOR FLAWLESS MOMENT",
    "keywords": [
      "beauty salon",
      "skin care",
      "hair styling",
      "body care",
      "makeup services",
      "nail care",
      "facial treatments",
      "professional makeup",
      "wellness spa",
      "beauty services"
    ],
    "areaServed": {
      "@type": "City",
      "name": "asdfghjklt"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

SEO.defaultProps = {
  type: 'website',
};

export default SEO; 