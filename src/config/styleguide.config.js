const path = require('path')
const root = process.env.PWD
const docgen = require('react-docgen')
const docgenDisplayNameHandler = require('react-docgen-displayname-handler')
module.exports = {
  // #region preferences
  title: 'Ivory UI Factory',
  template: {
    favicon: 'favicon.ico'
  },
  assetsDir: `${root}/public`,
  skipComponentsWithoutExample: true,
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath).split('ui/')[1]
    return `import ${name} from @ivoryio/ui/${dir}`
  },

  // #endregion
  // #region config
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true // Set this to use styled-components in mocks
    }
  },
  webpackConfig: require('react-scripts/config/webpack.config'),
  handlers: componentPath =>
    docgen.defaultHandlers.concat(
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
      ),
      docgenDisplayNameHandler.createDisplayNameHandler(componentPath)
    ),
  propsParser (filePath, source, resolver, handlers) {
    return docgen.parse(source, resolver, handlers)
  },
  styleguideComponents: {
    Wrapper: path.join(root, 'src/ui/components/Wrapper')
  },
  // #endregion
  // #region sidemenu
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
  // #endregion
}
