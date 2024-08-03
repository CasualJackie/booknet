"use client";
import classNames from "classnames";
import { useState } from "react";
import ArrowLeft from "@/assets/svg/arrow-left.svg";

const DIVIDER = "divider";
const ARROW = "arrow";
const ACTIVE = "active";

type Props = {
  kind: typeof DIVIDER | typeof ARROW | typeof ACTIVE;
  firstText: React.ReactNode;
  lastText?: React.ReactNode;
  onFirstClick: () => void;
  onLastClick: () => void;
};

export function Toggle({
  kind,
  firstText,
  lastText,
  onFirstClick,
  onLastClick,
}: Props) {
  const [isActiveLeft, setIsActiveLeft] = useState(false);

  const render = () => {
    switch (kind) {
      case ACTIVE:
        return (
          <>
            <Button
              position="left"
              isActive={isActiveLeft}
              onClick={() => {
                setIsActiveLeft(true);
                onFirstClick?.();
              }}
            >
              {firstText}
            </Button>
            <Button
              position="right"
              isActive={!isActiveLeft}
              onClick={() => {
                setIsActiveLeft(false);
                onLastClick?.();
              }}
            >
              {lastText}
            </Button>
          </>
        );
      case DIVIDER:
        return (
          <>
            <Button
              position="left"
              onClick={() => {
                setIsActiveLeft(true);
                onFirstClick?.();
              }}
            >
              {firstText}
            </Button>
            <hr className="dark:bg-black-400 h-6 w-[1px] border-0 bg-gray-300" />
            <Button
              position="right"
              onClick={() => {
                setIsActiveLeft(false);
                onLastClick?.();
              }}
            >
              {lastText}
            </Button>
          </>
        );
      case ARROW:
        return (
          <>
            <button className="pl-4" onClick={() => onFirstClick?.()}>
              <ArrowLeft className="dark:text-white-100 h-6 w-6 text-enabled" />
            </button>
            <span>{firstText}</span>
            <button className="pr-4" onClick={() => onLastClick?.()}>
              <ArrowLeft className="dark:text-white-100 h-6 w-6 rotate-180 transform text-enabled" />
            </button>
          </>
        );
    }
  };

  return (
    <div className="dark:border-black-400 dark:bg-black-600 flex h-[42px] w-full items-center justify-between rounded-[20px] border-[1px] border-black/10 bg-gray-500 text-xs font-medium tracking-tight text-black dark:text-gray-300">
      {render()}
    </div>
  );
}

const LEFT = "left";
const RIGHT = "right";

function Button({
  children,
  isActive,
  position,
  onClick,
}: {
  children?: React.ReactNode;
  isActive?: boolean;
  position: typeof LEFT | typeof RIGHT;
  onClick: () => void;
}) {
  return (
    <button
      className={classNames("h-full w-full", {
        "bg-enabled": isActive,
        "text-white": isActive,
        "rounded-r-[20px]": position === RIGHT,
        "rounded-l-[20px]": position === LEFT,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
