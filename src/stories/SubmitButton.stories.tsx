import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import SubmitButton from "@/components/SubmitButton";

const meta = {
  title: "Components/SubmitButton",
  component: SubmitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, { args }) => (
      <div style={{ height: "40px" }}>
        <Story args={args} />
      </div>
    ),
  ],
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: {
      default: "제출하기",
      pending: "제출 중",
    },
    mt: "mt-0",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("제출하기")).toBeInTheDocument();
  },
};

export const Secondary: Story = {
  args: {
    label: {
      default: "로그인",
      pending: "로그인 중...",
    },
    mt: "mt-0",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("로그인")).toBeInTheDocument();
  },
};
