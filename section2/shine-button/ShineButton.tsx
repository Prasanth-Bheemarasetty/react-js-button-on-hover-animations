import { HTMLProps } from "react";
import styles from "./ShineButton.module.css";

interface ShineButtonProsType extends HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function ShineButton({
  text,
  ...paraProps
}: ShineButtonProsType) {
  return (
    <p {...paraProps} className={`${paraProps.className} ${styles["btn"]}`}>
      {text}
    </p>
  );
}
