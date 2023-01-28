import { FC, useState } from "react";
import "./App.css";

import { IconType } from "react-icons";
import {
  RiDivideLine,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
  RiPercentLine,
} from "react-icons/ri";
import { TbEqual } from "react-icons/tb";
import { formatNum, range } from "./utils";
import GrayButton from "./component/GrayButton";
import OrangeButton from "./component/OrangeButton";
import ZeroButton from "./component/ZeroButton";
import AllClearButton from "./component/AllClearButton";
import PercentButton from "./component/PercentButton";
type Operator = "add" | "subtract" | "multiply" | "divide";
const operatorToIcon: { [op in Operator]: IconType } = {
  divide: RiDivideLine,
  multiply: RiCloseLine,
  subtract: RiSubtractLine,
  add: RiAddLine,
} as const;

const App: FC = () => {
  const [displayNum, setDisplayNum] = useState("0");
  const [prevNum, setPrevNum] = useState(0);
  const [selectedOp, setSelectedOp] = useState<Operator | null>(null);
  const [operation, setOperation] = useState<Operator | null>(null);

  const clear = () => {
    setDisplayNum("0");
    setPrevNum(0);
    setSelectedOp(null);
    setOperation(null);
  };

  const handlePressNumBtn = (input: number | string) => {
    setDisplayNum((curr) => {
      const inputStr = input.toString();
      if ((curr === "0" || !!selectedOp) && input !== ".") return inputStr;
      return curr + inputStr;
    });
    if (selectedOp) {
      setSelectedOp(null);
      setOperation(selectedOp);
    }
  };

  const calculate = () => {
    const currNum = Number(displayNum);
    let result: number;
    switch (operation) {
      case "divide":
        result = prevNum / currNum;
        break;
      case "multiply":
        result = prevNum * currNum;
        break;
      case "subtract":
        result = prevNum - currNum;
        break;
      case "add":
        result = prevNum + currNum;
        break;
      default:
        return;
    }
    setDisplayNum(result.toString());
    setPrevNum(result);
    setOperation(null);
    setSelectedOp(null);
    return result;
  };

  const handlePressOperationBtn = (operator: Operator | null) => {
    const result = calculate();
    setSelectedOp(operator);
    setPrevNum(result ?? Number(displayNum));
  };

  const percent = () => {
    prevNum
      ? setDisplayNum(((Number(displayNum) / 100) * prevNum).toString())
      : setDisplayNum((Number(displayNum) / 100).toString());
  };

  const digitButton = (start: number, end: number) => {
    return range(start, end).map((num) => (
      <GrayButton onClick={() => handlePressNumBtn(num)} key={num}>
        {num}
      </GrayButton>
    ));
  };

  const operationButton = (operator: Operator, selected: boolean) => {
    const Icon = operatorToIcon[operator];
    return (
      <OrangeButton
        onClick={() => handlePressOperationBtn(operator)}
        selected={selected}
      >
        <Icon />
      </OrangeButton>
    );
  };

  return (
    <div>
      <div className="bg-[#333] grid place-content-center p-4 h-screen">
        <div className="grid gap-y-8">
          <div className="text-white text-7xl text-end font-light">
            {formatNum(Number(displayNum))}
          </div>
          <div className="grid grid-cols-calculator auto-rows-calculator gap-2">
            <AllClearButton onClick={clear}>AC</AllClearButton>
            <PercentButton onClick={percent}>
              <RiPercentLine />
            </PercentButton>
            {operationButton("divide", selectedOp === "divide")}
            {digitButton(7, 9)}
            {operationButton("multiply", selectedOp === "multiply")}
            {digitButton(4, 6)}
            {operationButton("subtract", selectedOp === "subtract")}
            {digitButton(1, 3)}
            {operationButton("add", selectedOp === "add")}
            <ZeroButton onClick={() => handlePressNumBtn(0)}>0</ZeroButton>
            <GrayButton
              onClick={() => handlePressNumBtn(".")}
              disabled={!!displayNum.match(/\./)}
            >
              .
            </GrayButton>
            <OrangeButton onClick={calculate}>
              <TbEqual />
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
