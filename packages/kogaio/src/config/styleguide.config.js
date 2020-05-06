const path = require('path')
const root = process.env.PWD
const docgen = require('react-docgen')
const pkgVersion = require(`${root}/package.json`).version
const docgenDisplayNameHandler = require('react-docgen-displayname-handler')

module.exports = {
  // #region preferences
  title: 'Kogaio',
  version: `v${pkgVersion}`,
  assetsDir: `${root}/public`,
  template: {
    favicon: 'favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href:
            'https://fonts.googleapis.com/css?family=Rubik:300,400,700|Open+Sans:300,400'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    },
    trimWhitespace: true
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Rubik, sans-serif, -apple-system, BlinkMacSystemFont'
      }
    }
  },
  styleguideDir: `${root}/build`,
  skipComponentsWithoutExample: true,
  getExampleFilename (componentPath) {
    return componentPath.replace(/(\.[a-zA-Z]+)?(.jsx|.js)$/, '.examples.mdx')
  },
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath).split('lib/')[1]
    const trimmedName = name.split('.')[0]
    const fileName = dir.includes('Responsive')
      ? `{ ${trimmedName} }`
      : `${trimmedName}`
    return `import ${fileName} from @ivoryio/kogaio/${dir}`
  },
  // #endregion
  // #region config
  compilerConfig: {
    transforms: {
      modules: false,
      dangerousTaggedTemplateString: true
    }
  },
  webpackConfig: require('react-scripts/config/webpack.config')('development'),
  moduleAliases: {
    '@ivoryio/kogaio': path.resolve(root, 'src/lib')
  },
  handlers: componentPath =>
    require('react-docgen').defaultHandlers.concat(
      (documentation, path) => {
        const {
          value: { type, id },
          parentPath
        } = path
        // Calculate a display name for components based upon the declared class name.
        if (type === 'ClassDeclaration' && type === 'Identifier') {
          documentation.set('displayName', id.name)

          // Calculate the key required to find the component in the module exports
          if (parentPath.value.type === 'ExportNamedDeclaration') {
            documentation.set('path', id.name)
          }
        }

        // The component is the default export
        if (parentPath.value.type === 'ExportDefaultDeclaration') {
          documentation.set('path', 'default')
        }
      },
      require('react-docgen-external-proptypes-handler')(componentPath),
      docgenDisplayNameHandler.createDisplayNameHandler(componentPath)
    ),
  propsParser (filePath, source, resolver, handlers) {
    return docgen.parse(source, resolver, handlers)
  },
  styleguideComponents: {
    Wrapper: path.join(root, 'src/components/Wrapper')
  },
  ribbon: {
    url:
      'https://github.com/ivoryio/factory/tree/master/packages/kogaio#introduction',
    text: 'Find me on GitHub'
  },
  // #endregion
  // #region sidemenu
  sections: [
    {
      name: 'Introduction',
      content: `${root}/docs/introduction.mdx`
    },
    {
      name: 'Documentation',
      content: `${root}/docs/documentation.mdx`,
      sections: [
        {
          name: 'Installation',
          content: `${root}/docs/installation.mdx`
        },
        {
          name: 'Configuration',
          content: `${root}/docs/configuration.mdx`
        }
      ]
    },
    {
      name: 'Contents',
      sections: [
        {
          name: 'Atoms',
          components: `${root}/src/lib/*/+([a-zA-Z])*.+(atom).{js,jsx}`
        },
        {
          name: 'Molecules',
          components: `${root}/src/lib/*/+([a-zA-Z])*.+(molecule).{js,jsx}`
        },
        {
          name: 'Organisms',
          components: `${root}/src/lib/*/+([a-zA-Z])*.+(organism).{js,jsx}`
        },
        {
          name: 'Responsive',
          components: `${root}/src/lib/Responsive/+([a-zA-Z])*.{js,jsx}`
        }
      ],
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Footer',
      sections: [
        {
          name: 'Theme Schema',
          content: `${root}/docs/theme.mdx`
        }
      ]
    }
  ]
  // #endregion
}
