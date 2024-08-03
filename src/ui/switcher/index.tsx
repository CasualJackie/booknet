import classNames from "classnames";

type Props = {
  isChecked: boolean;
  onChange: () => void;
};

export function Switcher({ isChecked, onChange }: Props) {
  return (
    <div
      className={classNames(
        "w relative flex h-[25px] w-10 cursor-pointer items-center rounded-[12.5px]",
        {
          "bg-enabled": isChecked,
          "dark:bg-black-400 bg-gray-550": !isChecked,
        },
      )}
      onClick={onChange}
    >
      <div
        className={classNames(
          "absolute left-1 h-[15px] w-[15px] rounded-full bg-white transition-transform",
          { "translate-x-full transform": isChecked },
        )}
      ></div>
    </div>
  );
}
