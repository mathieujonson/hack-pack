# Hack Pack [![Build Status](https://travis-ci.org/mathieujonson/hack-pack.svg?branch=master)](https://travis-ci.org/mathieujonson/hack-pack)

### Getting Started

To get started, we'll need to install [node](https://nodejs.org/en/download/).  We'll also need Firebase CLI installed:
  `npm install -g firebase-tools`

Clone and install the repo.  Navigate to the directory where you want the project to live, and run:
  `git clone https://github.com/mathieujonson/hack-pack.git && cd hack-pack && npm install`


### Common commands

- To get a local up and running, we'll need to start two processes in terminal windows:

  `npm run watch-css` in the first window

  `npm run dev` -     in the second window

- To deploy to production we'll need to build first, then deploy:

  `npm run build`

  `firebase deploy`

### Organization

Each component folder should contain its own tests and styles.  Related components should be nested within the initial component.  If a component can be shared, it should be saved in the `Shared` folder.  It should look something like this:

```
|-- src
    |-- components
        |-- ExampleComponent
            |-- ExampleComponent.js
            |-- index.test.js
            |-- index.scss
        |-- Shared
            |-- SharedExample
                |-- SharedExample.js
                |-- index.test.js
                |-- index.scss
```