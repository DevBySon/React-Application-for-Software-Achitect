import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button/button";
import { fn } from "@storybook/test";
import { PlusIcon } from "@storybook/icons";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    type: "button",
    variant: "solid",
    onClick: fn(),
  },
};

export const WithIcon: Story = {
  args: {
    children: "Click me",
    icon: <PlusIcon />,
  },
};

export default meta;
