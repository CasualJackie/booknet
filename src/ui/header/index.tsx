"use client";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import List from "@/assets/svg/list.svg";
import AddLib from "@/assets/svg/add-lib.svg";
import Gear from "@/assets/svg/gear.svg";
import PaperOpen from "@/assets/svg/paper-open.svg";
import Share from "@/assets/svg/share.svg";
import ThreePoints from "@/assets/svg/three-points.svg";
import { PopupMenu } from "@/ui/popup-menu";
import { usePopupMenu } from "@/ui/popup-menu/usePopupMenu";
import classNames from "classnames";

export function Header() {
  const { isOpen, changeCondition } = usePopupMenu();
  return (
    <header className="dark:bg-black-800 relative flex h-14 items-center justify-between bg-yellow-100 p-4 shadow-sm md:h-16 md:px-8 md:py-[18px]">
      <button className="flex gap-x-4">
        <ArrowLeft className="dark:text-white-100 h-6 w-6 text-gray-600" />

        <span className="text-4 hidden font-medium text-gray-600 md:inline">
          Коли сонце сідає за схил
        </span>
      </button>

      <div className="flex gap-x-6">
        <button>
          <List className="dark:text-white-100 h-6 w-6 text-gray-600" />
        </button>
        <button>
          <AddLib className="dark:text-white-100 h-6 w-6 text-gray-600" />
        </button>
        <button className="xs:block hidden">
          <PaperOpen className="dark:text-white-100 h-6 w-6 text-gray-600" />
        </button>
        <button className="xs:block hidden">
          <Share className="dark:text-white-100 h-6 w-6 text-gray-600" />
        </button>
        <button>
          <Gear
            className={classNames("dark:text-white-100 h-6 w-6", {
              "xs:text-enabled xs:dark:text-enabled": isOpen,
            })}
            onClick={changeCondition}
          />
        </button>
        <button>
          <ThreePoints className="dark:text-white-100 h-6 w-6 text-gray-600" />
        </button>
      </div>

      <PopupMenu />
    </header>
  );
}
