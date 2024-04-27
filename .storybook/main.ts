import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const toPath = (_path: string) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: { autodocs: "tag" },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve!.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
  staticDirs: ["../public"],
};
export default config;
