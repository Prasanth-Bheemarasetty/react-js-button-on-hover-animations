import { HTMLProps } from "react";
import "./CrossButton.css";

interface CrossButtonProsType extends HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function CrossButton({
  text,
  ...paraProps
}: CrossButtonProsType) {
  return (
    <p {...paraProps} className={`${paraProps.className} pb-cross-btn`}>
      {text}
    </p>
  );
}
