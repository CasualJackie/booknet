"use client";
import { Popup } from "@/ui/popup";
import { usePopupMenu } from "./usePopupMenu";
import X from "@/assets/svg/x.svg";
import Message from "@/assets/svg/message.svg";
import TextSize from "@/assets/svg/text-size.svg";
import Palette from "@/assets/svg/palette.svg";
import TextFont from "@/assets/svg/text-font.svg";
import BookOpen from "@/assets/svg/book-open.svg";
import FieldWidth from "@/assets/svg/field-width.svg";
import { Toggle } from "@/ui/toggle";
import { Switcher } from "@/ui/switcher";
import { useState } from "react";
import classNames from "classnames";
import { useThemeContext } from "@/styles/theme/provider";

export function PopupMenu() {
  const { setDarkTheme, setLightTheme } = useThemeContext();
  const { isOpen, changeCondition } = usePopupMenu();

  const [isTextWrap, setIsTextWrap] = useState(false);

  return (
    <Popup
      open={isOpen}
      closeModal={changeCondition}
      className="xs:absolute xs:py-8 xs:pl-6 xs:dark:border-black-400 xs:dark:border-[1px] xs:pr-[30px] xs:left-[auto] xs:right-[40px] xs:top-[50px] xs:m-0 xs:w-[379px] xs:min-w-min xs:rounded-2xl xs:shadow-lg dark:bg-black-700 fixed inset-x-0 bottom-0 mb-0 mt-auto w-full min-w-full rounded-t-2xl bg-white p-4 shadow-md"
    >
      <div className="xs:hidden relative mb-2 flex justify-end">
        <div className="dark:bg-black-500 absolute left-[50%] h-1 w-[34px] translate-x-[-50%] rounded-full bg-gray-400/50" />

        <button
          className="dark:bg-black-600 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400/15"
          onClick={changeCondition}
        >
          <X className="h-[10px] w-[10px] text-black dark:text-gray-200" />
        </button>
      </div>

      <div className="xs:pl-0 xs:pr-0 xs:gap-y-8 flex flex-col gap-y-6 pl-1 pr-1">
        <PopupMenuLine>
          <PopupMenuLabel icon={<Message className="h-6 w-6" />}>
            Коментарі до абзаців
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => {}}
            onLastClick={() => {}}
            firstText="Сховати"
            lastText="Показувати"
            kind="active"
          />
        </PopupMenuLine>

        <PopupMenuLine>
          <PopupMenuLabel icon={<TextSize className="h-6 w-6" />}>
            Розмір тексту
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => {}}
            onLastClick={() => {}}
            firstText="Менше"
            lastText="Більше"
            kind="divider"
          />
        </PopupMenuLine>

        <PopupMenuLine isMobileHide>
          <PopupMenuLabel icon={<FieldWidth className="h-6 w-6" />}>
            Ширина полів
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => {}}
            onLastClick={() => {}}
            firstText="Менше"
            lastText="Більше"
            kind="divider"
          />
        </PopupMenuLine>

        <PopupMenuLine>
          <PopupMenuLabel icon={<Palette className="h-6 w-6" />}>
            Колір теми
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => setDarkTheme()}
            onLastClick={() => setLightTheme()}
            firstText="Темніше"
            lastText="Світліше"
            kind="divider"
          />
        </PopupMenuLine>

        <PopupMenuLine>
          <PopupMenuLabel icon={<TextFont className="h-6 w-6" />}>
            Шрифт
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => {}}
            onLastClick={() => {}}
            firstText="Roboto"
            kind="arrow"
          />
        </PopupMenuLine>

        <PopupMenuLine isDesktopHide>
          <PopupMenuLabel icon={<BookOpen className="h-6 w-6" />}>
            Гортання сторінок
          </PopupMenuLabel>

          <Toggle
            onFirstClick={() => {}}
            onLastClick={() => {}}
            firstText="Зверху-вниз"
            lastText="Справа-наліво"
            kind="active"
          />
        </PopupMenuLine>

        <PopupMenuSwitcherLine
          isChecked={isTextWrap}
          onChange={() => setIsTextWrap((prev) => !prev)}
        >
          Перенос тексту
        </PopupMenuSwitcherLine>
      </div>
    </Popup>
  );
}

function PopupMenuLabel({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="dark:text-white-100 flex flex-col items-center gap-y-1">
      {icon}

      <span className="text-center text-[13px] font-medium leading-[17px] tracking-tighter">
        {children}
      </span>
    </div>
  );
}

function PopupMenuLine({
  children,
  isDesktopHide,
  isMobileHide,
}: {
  children?: React.ReactNode;
  isDesktopHide?: boolean;
  isMobileHide?: boolean;
}) {
  return (
    <div
      className={classNames(
        "grid grid-cols-[auto_213px] content-center items-center justify-items-center gap-x-[26px]",
        {
          "xs:hidden": isDesktopHide,
          "xs:grid hidden": isMobileHide,
        },
      )}
    >
      {children}
    </div>
  );
}

function PopupMenuSwitcherLine({
  children,
  isChecked,
  onChange,
  isDesktopHide,
  isMobileHide,
}: {
  children?: React.ReactNode;
  isChecked: boolean;
  onChange: () => void;
  isDesktopHide?: boolean;
  isMobileHide?: boolean;
}) {
  return (
    <div
      className={classNames(
        "xs:pt-4 xs:mx-0 dark:border-black-400 mx-2 flex justify-between border-t-[1px] border-gray-300 pt-6",
        {
          "xs:hidden": isDesktopHide,
          "xs:flex hidden": isMobileHide,
        },
      )}
    >
      <span className="dark:text-white-100 text-base font-medium tracking-tightest text-black">
        {children}
      </span>

      <Switcher isChecked={isChecked} onChange={onChange} />
    </div>
  );
}
