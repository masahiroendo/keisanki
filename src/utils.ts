export const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, i) => start + i);
};

export const formatNum = (num: number) => {
  const intl = new Intl.NumberFormat("jp-JP");
  return intl.format(num);
};

export const buttonClassName =
  "bg-gray-400 active:bg-gray-100 text-4xl rounded-full grid place-content-center w-full h-full p-4";

export const AllClearButtonClassName = `col-span-2 bg-gray-300 ${buttonClassName}`;

export const PercentButtonClassName = `bg-gray-300 text-black ${buttonClassName}`;

export const zeroButtonClassName = `col-span-2 bg-gray-400 text-white ${buttonClassName}`;
