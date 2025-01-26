import type { CSSProperties, DetailedHTMLProps, FC } from "react";

type ReactSpanProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  name: string;
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const className = ["material-icons", props.className].join(" ");
  return (
    <span {...props} className={className}>
      {name}
    </span>
  );
};
