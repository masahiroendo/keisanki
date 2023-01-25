import { zeroButtonClassName } from "../utils";
import Button, { ButtonProps } from "./Button";

const ZeroButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={`${zeroButtonClassName}`} {...props} />;
};

export default ZeroButton;
