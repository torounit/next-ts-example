import React from "react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = (): JSX.Element => <Button primary label="ボターン" />;
