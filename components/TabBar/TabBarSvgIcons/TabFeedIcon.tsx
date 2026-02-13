import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const TabFeedIcon = ({
  width = 24,
  height = 24,
  color = "#A29FA8",
  ...props
}: Props) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <g stroke={color} stroke-width="1.8" clip-path="url(#a)">
      <path d="m20.596 2.46-6.718-.986a2.317 2.317 0 0 0-2.62 1.925L9.094 17.071a2.255 2.255 0 0 0 1.904 2.59l6.718.985a2.317 2.317 0 0 0 2.62-1.925L22.5 5.049a2.254 2.254 0 0 0-1.904-2.59Z" />
      <path
        stroke-linecap="round"
        d="m7.258 6.855-3.84.384a2.264 2.264 0 0 0-2.03 2.499L2.51 20.165a2.307 2.307 0 0 0 2.519 2.045l3.84-.383"
      />
    </g>
  </svg>
);

export default TabFeedIcon;
