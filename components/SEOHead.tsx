import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};