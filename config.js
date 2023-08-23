const glob = require('glob');

const tokensPath = `tokens/**/*`;
const files = glob
  .sync(tokensPath)
  .map((filePath) => filePath.replace('tokens/', '').replace('.json', ''));

module.exports = {
  source: [`tokens/**/*`],
  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: `build/`,
      files: files.map((filePath) => {
        return {
          destination: `/output/${filePath}.css`,
          format: `css/variables`,
          filter: (token) => token.filePath.includes(filePath),
        };
      }),
    },
  },
};
