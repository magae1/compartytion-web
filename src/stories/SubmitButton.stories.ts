import SubmitButton from "@/components/SubmitButton";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/SubmitButton",
  component: SubmitButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: {
      default: "제출하기",
      pending: "제출 중"
    }
  }
};
