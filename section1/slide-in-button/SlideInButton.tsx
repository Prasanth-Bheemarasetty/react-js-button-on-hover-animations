import "./SlideInButton.css";

interface SlideInButtonPropsType extends React.HTMLProps<HTMLParagraphElement> {
  //custom Props
  text: string;
}

export default function SlideInButton({
  text,
  ...paraProps
}: SlideInButtonPropsType) {
  return (
    <p {...paraProps} className={`${paraProps.className} pb-slide-in-btn`}>
      {text}
    </p>
  );
}
