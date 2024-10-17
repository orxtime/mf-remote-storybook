import React, { FC, useCallback, useState } from "react";

export interface UICounterProps {}

export const UICounter: FC<UICounterProps> = ({}) => {
  const [counter, setCounter] = useState(0);

  const onClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div
      role="button"
      className="p-3 bg-yellow-300 cursor-pointer"
      onClick={() => onClick()}
    >
      {counter}
    </div>
  );
};

export default UICounter;
