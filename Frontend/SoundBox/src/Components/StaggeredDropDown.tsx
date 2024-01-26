import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type StaggeredDropDownProps = {
  voiceId: number;
  setVoiceId: React.Dispatch<SetStateAction<number>>;
  setIsNavMenuVisible: React.Dispatch<SetStateAction<boolean>>;
};

const StaggeredDropDown: React.FC<StaggeredDropDownProps> = ({
  voiceId,
  setVoiceId,
  setIsNavMenuVisible,
}): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      // dropdownRef.current.contains(event.target as Node) ==> this checks if the element that triggered the mouse click is a descendant of the element the ref is pointing to
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const voiceModels = [
    {
      id: 1,
      model: "Charlotte (female)",
    },
    {
      id: 2,
      model: "John (male)",
    },
    {
      id: 3,
      model: "Rebecca (female)",
    },
    {
      id: 4,
      model: "Robert (male)",
    },
    {
      id: 5,
      model: "Louise (female)",
    },
  ];

  return (
    <div className="flex mx-4 items-center mr-4 justify-center text-white bg-transparent">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center justify-between rounded-md text-white bg-transparent transition-colors"
        >
          <span className="font-normal mr-2 text-base text-white">
            Select voice
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 py-1 rounded-lg bg-transparent lg:bg-black lg:shadow-sm lg:shadow-violet-700 absolute left-[220%] top-0 lg:top-[120%] lg:left-[50%] w-48 overflow-hidden"
        >
          {voiceModels.map((models) => (
            <Option
              text={models.model}
              onClick={() => {
                setOpen(false);
                setVoiceId(models.id);
                setIsNavMenuVisible(false);
              }}
              extraStyles={() => {
                return models.id === voiceId
                  ? "lg:bg-sky-600 lg:text-white text-sky-600"
                  : "";
              }}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

type OptionProps = {
  text: string;
  Icon?: IconType;
  onClick: () => void;
  extraStyles: () => string;
};

const Option: React.FC<OptionProps> = ({
  text,
  Icon,
  onClick,
  extraStyles,
}) => {
  const isSelected = extraStyles();
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className={twMerge(
        "flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap hover:bg-sky-600 text-white transition-colors cursor-pointer",
        isSelected
      )}
    >
      {Icon && (
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
      )}
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.04,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
