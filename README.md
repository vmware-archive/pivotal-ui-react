# pivotal-ui-react
React components built on top of a Bootstrap-based styleguide

##Usage

To include pivotal-ui-react components in your own project:

1. `npm install pivotal-ui-react.<component-name>`
1. Include the CSS manually from the [pivotal-ui git repo](https://github.com/pivotal-cf/pivotal-ui/releases). Yes, we know this is sub-optimal, we're working on it. ;)
    NB: You will need to be part of the Pivotal CF Github organization to download Pivotal UI. If you do not have access, email ask+cf@pivotal.io.
1. The components have a umd wrapper and can be loaded using any of the standard methods. We test them using CommonJS style (`require('pivotal-ui-react.<component-name>')`) loaded with [Webpack](http://webpack.github.io/docs/).

##Development

This library is intimately tied to Pivotal UI and development should be done on the Pivotal UI [styleguide](styleguide.pivotal.io).

To develop react components:

The first time you create a component in `src/<component-name>` 

```sh
gulp build
```
This will create a distribution folder for you with a package.json and transpiled JavaScript.

While developing the component, run in the background
```sh
gulp foreman
```

This will keep your built JavaScript up-to-date and launch a Jasmine server on port 8888.

To use your component in Pivotal UI, in root of your `pivotal-ui` directory, type

```sh
npm link ../path/to/pivotal-ui-react/dist/component-name
```

For example, if `pivotal-ui` and `pivotal-ui-react` are both in the same parent directory, you can link in the tooltip component with

```sh
npm link ../pivotal-ui-react/dist/tooltip
```


