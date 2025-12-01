# SLEM MULTI SERVICE - Construction Materials & Logistics

Professional website for SLEM MULTI SERVICE NIG. LTD., a premier construction materials and logistics company based in Osun State, Nigeria.

## Features

- **Service Catalog**: Display of 5 core services (Granite, Stone Dust, Hardcore, Asphalt, Truck Hiring)
- **Service Booking System**: Integrated form for customers to request services via Formspree
- **Image Gallery**: Showcase of company operations and projects
- **Responsive Design**: Mobile-first design with excellent UX on all devices
- **SEO Optimized**: Proper meta tags and structured data
- **AI Chatbot**: Gemini-powered chatbot for customer support
- **Smooth Animations**: 3D cube disintegration slider, menu animations, and transitions

## Tech Stack

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM 6.28.0
- **Icons**: Lucide React 0.344.0
- **Build Tool**: Vite 6.2.0
- **Form Submission**: Formspree
- **AI Integration**: Google Gemini API
- **Deployment**: Static site (Vercel)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Slemmultiservice/slemmultiservice.git
   cd slemmultiservice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your Gemini API key:
   ```bash
   cp .env.example .env
   ```
   
   Then add your API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx           # Landing page with hero, services preview, booking CTA
│   ├── Services.tsx       # Detailed service catalog
│   ├── About.tsx          # Company information and gallery
│   ├── Contact.tsx        # Contact form
│   ├── Booking.tsx        # Service booking form
│   └── ThankYou.tsx       # Booking confirmation page
├── components/
│   ├── Layout.tsx         # Navbar, footer, mobile menu
│   ├── ImageSlider.tsx    # 3D cube animation slider
│   ├── ChatBot.tsx        # Gemini AI chatbot
│   └── SEOHead.tsx        # Meta tags management
├── services/
│   └── geminiService.ts   # Gemini API integration
├── constants.ts           # Company information
├── types.ts               # TypeScript interfaces
└── App.tsx               # Main routing configuration
```

## Color Scheme

- **Primary**: #003366 (Navy Blue)
- **Accent**: #ED8936 (Warm Orange)
- **Surface**: #F9FAFB (Light Grey)

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production-ready files.

## Deployment

The app is ready to deploy on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting provider

For Vercel:
```bash
npm i -g vercel
vercel
```

## Company Information

**SLEM MULTI SERVICE NIG. LTD.**
- RC Number: 1856922
- Location: Osun State, Nigeria
- Services: Construction materials supply and logistics

## Contact

- Phone: +234-803-571-2004, +234-816-456-8851
- Email: info@slem.com
- Address: Osogbo, Osun State, Nigeria

## License

All rights reserved - SLEM MULTI SERVICE NIG. LTD.

---

Built with React, TypeScript, and Tailwind CSS ❤️
