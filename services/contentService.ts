// This service is responsible for providing the content of the website to the chatbot.
// In a real-world scenario, this could be a more sophisticated system that scrapes the website
// or uses a CMS. For now, we will read the content of the files directly.

import aboutPageContent from '../pages/About.tsx?raw';
import bookingPageContent from '../pages/Booking.tsx?raw';
import contactPageContent from '../pages/Contact.tsx?raw';
import homePageContent from '../pages/Home.tsx?raw';
import newsPageContent from '../pages/News.tsx?raw';
import servicesPageContent from '../pages/Services.tsx?raw';

const websiteContent = `
  # Website Content

  ## Home Page
  ${homePageContent}

  ## About Page
  ${aboutPageContent}

  ## Services Page
  ${servicesPageContent}

  ## Booking Page
  ${bookingPageContent}

  ## Contact Page
  ${contactPageContent}

  ## News Page
  ${newsPageContent}
`;

export const getWebsiteContent = (): string => {
  return websiteContent;
};
