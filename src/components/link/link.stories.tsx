import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Link } from "@/components/link/link";

const meta = {
  title: "Components/Link",
  component: Link,
  args: {},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "example_link",
    children: "Link",
  },
};

export default meta;
