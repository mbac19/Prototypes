import Box from "@mui/material/Box";

import { SxProps } from "@mui/material";

export interface IconProps {
  side: number;
  sx?: SxProps;
}

export default function Icon(props: IconProps) {
  return (
    <Box
      sx={{
        backgroundColor: "purple",
        height: `${props.side}px`,
        width: `${props.side}px`,
        ...props.sx,
      }}
    ></Box>
  );
}
