import Box from "@mui/material/Box";
import MainDash from "./main_dash";
import SpendDash from "./spend_dash";

export default function MainPane() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "100%",
        padding: "0 20px 32px 0",
        width: "100%",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          height: "100%",
          padding: "32px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <MainDash />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <SpendDash />
        </Box>
      </Box>
    </Box>
  );
}
