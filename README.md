# Unmukto.org

A community-driven initiative developing modern tools for Bengali language computing. The website serves as the landing page and project hub for Unmukto.org's open-source initiatives.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Fonts**: Space Grotesk, Inter via [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
./build.sh
```

The development server will run at [http://localhost:3000](http://localhost:3000).

## Deployment

The site is configured for GitHub Pages deployment:

1. The `build.sh` script generates static files in the `/docs` directory
2. Commits to `main` branch automatically deploy to [unmukto.org](https://unmukto.org)
3. Static assets and meta images are served from the `/public` directory

## Project Structure

- `/src/app` - Next.js app router pages and components
- `/public` - Static assets and meta images
- `/docs` - Generated static site for GitHub Pages
- `build.sh` - Build script for GitHub Pages deployment

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
