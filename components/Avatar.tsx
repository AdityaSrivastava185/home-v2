import React, { HTMLAttributes } from "react";

const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className="size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900"
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Avatar;
