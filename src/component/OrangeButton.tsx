import { buttonClassName } from "../utils";
import Button, { ButtonProps } from "./Button";

const OrangeButton = ({
  selected,
  className,
  ...props
}: ButtonProps & { selected?: boolean }) => {
  return (
    <Button
      className={
        selected
          ? `bg-gray-100 text-orange-400 ${buttonClassName}`
          : `bg-orange-400 text-white ${buttonClassName}`
      }
      {...props}
    />
  );
};

export default OrangeButton;
