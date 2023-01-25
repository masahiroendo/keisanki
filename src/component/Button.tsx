import React from "react";
import { buttonClassName } from "../utils";
import clsx from "clsx";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({ ...props }: ButtonProps) => {
  // return (
  //   <button
  //   //   className={clsx(
  //   //     "text-4xl rounded-full grid place-content-center w-full h-full p-4"
  //   //   )}
  //   //   {...props}
  //   // />
  // // );
  return <button className={`${buttonClassName}`} {...props} />;
};

export default Button;
