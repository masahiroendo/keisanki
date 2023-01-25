import { AllClearButtonClassName, buttonClassName } from "../utils";
import Button, { ButtonProps } from "./Button";

const AllClearButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={`${AllClearButtonClassName}`} {...props} />;
};

export default AllClearButton;
