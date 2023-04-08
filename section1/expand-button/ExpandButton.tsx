import { HTMLProps } from "react";
import "./ExpandButton.css";

interface ExpandButtonPropsType extends HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function ExpandButton({
  text,
  ...paraProps
}: ExpandButtonPropsType) {
  return (
    <p {...paraProps} className={`${paraProps.className} pb-expand-btn`}>
      {text}
    </p>
  );
}
