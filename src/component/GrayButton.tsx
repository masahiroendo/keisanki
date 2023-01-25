import { buttonClassName } from "../utils";
import Button, { ButtonProps } from "./Button";

const GrayButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={`text-white ${buttonClassName}`} {...props} />;
};

export default GrayButton;
