const path = require('path')
const root = process.env.PWD
module.exports = {
  title: 'Ivory UI Factory',
  template: {
    favicon: `/public/favicon.ico`
  },
  skipComponentsWithoutExample: true,
  webpackConfig: require('react-scripts/config/webpack.config'),
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath).split('ui/')[1]
    return `import ${name} from @ivoryio/${dir}`
  },
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
  handlers: componentPath =>
    require('react-docgen').defaultHandlers.concat(
      (documentation, path) => {
        // Calculate a display name for components based upon the declared class name.
        if (
          path.value.type === 'ClassDeclaration' &&
          path.value.id.type === 'Identifier'
        ) {
          documentation.set('displayName', path.value.id.name)

          // Calculate the key required to find the component in the module exports
          if (path.parentPath.value.type === 'ExportNamedDeclaration') {
            documentation.set('path', path.value.id.name)
          }
        }

        // The component is the default export
        if (path.parentPath.value.type === 'ExportDefaultDeclaration') {
          documentation.set('path', 'default')
        }
      },

      require('react-docgen-displayname-handler').createDisplayNameHandler(
        componentPath
      )
    ),
  propsParser (filePath, source, resolver, handlers) {
    return require('react-docgen').parse(source, resolver, handlers)
  },
  // ribbon: {
  //   // Link to open on the ribbon click (required)
  //   url: 'https://github.com/ivoryio/factory',
  //   // Text to show on the ribbon (optional)
  //   text: 'Fork me on GitHub'
  // },
  sections: [
    {
      name: 'Introduction',
      content: `${root}/docs/introduction.md`
    },
    {
      name: 'Documentation',
      content: `${root}/docs/documentation.md`,
      sections: [
        {
          name: 'Installation',
          content: `${root}/docs/installation.md`
        },
        {
          name: 'Configuration',
          content: `${root}/docs/configuration.md`
        }
      ]
    },
    {
      name: 'UI Components',
      content: `${root}/docs/ui.md`,
      sections: [
        {
          name: 'Atoms',
          content: `${root}/docs/atomic_design.md`,
          components: `${root}/src/ui/atoms/*/*.js`
        },
        {
          name: 'Molecules',
          content: `${root}/docs/atomic_design.md`,
          components: `${root}/src/ui/molecules/*/*.js`
        },
        {
          name: 'Organisms',
          content: `${root}/docs/atomic_design.md`,
          components: `${root}/src/ui/organisms/*/*.js`
        }
      ],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    }
  ]
}
