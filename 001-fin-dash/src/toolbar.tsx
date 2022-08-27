import Box from "@mui/material/Box";
import Icon from "./icon";

export default function Toolbar() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <SearchBar />

      <Box sx={{ flexGrow: "1" }} />

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginRight: "20px",
        }}
      >
        <Icon side={24} sx={{ marginRight: "12px" }} />
        <Avatar />
      </Box>
    </Box>
  );
}

function Avatar() {
  return (
    <Box sx={{ backgroundColor: "red", height: "30px", width: "30px" }}></Box>
  );
}

function SearchBar() {
  return (
    <Box sx={{ backgroundColor: "blue", height: "44px", width: "250px" }}></Box>
  );
}
