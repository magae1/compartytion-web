import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import BaseInput from "@/components/BaseInput";

const meta = {
  title: "Components/BaseInput",
  component: BaseInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, { args }) => (
      <div style={{ width: "320px" }}>{<Story args={args} />}</div>
    ),
  ],
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    name: "email",
    label: "이메일",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("이메일")).toBeInTheDocument();
  },
};
