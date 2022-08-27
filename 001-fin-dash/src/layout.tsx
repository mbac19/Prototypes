import Box from "@mui/material/Box";

import { SidePaneWidthPx, ToolbarHeightPx } from "./layout_specs";

export interface LayoutProps {
  Toolbar: React.ReactNode;
  SidePane: React.ReactNode;
  MainPane: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#EFEDEC",
        bottom: "0",
        display: "flex",
        flexDirection: "row",
        left: "0",
        position: "absolute",
        right: "0",
        top: "0",
      }}
    >
      <Box
        sx={{
          minWidth: `${SidePaneWidthPx}px`,
          width: `${SidePaneWidthPx}`,
        }}
      >
        {props.SidePane}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        <Box
          sx={{
            height: `${ToolbarHeightPx}px`,
            minHeight: `${ToolbarHeightPx}px`,
          }}
        >
          {props.Toolbar}
        </Box>
        <Box sx={{ display: "flex", flexGrow: "1" }}>{props.MainPane}</Box>
      </Box>
    </Box>
  );
}
