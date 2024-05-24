import clsx from "clsx";

interface FilterCheckProps {
  checked: boolean;
}

export const CheckButton = ({ checked }: FilterCheckProps) => {
  return (
    <div
      className={clsx(
        " min-w-[14px] cursor-pointer w-[14px] aspect-square rounded-[2px] ",
        checked
          ? "border-[3px] border-[#F9E7CD] bg-orange-one"
          : "border border-[#878787] bg-white"
      )}
    />
  );
};
