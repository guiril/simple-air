export default function ToggleSwitch({
  id,
  title,
  checked,
  onSwitchChanged
}: {
  id: string;
  title: string;
  checked: boolean;
  onSwitchChanged: () => void;
}) {
  return (
    <div className="flex justify-between items-center py-[7px]">
      <span className="text-p-sm-r-2 text-neutral-500">{title}</span>
      <label htmlFor={id} className="relative w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          className="hidden peer"
          checked={checked}
          onChange={onSwitchChanged}
        />
        <span
          className="absolute top-0 right-0 bottom-0 left-0 bg-neutral-400 rounded-[100px] duration-300
            before:absolute before:top-[2px] before:left-[3px]
            before:w-5 before:h-5 before:bg-neutral-0 before:rounded-full before:ease-in-out before:duration-300
          peer-checked:bg-primary-500
            peer-checked:before:translate-x-[22px]"
        />
      </label>
    </div>
  );
}
