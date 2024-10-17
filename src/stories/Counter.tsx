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
      className={`py-1 px-4 bg-red-600 text-white cursor-pointer font-bold text-2xl inline-block select-none rounded w-24 text-center`}
      onClick={() => onClick()}
    >
      {counter}
    </div>
  );
};

export default UICounter;
