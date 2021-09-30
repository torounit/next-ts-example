import React from "react";
import { select } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = (): JSX.Element => <Button primary label="ボターン" />;

export const Secondary = (): JSX.Element => <Button label="ボターン" />;

export const CustomBackground = (): JSX.Element => (
  <Button
    label="ボターン"
    backgroundColor={select("backgroundColor", ["#444", "#ccc"], "#444")}
  />
);
