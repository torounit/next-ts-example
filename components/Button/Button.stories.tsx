import React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AddIcon from "@material-ui/icons/Add";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

export const Default = (): JSX.Element => (
  <Button
    primary={boolean("primary", true)}
    size={select("size", ["small", "medium", "large"], "medium")}
  >
    ぼたーん
  </Button>
);

export const Primary = (): JSX.Element => <Button primary>ぼたーん</Button>;

export const Secondary = (): JSX.Element => <Button>ぼたーん</Button>;

export const CustomBackground = (): JSX.Element => (
  <Button backgroundColor={text("backgroundColor", "#444")}>
    ぼたーん
  </Button>
);

export const Sizes = (): JSX.Element => (
  <div>
    <p>
      <Button size="small">ぼたーん</Button>
    </p>
    <p>
      <Button size="medium">ぼたーん</Button>
    </p>
    <p>
      <Button size="large">ぼたーん</Button>
    </p>
  </div>
);

export const WithIcons = (): JSX.Element => (
  <div>
    <p>
      <Button startIcon={<ArrowRightIcon />}>ぼたーん</Button>
    </p>
    <p>
      <Button endIcon={<ArrowRightIcon />}>ぼたーん</Button>
    </p>
    <p>
      <Button startIcon={<ArrowRightIcon />} endIcon={<AddIcon />}>
        ぼたーん
      </Button>
    </p>
  </div>
);
