import { HTMLProps } from "react";
import "./RadialButton.css";

export interface RadialButtonPropsType extends HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function RadialButton({
  text,
  ...paraProps
}: RadialButtonPropsType) {
  return (
    <p {...paraProps} className={`${paraProps.className} pb-radial-btn`}>
      {text}
    </p>
  );
}
