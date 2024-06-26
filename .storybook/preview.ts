// .storybook/preview.js

const theme = require("../src/config/theme");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  chakra: {
    theme,
  },
};
