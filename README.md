### Next.js + Tailwind CSS template

A minimal, batteries-included starter built with Next.js App Router, Tailwind CSS v4, DaisyUI, and TypeScript. Comes preconfigured with ESLint and Prettier.

- **Framework**: Next.js 15 (App Router, `src/app`)
- **UI**: Tailwind CSS 4 + DaisyUI (themes off by default)
- **Language**: TypeScript
- **Tooling**: Turbopack dev server, ESLint, Prettier

### Requirements

- Node.js 18.18+ (or 20+ recommended)
- npm, pnpm, yarn, or bun

### Quick start

```bash
# install dependencies
npm i

# start dev server
npm run dev

# build for production
npm run build

# start production server
npm start
```

Visit `http://localhost:3000` and edit `src/app/page.tsx`. Hot reload is enabled.

### Available scripts

- `dev`: Start Next.js in development (Turbopack)
- `build`: Build the production bundle
- `start`: Start the production server
- `lint`: Run ESLint

### Project structure

```text
projectn-name/
  src/
    app/
      components/
        layout/
          Wrapper.tsx
      globals.css
      layout.tsx
      page.tsx
  tailwind.config.js
  next.config.ts
  eslint.config.mjs
  postcss.config.mjs
  tsconfig.json
```

### Styling and DaisyUI

Tailwind is configured for `./src/**/*.{js,ts,jsx,tsx}`. DaisyUI is installed and loaded with themes disabled. To enable built-in themes or define your own, edit `tailwind.config.js`:

```js
// tailwind.config.js
import daisyui from 'daisyui'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [daisyui],
  daisyui: {
    // enable built-ins: true, or specify a list: ['light', 'dark']
    themes: ['light'],
  },
}

export default config
```

To use a custom theme and match the `data-theme="customTheme"` attribute set in `src/app/layout.tsx`, define it like this:

```js
// tailwind.config.js (excerpt)
daisyui: {
  themes: [
    {
      customTheme: {
        primary: '#570DF8',
        secondary: '#F000B8',
        accent: '#37CDBE',
        neutral: '#3D4451',
        'base-100': '#FFFFFF',
      },
    },
  ],
}
```

### Deploy

- Recommended: Vercel. Build with `npm run build` and deploy the output.
- See Next.js docs for configuration notes.

### Useful links

- Next.js docs: `https://nextjs.org/docs`
- Tailwind CSS: `https://tailwindcss.com/docs`
- DaisyUI: `https://daisyui.com/`
