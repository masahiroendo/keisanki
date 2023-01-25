import { PercentButtonClassName, buttonClassName } from "../utils";
import Button, { ButtonProps } from "./Button";

const PercentButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={`${PercentButtonClassName}`} {...props} />;
};

export default PercentButton;
