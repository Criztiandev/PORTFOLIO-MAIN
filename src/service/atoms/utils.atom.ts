import { atom } from "jotai";
export const cursorAtom = atom({
  width: 64,
  height: 64,
  isHovered: true,
});
