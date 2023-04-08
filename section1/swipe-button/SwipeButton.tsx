import React, { Fragment } from "react";
import "./SwipeButton.css";

interface SwipeButtonPropsType extends React.HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function SwipeButton({
  text: primaryText,
  ...paraProps
}: SwipeButtonPropsType) {
  return (
    <Fragment>
      <p {...paraProps} className={`${paraProps.className} pb-swipe-btn`}>
        {primaryText}
      </p>
    </Fragment>
  );
}
