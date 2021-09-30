import "../styles/globals.css";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img alt="" {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
