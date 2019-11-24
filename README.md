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

## React Packages

### State management: Conflux

From the [Conflux README](https://github.com/dustinmyers/react-conflux):

> Conflux is a modularized state management system utilizing the Context API and React Hooks for the React ecosystem. It provides predictable and optionally-nested state containers for applications in an elegant, streamlined, and developer-friendly manner.

Conflux allows you to define `StateProvider` wrappers for any component tree in your application.

You can use it to define a global state like you would with Redux, but you can also define state that encompasses a particular component tree when nested children need the state values but making it global would be overkill.

You can also mix-and-match as needed.

### Routing: React Router

With the new hooks available in v5.1 and upcoming plans to merge Reach Router's API into React Router, this was an easy decision. Flexible client-side routing with the ability to use routes just as you would any other component.

### Styling: Emotion
