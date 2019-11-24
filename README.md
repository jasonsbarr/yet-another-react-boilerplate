# Yet Another React Boilerplate

A (very opinionated) React SPA project boilerplate built with Webpack that includes:

- Dynamic, client-side routing
- Modular state management _without_ a ton of boilerplate
- A functional reducer factory with a `setState` helper
- Styling with Sass, CSS-in-JS, or both
- Automatic loading for both external and self-hosted webfonts
- Linting for both styles and JS/JSX
- Automatic code formatting
- Testing with reasonable defaults
- Pre-commit hooks
- Optimized, responsive images
- Code splitting optimized for modern HTTP/2 clients
- Improved bundle cacheability for better performance
- Separate configs for dev and prod environments

Plus there's no need to "eject" to add your own configuration; you can just edit the config files and go.

## React packages

### State management: Conflux

From the [Conflux README](https://github.com/dustinmyers/react-conflux):

> Conflux is a modularized state management system utilizing the Context API and React Hooks for the React ecosystem. It provides predictable and optionally-nested state containers for applications in an elegant, streamlined, and developer-friendly manner.

Conflux allows you to define `StateProvider` wrappers for any component tree in your application.

You can use it to define a global state like you would with Redux, but you can also define state that encompasses a particular component tree when nested children need the state values but making it global would be overkill.

You can also mix-and-match as needed.

### Routing: React Router

With the new hooks available in v5.1 and upcoming plans to merge in Reach Router's API, [React Router](https://reacttraining.com/react-router/) was an easy decision. Flexible client-side routing with the ability to use routes just as you would any other component.

### Styling: Emotion

[Emotion](https://emotion.sh/docs/introduction) provides advanced styling capabilities with all the power of JavaScript, powerful built-in composition tools, and a great developer experience with source maps, testing utilities, and more.

I've added both the core package with the `css` prop and the `styled` higher-order component interface.

## Sensible code organization

The `src` directory is divided into multiple predefined subdirectories for you to store your action creators, layouts, and more.

You can organize these any way you like, but the initial file structure gives you a reasonable starting point.

### The `src` directory contents

The components directory has the `App` component in its own subdirectory, with all its necessary files contained together. Then the `App` subdirectory has its own `index.js` file that exports the main component to provide an elegant interface for the rest of the application.

Each utility directory has an `index.js` file you can use to streamline the interface for the rest of the application as well, with some examples to give you an idea of how to do it. The examples will also show you how to use the included packages like Conflux and React Router.

Of course, you are completely free to ignore my suggestions and structure things however you like; it's your project.

## Developer experience enhancements

- Supports JSX and both the latest JavaScript standards and Stage 4 proposals, as well as the popular Class Properties, Decorators, Dynamic Import, and BigInt late-stage TC39 proposals via Babel
- WebFontLoader for easy web font use, both from external sources like Google Fonts and those hosted on your own server
- Emotion JSX transformation built-in via Babel so you don't have to manually define the `@jsx` pragma in every component you style
- Automatically loads imported CSS and Sass files into the build so you can choose how you want to write your styles
- Automatic browser style normalization, vendor prefixing, and browser support polyfills with fixes for known browser CSS bugs
- Preset `start` script loads Webpack Dev Server with live refresh in your default browser so you can see updated changes every time you edit your code (plus hot module replacement is a cinch to set up)
- Automated linting, formatting, and testing as a pre-commit hook so you never have to worry about accidentally submitting ugly, broken code
- It's easy to remove the pre-commit hook if you'd rather take a chance than have that peace of mind ;)
- Minimal ESLint config means you can define a style guide you're familiar with without having to rewrite the whole `.eslintrc` file
- Just about any optimization you might need for production is already configured (except static page generation, but that's in the works)
- Source maps for debugging in both dev and prod environments

## Production build optimizations

- Aggressive image compression and automatic generation of responsive image sizes
  - Uses:
  - Url loader (to inline small images)
  - SVG url loader (to inline small SVG images)
  - Imagemin Webpack plugin
  - PNGQuant
  - OptiPNG
  - Gifsicle
  - SVGo
  - MozJPG
  - Sharp
  - Responsive loader
- Minification of both JavaScript and generated CSS code
  - Uses:
  - Terser Webpack plugin
  - Optimize CSS assets Webpack plugin
- Tree-shaking for JS, and purging for unused CSS using Webpack built-ins and Purge CSS Webpack plugin
- Aggressive code splitting to take advantage of modern HTTP/2 clients' higher request concurrency

## Installation

Currently the only way to install is to download/clone the repo from Github:

```bash
git clone --depth=1 git@github.com:jasonsbarr/yet-another-react-boilerplate.git [folder-name]

npm install
# or
yarn
```

The `master` branch should contain the most recent version, or if you like to live dangerously you can checkout the `develop` branch for the latest, literally up-to-the-minute changes.

A CLI client is in the works. Among other things, it will allow you to choose whether or not to include the pre-commit hook for linting and testing.

## Contributing

Simply submit a PR and let's talk! If you have an idea but not a fully-formed code solution, either an issue or draft PR will do.

## Author

Jason Barr (jason@jasonsbarr.com)

## Copyright and license info

&copy; 2019 by Jason Barr. [Released under the MIT license](./LICENSE).
