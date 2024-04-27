import { InputField } from "@/components/form/input-field";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Form/InputField",
  component: InputField,
  args: { onClick: fn() },
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text here",
  },
};

export default meta;
