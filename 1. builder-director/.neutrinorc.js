const airbnbBase = require('@neutrinojs/airbnb-base');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase({
      eslint: {
        baseConfig: {
          rules: {
            "import/prefer-default-export": 'off',
          }
        }
      }
    }),
    library({
      name: 'builders-director-javascript'
    }),
    jest(),
  ],
};
