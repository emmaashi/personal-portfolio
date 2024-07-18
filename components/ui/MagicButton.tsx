import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button className="relative inline-flex items-center justify-center h-12 px-4 rounded-lg border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-slate-950 text-white text-sm font-medium overflow-hidden">
      <span className="absolute inset-[-1000%] animate-spin_2s_linear_infinite bg-conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)">
        {title}
      </span>
      <span className={'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}'}>
        {position ==='left' && icon}
        {title}
        {position ==='right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;