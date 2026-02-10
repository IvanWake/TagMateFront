import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const TabProfileIcon = ({
  width = 24,
  height = 24,
  color = "#A29FA8",
  ...props
}: Props) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.12903 15.2734C3.29032 16.7765 3.29032 19.2259 6.12903 20.7196C9.35484 22.4268 14.6452 22.4268 17.871 20.7196C20.7097 19.2166 20.7097 16.7672 17.871 15.2734C14.6569 13.5755 9.36657 13.5755 6.12903 15.2734Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export default TabProfileIcon;