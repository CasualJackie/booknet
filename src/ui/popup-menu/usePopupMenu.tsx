"use client";
import { useAppSelector } from "@/store/hooks";
import { setIsMenuSettingsOpen } from "@/store/menu/reducer";
import { useDispatch } from "react-redux";

export function usePopupMenu() {
  const dispatch = useDispatch();
  const { isSettingsOpen } = useAppSelector((state) => state.menu);

  const handleCondition = () => {
    dispatch(setIsMenuSettingsOpen(!isSettingsOpen));
  };

  return { isOpen: isSettingsOpen, changeCondition: handleCondition };
}
