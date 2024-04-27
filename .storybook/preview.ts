import type { Preview } from "@storybook/react";

const theme = require("@/config/theme");

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    chakra: { theme },
  },
};

export default preview;
