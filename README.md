# pivotal-ui-react
React components built on top of a Bootstrap-based styleguide


##Development

This library is intimately tied to Pivotal UI and development should be done on the Pivotal UI styleguide.

To develop react components:

The first time you create a component in `src/components` 
```sh
gulp build
```
This will create a distribution folder for you with a package.json and transpile JavaScript.

While developing the component, run in the background
```sh
gulp assets
```

This will keep your built JavaScript up-to-date

To use your component in Pivotal UI, in root of your `pivotal-ui` directory, type

```sh
npm link ../path/to/pivotal-ui-react/dist/component-name
```

For example, if `pivotal-ui` and `pivotal-ui-react` are both in the same parent directory, you can link in the tooltip component with

```sh
npm link ../pivotal-ui-react/dist/tooltip
```


