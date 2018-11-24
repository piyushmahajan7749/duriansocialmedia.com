# Durian Social Media

Social media marketing agency

- TailwindCSS & Emotion
- React Spring
- Playful & Colorful One-Page website with Parallax effect

Based on [gatsby-tailwind-demo](https://github.com/jlengstorf/gatsby-tailwind-demo).

## Features

- Gatsby v2.0.0
- [React Spring](https://github.com/drcmda/react-spring) (Used for Parallax effect)
- [TailwindCSS](https://tailwindcss.com/) & [Emotion](https://emotion.sh/) for styling
    - Use the full power of TailwindCSS while generating small styles (as unused data gets deleted)
- SEO
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- [Typefaces](https://github.com/KyleAMathews/typefaces) for quicker font loading
- Offline Support
- WebApp Manifest Support
- Responsive images
    - The right image size for every screen size
    - Traced SVG Loading (Lazy-Loading)
    - WebP Support

**Please note:** The parallax effect can be quite heavy for some older CPUs and the site uses some newer CSS features which will result in incompatibility with older browsers.

### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

### Typography

Instead of relying on Google's CDN to host its fonts, this site self-hosts the fonts and therefore benefits from increased performance. The installed fonts can be found in `src/pages/index.jsx`:

```JSX
import 'typeface-cantata-one';
import 'typeface-open-sans';
```

This starter uses [typefaces](https://github.com/KyleAMathews/typefaces) by Kyle Mathews. Have a look at the repository if you want to install & use other fonts.

You'll also need to configure `fonts` in `tailwind.js` to reflect the changes. You then can use the fonts with `font-sans` and `font-serif`.
