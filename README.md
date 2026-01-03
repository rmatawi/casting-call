# Casting Call – Onder de Paramariboom

A cinematic landing page for an open casting call for the Dutch-language feature film "Onder de Paramariboom", based on the book by Johan Fretz and directed by Safi Graauw.

## Features

- **Cinematic Design**: Warm color palette with deep greens, earthy browns, and soft gold accents
- **Mobile-First**: Fully responsive design optimized for all devices
- **Accessible**: WCAG compliant with proper focus states and reduced-motion support
- **Dutch Language**: All content in Dutch for Surinamese audience
- **Form Ready**: Placeholder for Google Forms integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Adding Your Studio Logo

To add your studio logo:

1. Place your logo file (PNG, SVG, or JPG) in the `public` folder (e.g., `public/logo.png`)
2. Open `src/components/Hero.jsx`
3. Replace the logo placeholder with:

```jsx
<div className="logo-placeholder">
  <img src="/logo.png" alt="Studio Logo" className="studio-logo" />
</div>
```

The logo will automatically be sized appropriately with a maximum width/height of 180px.

## Adding the Book Cover Image

To add the book cover image:

1. Place your book cover file (PNG, JPG, or WEBP) in the `public` folder (e.g., `public/book-cover.jpg`)
2. Open `src/components/AboutFilm.jsx`
3. Replace the book cover placeholder with:

```jsx
<div className="book-cover-placeholder">
  <img src="/book-cover.jpg" alt="Onder de Paramariboom Book Cover" className="book-cover-image" />
</div>
```

The book cover will automatically be sized appropriately with a maximum width of 300px and height of 450px.

## Adding Person Photos (Johan Fretz & Safi Graauw)

To add photos of the author and director:

1. Place your photo files in the `public` folder (e.g., `public/johan-fretz.jpg`, `public/safi-graauw.jpg`)
2. Open `src/components/AboutFilm.jsx`
3. Replace the photo placeholders with:

For Johan Fretz:
```jsx
<div className="person-photo-placeholder">
  <img src="/johan-fretz.jpg" alt="Johan Fretz" className="person-photo" />
</div>
```

For Safi Graauw:
```jsx
<div className="person-photo-placeholder">
  <img src="/safi-graauw.jpg" alt="Safi Graauw" className="person-photo" />
</div>
```

The photos will be displayed as circular images (80x80px) with a subtle border.

## Updating the Google Form Link

The application form is already integrated and links to: https://forms.gle/8nQrt7MHxjwFQvaH9

To update the form link:

1. Open `src/components/HowToApply.jsx`
2. Find the `<a>` tag with `href="https://forms.gle/8nQrt7MHxjwFQvaH9"`
3. Replace with your new Google Form URL

```jsx
<a
  href="YOUR_GOOGLE_FORM_URL"
  target="_blank"
  rel="noopener noreferrer"
  className="form-button"
>
  Open aanmeldingsformulier
</a>
```

Note: The form opens in a new tab because Google Forms with file upload fields cannot be embedded.

## Project Structure

```
casting-call/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Hero section with main title and CTA
│   │   ├── Hero.css
│   │   ├── AboutFilm.jsx         # Film information section
│   │   ├── AboutFilm.css
│   │   ├── WhoCanApply.jsx       # Eligibility criteria
│   │   ├── WhoCanApply.css
│   │   ├── HowToApply.jsx        # Application steps and form
│   │   ├── HowToApply.css
│   │   ├── CallToAction.jsx      # Final CTA section
│   │   └── CallToAction.css
│   ├── App.jsx                   # Main app component
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles and CSS variables
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-deep-green: #2d4a3e;
  --color-forest: #3d5a4c;
  --color-earth-brown: #8b6f47;
  --color-gold: #d4a574;
  --color-soft-gold: #e8d5b7;
  --color-cream: #f5f1e8;
}
```

### Typography

The project uses:
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

Both fonts are loaded from Google Fonts in `index.html`.

### Content

Edit the Dutch content directly in each component file:
- `Hero.jsx` - Main title and introduction
- `AboutFilm.jsx` - Film synopsis and details
- `WhoCanApply.jsx` - Eligibility criteria
- `HowToApply.jsx` - Application steps
- `CallToAction.jsx` - Final call to action

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS Grid and Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for the casting call of "Onder de Paramariboom".
