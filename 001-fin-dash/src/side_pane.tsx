import Box from "@mui/material/Box";
import Icon from "./icon";
import Typography from "@mui/material/Typography";

import { PageLeadingMarginPx, ToolbarHeightPx } from "./layout_specs";

export default function SidePane() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Logo />
      <Box
        sx={{ display: "flex", flexDirection: "column", marginTop: "120px" }}
      >
        <ListItem title="Overview" />
        <ListItem title="Messages" />
        <ListItem title="Community" />
        <ListItem title="Payments" />
        <ListItem title="Statistics" />
        <ListItem title="Referals" />
      </Box>

      <Box sx={{ flexGrow: "1" }} />

      <Box
        sx={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
      >
        <ListItem title="Account" />
        <ListItem title="Settings" />
      </Box>
    </Box>
  );
}

interface ListItemProps {
  title: string;
}

function ListItem(props: ListItemProps) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        padding: `20px`,
      }}
    >
      <Icon side={30} />
      <Typography sx={{ marginLeft: "12px" }}>{props.title}</Typography>
    </Box>
  );
}

function Logo() {
  const width = 100;
  const height = 44;
  const top = (ToolbarHeightPx - height) / 2;
  const leading = 12;

  return (
    <Box
      sx={{
        backgroundColor: "blue",
        width: `${width}px`,
        height: `${height}px`,
        marginTop: `${top}px`,
        marginLeft: `${leading}px`,
      }}
    ></Box>
  );
}
